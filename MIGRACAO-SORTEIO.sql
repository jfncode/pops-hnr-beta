-- POPs HNR — adiciona a coluna do sorteio de 30 POPs por colaborador.
-- Rodar no SQL Editor do Supabase (projeto POP NEREU).
alter table colaboradores add column if not exists sorteio jsonb;
