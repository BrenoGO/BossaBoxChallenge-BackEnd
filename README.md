# BossaBoxChallenge-BackEnd
Repositório do desafio de Back End do BossaBox

# VUTTR
VUTTR é um simples repositório para gerenciar ferramentas com seus respectivos nomes, links, descrições e tags.
Na API você pode listar todas as ferramentas, filtrar as ferramentas que possuem alguma tag, adicionar ferramenta, deletar ferramenta de acordo com o ID da mesma e mostrar uma ferramenta de acordo com seu ID.

## Desenvolvimento
A API foi desenvolvida com o NodeJS e MongoDB como banco de dados.

+ As dependências, gerenciadas com yarn, foram:
  + Express como framework para facilitar a criação do servidor http. 
  + Consign para carregar automaticamente os módulos de models, controllers e routes da api
  + Lodash para facilitar trabalho com objetos e arrays
  + Passport, passport-jwt e jsonwebtoken para realizar autenticação de usuario
+ MiddleWares:
  + Cors para permitir comunicação com outros domínios. 
  + Body-parser para facilitar a leitura da requisição em formato json
  + Mongoose como ORM, facilitando a comunicação com banco de dados
+ devDependencies:
  + Nodemon, agilizando a atualização da API durante o desenvolvimento.
  + Jshint para padronização do código

## Testando a API
Para facilitar o teste do uso da API ela foi disponibilizada online e se encontra em https://bossabox-challenge-backend.herokuapp.com/ Pode ser testado com aplicativos como Insomnia ou Postman. 
Temos autenticação para inserir ou remover ferramentas, portanto é necessário realizar uma requição POST para '/login' com os dados {"name": "Teste", "password": "teste123"} e extrair o token retornado. As requisições para adicionar ou remover ferramentas deverá ter no Header o campo Authorization e valor `JWT ${Token}`.