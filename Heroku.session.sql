--create table noticias(id_noticia serial primary key, titulo varchar(100) not null, conteudo text not null, data_criacao timestamp without time zone default (now() at time zone 'utc+3'))
--insert into noticias(titulo, conteudo) VALUES ('Banco de dados online', 'Foi realizado a primeira inserção de dados na tabela')
SELECT * from noticias


