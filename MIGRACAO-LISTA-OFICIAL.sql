-- ============================================================
-- Portal do Colaborador HNR — LISTA OFICIAL (cadastro único)
-- Rodar o bloco 1 no SQL Editor JÁ (seguro com a lista vazia: nada muda
-- no cadastro até inserir linhas). O bloco 2 (comentado) roda só quando
-- o Jefferson subir a lista real.
-- ============================================================

-- ---------- BLOCO 1 · estrutura (rodar agora) ----------
create table if not exists lista_oficial (
  matricula text primary key,
  nome      text not null,
  email     text not null,
  setor     text            -- opcional; quando preenchido, o cadastro força este setor
);
alter table lista_oficial enable row level security;
-- deny-all: nenhuma policy de select/insert/update/delete para anon/authenticated.
revoke all on lista_oficial from anon, authenticated;

-- lista está ativa? (vazia = cadastro aberto como hoje)
create or replace function lista_ativa() returns boolean
language sql security definer stable as $$
  select exists(select 1 from lista_oficial); $$;
revoke all on function lista_ativa() from public;

-- validação de UX no formulário (roda ANTES de existir conta → grant a anon).
-- Não revela qual campo errou; só responde no match exato do PAR matrícula+e-mail.
create or replace function validar_matricula(p_matricula text, p_email text)
returns jsonb language plpgsql security definer stable as $$
declare reg lista_oficial%rowtype;
begin
  if not lista_ativa() then return jsonb_build_object('aberto', true); end if;
  select * into reg from lista_oficial
   where matricula = trim(p_matricula)
     and lower(email) = lower(trim(p_email));
  if not found then return jsonb_build_object('ok', false); end if;
  return jsonb_build_object('ok', true, 'nome', reg.nome, 'setor', coalesce(reg.setor,''));
end $$;
revoke all on function validar_matricula(text,text) from public;
grant execute on function validar_matricula(text,text) to anon, authenticated;

-- ENFORCEMENT real na camada de dados: sem isto a allowlist seria só cosmética
-- (o cliente tem grant de insert/update em colaboradores e poderia pular o RPC).
create or replace function colaboradores_valida_lista()
returns trigger language plpgsql security definer as $$
declare reg lista_oficial%rowtype;
begin
  if new.is_gestor then return new; end if;          -- contas de gestão são criadas por migração
  if not lista_ativa() then return new; end if;      -- lista vazia = comportamento atual
  select * into reg from lista_oficial
   where matricula = trim(coalesce(new.matricula,''))
     and lower(email) = lower(trim(coalesce(new.email,'')));
  if not found then
    raise exception 'matrícula e e-mail não constam na lista oficial de colaboradores';
  end if;
  new.nome := reg.nome;                               -- nome oficial, sem erro de digitação
  if reg.setor is not null and reg.setor <> '' then new.setor := reg.setor; end if;
  return new;
end $$;
revoke all on function colaboradores_valida_lista() from public;
drop trigger if exists colaboradores_lista_check on colaboradores;
create trigger colaboradores_lista_check
  before insert or update of matricula, email, nome, setor on colaboradores
  for each row execute function colaboradores_valida_lista();

-- ---------- BLOCO 2 · carga da lista (rodar QUANDO a lista chegar) ----------
-- 1) limpar contas de teste (JEFFERSON CONFIRMA os e-mails antes):
-- delete from auth.users where email in ('<email-teste-1>', '<email-teste-2>');
-- 2) matrícula única (fecha o bug da matrícula 2525 duplicada — limpar antes):
-- create unique index if not exists colaboradores_matricula_uq
--   on colaboradores (matricula) where matricula is not null and matricula <> '' and not is_gestor;
-- 3) inserir a lista oficial (modelo):
-- insert into lista_oficial (matricula, nome, email, setor) values
--   ('1234', 'Nome Completo', 'email@exemplo.com', 'uti'),
--   ('5678', 'Outra Pessoa', 'outra@exemplo.com', null);
