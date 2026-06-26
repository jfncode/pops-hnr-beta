-- ============================================================
-- POPs HNR — RESET + modelo para login por E-MAIL/SENHA (Supabase Auth)
-- Rodar o BLOCO INTEIRO no SQL Editor (apague o que estiver no editor antes).
-- Sem gatilho em auth.users (o perfil é criado pelo app no cadastro).
-- ============================================================
drop trigger if exists on_auth_user_created on auth.users;
drop function if exists handle_new_user() cascade;
drop function if exists salvar_resultado(jsonb) cascade;
drop function if exists status_colaborador() cascade;
drop function if exists status_colaborador(text) cascade;
drop function if exists cadastrar_colaborador(text,text,text) cascade;
drop function if exists eh_gestor() cascade;
drop table if exists resultados cascade;
drop table if exists colaboradores cascade;

create table colaboradores (
  id uuid primary key references auth.users(id) on delete cascade,
  nome text not null default '',
  setor text not null default '',
  matricula text,
  email text,
  is_gestor boolean not null default false,
  created_at timestamptz default now()
);
create table resultados (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references colaboradores(id) on delete cascade,
  pop_id text not null, pop_codigo text,
  status text not null check (status in ('aprovado','reprovado')),
  score int, acertos int, total int, tentativas int default 1, detalhe jsonb,
  updated_at timestamptz default now(),
  unique (user_id, pop_id)
);
alter table colaboradores enable row level security;
alter table resultados enable row level security;

create function eh_gestor() returns boolean
language sql security definer stable as $$
  select coalesce((select is_gestor from colaboradores where id = auth.uid()), false); $$;

create policy colab_sel on colaboradores for select to authenticated using (id = auth.uid() or eh_gestor());
create policy colab_ins on colaboradores for insert to authenticated with check (id = auth.uid());
create policy colab_upd on colaboradores for update to authenticated using (id = auth.uid());
create policy res_sel on resultados for select to authenticated using (user_id = auth.uid() or eh_gestor());

create function salvar_resultado(r jsonb) returns void
language plpgsql security definer as $$
declare uid uuid := auth.uid();
begin
  if uid is null then raise exception 'nao autenticado'; end if;
  insert into resultados(user_id,pop_id,pop_codigo,status,score,acertos,total,tentativas,detalhe)
  values (uid, r->>'pop_id', r->>'pop_codigo', r->>'status',
          (r->>'score')::int,(r->>'acertos')::int,(r->>'total')::int,1,r->'detalhe')
  on conflict (user_id,pop_id) do update set
    tentativas = resultados.tentativas + 1,
    status  = case when resultados.status='aprovado' then resultados.status  else excluded.status  end,
    score   = case when resultados.status='aprovado' then resultados.score   else excluded.score   end,
    acertos = case when resultados.status='aprovado' then resultados.acertos else excluded.acertos end,
    total   = case when resultados.status='aprovado' then resultados.total   else excluded.total   end,
    detalhe = case when resultados.status='aprovado' then resultados.detalhe else excluded.detalhe end,
    updated_at = now();
end $$;

create function status_colaborador() returns setof text
language sql security definer stable as $$
  select pop_id from resultados where user_id = auth.uid() and status='aprovado'; $$;

grant execute on function eh_gestor() to authenticated;
grant execute on function salvar_resultado(jsonb) to authenticated;
grant execute on function status_colaborador() to authenticated;

-- marca a gestora (já criada no Auth) como gestora
insert into colaboradores(id,nome,setor,is_gestor)
select id,'Gestora — Educação Continuada','-',true from auth.users where email='gestora@hnr.br'
on conflict (id) do update set is_gestor=true;
