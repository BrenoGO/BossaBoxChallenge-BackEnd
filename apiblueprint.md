FORMAT: 1A

# VUTTR

VUTTR é um simples repositório para gerenciar ferramentas com seus respectivos nomes, links, descrições e tags.

# Group Tools

Grupo de todas as ferramentas

## Autenticação [/login]

### Realizar o login na aplicação [POST]
Para criar ou excluir ferramentas na aplicação será necessário ter realizado login inicialmente
+ name - Nome do usuário
+ password - senha do usuário
+ Request (application/json)
          {
            "name": "Teste",
            "password": "teste123"
          }
+ Response 200 (application/json)
        {
          "message": "ok",
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDMxZDU3M2U3MTc5YTI2YTk3MjljZTMiLCJpYXQiOjE1NjM1NjgxMDh9.-zH9eDqn_CCerLRaA0uKSJOMWN01gF0eBKnHPl2lM_Q"
        }

Este token deve ser guardado para ser inserido no header, em Authorization.

## Ferramentas [/tools]

### Listar ferramentas [GET]
Lista todas as ferramentas 

+ Response 200 (application/json)

        [
          {
            "tags": [
              "organization",
              "planning",
              "collaboration",
              "writing",
              "calendar"
            ],
            "title": "Notion",
            "link": "https://notion.so",
            "description": "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ",
            "id": 1,
          },
          {
            "tags": [
              "api",
              "json",
              "schema",
              "node",
              "github",
              "rest"
            ],
            "title": "json-server",
            "link": "https://github.com/typicode/json-server",
            "description": "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.",
            "id": 2,
          },
          {
            "tags": [
              "web",
              "framework",
              "node",
              "http2",
              "https",
              "localhost"
            ],
            "title": "fastify",
            "link": "https://www.fastify.io/",
            "description": "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
            "id": 3,
          }
        ]

### Criar ferramenta [POST] - Protegido por autenticação
Criar uma nova ferramenta
+ title(string) - O título, ou nome, da ferramenta
+ link(string) - O link para o site oficial da ferramenta
+ description(string) - A descrição da ferramenta
+ tags(array[string]) - tags para realizar buscas de ferramentas
+ Header
  + Content-Type: application/json
  + Authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDMxZDU3M2U3MTc5YTI2YTk3MjljZTMiLCJpYXQiOjE1NjM1NjgxMDh9.-zH9eDqn_CCerLRaA0uKSJOMWN01gF0eBKnHPl2lM_Q
+ Request (application/json)
	
        {
          "title": "Nova Ferramenta",
          "link": "https://www.novaferramenta.com.br"
          "description": "Nova ferramenta para teste de API",
          "tags": [
            "react",
            "react-native"
          ]
        }

+ Response 201 Created (application/json)
	
        {
          "id": "4"
          "title": "Nova Ferramenta",
          "link": "https://www.novaferramenta.com.br"
          "description": "Nova ferramenta capaz de muitas coisas",
          "tags": [
            "react",
            "react-native"
          ]
        }

## Ferramenta com id [tools/{id}]
Especificar a ferramenta de acordo com seu id
+ Parâmetros
	+ id: 3 (number) - id da ferramenta que será removida

### Mostrar ferramenta de acordo com o id passado [GET]
+ Response 200
	        {
            "tags": [
              "web",
              "framework",
              "node",
              "http2",
              "https",
              "localhost"
            ],
            "title": "fastify",
            "link": "https://www.fastify.io/",
            "description": "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
            "id": 3,
	        }
 
### Remover ferramenta [DELETE] - Protegido por autenticação
+ Header
  + Content-Type: application/json
  + Authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDMxZDU3M2U3MTc5YTI2YTk3MjljZTMiLCJpYXQiOjE1NjM1NjgxMDh9.-zH9eDqn_CCerLRaA0uKSJOMWN01gF0eBKnHPl2lM_Q
+ Response 200
	{}

## Ferramentas com Tags [/tools?tag={tag}]
Especificar uma tag que pode existir nas tags das ferramentas
+ Parâmetros
	+ tag: node (string) - tag a ser buscada nas tags das ferramentas

### Buscar ferramentas [GET]
+ Response 200 (application/json)

        [
          {
            "tags": [
              "api",
              "json",
              "schema",
              "node",
              "github",
              "rest"
            ],
            "title": "json-server",
            "link": "https://github.com/typicode/json-server",
            "description": "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.",
            "id": 2,
          },
          {
            "tags": [
              "web",
              "framework",
              "node",
              "http2",
              "https",
              "localhost"
            ],
            "title": "fastify",
            "link": "https://www.fastify.io/",
            "description": "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
            "id": 3,
          }
        ]