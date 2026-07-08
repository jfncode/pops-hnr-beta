-- ============================================================
-- HOTFIX de SEGURANCA — fecha escalacao de privilegio em colaboradores.is_gestor
-- ------------------------------------------------------------
-- Contexto: a policy de UPDATE (colab_upd) autoriza a LINHA (id = auth.uid())
-- mas nao as COLUNAS. Como o Supabase concede UPDATE em todas as colunas ao
-- papel `authenticated`, qualquer colaborador logado conseguia rodar
--   update colaboradores set is_gestor = true where id = auth.uid()
-- se auto-promover a gestor e ler a PII de TODOS (nome, e-mail, matricula) +
-- todos os resultados. Violacao direta de LGPD.
--
-- Este patch e IDEMPOTENTE e NAO-DESTRUTIVO (nao dropa tabelas nem dados).
-- Rodar o bloco inteiro no SQL Editor do Supabase (projeto ezkohniydtijcycqevqj).
-- ============================================================

-- 1) Trava a coluna is_gestor: cliente nunca escreve. Owner/service_role mantem acesso.
revoke insert, update on public.colaboradores from anon, authenticated;
grant insert (id, nome, setor, matricula, email) on public.colaboradores to authenticated;
grant update (nome, setor, matricula, email) on public.colaboradores to authenticated;

-- 2) Reforca a policy de UPDATE com WITH CHECK (impede tambem trocar o proprio id).
alter policy colab_upd on public.colaboradores
  using (id = auth.uid()) with check (id = auth.uid());

-- ------------------------------------------------------------
-- VERIFICACAO (rodar depois; is_gestor NAO deve aparecer para authenticated/anon):
--   select grantee, privilege_type, column_name
--   from information_schema.column_privileges
--   where table_name = 'colaboradores' and grantee in ('authenticated','anon')
--   order by grantee, privilege_type, column_name;
--
-- Teste de invasao (no console do navegador, LOGADO como colaborador comum):
--   await window._sb.from('colaboradores').update({is_gestor:true}).eq('id',(await window._sb.auth.getUser()).data.user.id)
--   -> deve retornar erro "permission denied for column is_gestor" (antes: sucesso).
-- ============================================================
