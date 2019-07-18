# BossaBoxChallenge-BackEnd
Repositório do desafio de Back End do BossaBox

# VUTTR
VUTTR é um simples repositório para gerenciar ferramentas com seus respectivos nomes, links, descrições e tags.
Na API você pode listar todas as ferramentas, filtrar as ferramentas que possuem alguma tag, adicionar ferramenta, deletar ferramenta de acordo com o ID da mesma e mostrar uma ferramenta de acordo com seu ID.

## Desenvolvimento
A API foi desenvolvida com o NodeJS e MongoDB como banco de dados.

+ As dependências, gerenciadas com yarn, foram:
  + Express como framework para facilitar a criação do servidor http. 
  + Express-load para carregar os módulos de models e controllers da api
  + Lodash para facilitar trabalho com objetos e arrays
+ MiddleWares:
  + Cors para permitir comunicação com outros domínios. 
  + Body-parser para facilitar a leitura da requisição em formto json
  + Mongoose como ORM, facilitando a comunicação com banco de dados
+ devDependencies:
  + Nodemon, agilizando a atualização da API durante o desenvolvimento.
  + Jshint para padronização do código

## Testando a API
Para facilitar o teste do uso da API ela foi disponibilizada online e se encontra em https://bossabox-challenge-backend.herokuapp.com/ Pode ser testado com aplicativos como Insomnia ou Postman