![Logo](https://i.ibb.co/5L70d3q/Cormorant.jpg  )
# API Rest - Mobilia de Hotel

## Sobre

Criação de API para cadastro de mobilias de um hotel, utilizando os verbos HTTP seguindo o padrão REST e contendo todas as operações de CRUD.

## Badges

![Node](https://img.shields.io/badge/node-16.2.0-green)
![Nodemon](https://img.shields.io/badge/nodemon-2.0.12-green)
![Express](https://img.shields.io/badge/express-4.17.1-green)
![Sqlite](https://img.shields.io/badge/Sqlite3-5.0.2-blue)
![GitHub](https://img.shields.io/badge/GITHUB-%23121011.svg?&style=flat&logo=github&logoColor=white)

## Bibliotecas
* [Nodemon](https://nodemon.io/)

## Framework 
* [Express](https://expressjs.com/pt-br/)

## Banco de dados
* [SQLite3](https://www.npmjs.com/package/sqlite3)

## Testes APi REST

* [Insominia](https://insomnia.rest/download)

## Instalação

Você precisará ter o [NodeJS](https://nodejs.org) instalado na sua máquina, e, após isso, clonar este repositório:

```bash
git clone https://annachucky.github.io/08-Api/

```
## Executando a aplicação

Para executá-la é muito simples, basta rodar os seguintes comandos:
```sh
  $ npm install # instalando os pacotes
  $ npm run start # iniciando o projeto
```

Em seguida é importante rodar o banco de dados, para que isso seja possível, dentro da pasta src/infra/create.js.
Dentro do terminal coloque o código abaixo e pressione enter 

```sh
  $ npm run dev # criando o banco de dados

```

## Testes

Para realizar os testes abra o Insominia e utilize os seguntes verbos e os seguntes caminhos:

GET:

http://localhost:3030/mobilia

http://localhost:3030/mobilia/:id

POST:

http://localhost:3030/mobiliainserir

DEL

http://localhost:3030/mobilia/delete/:id

http://localhost:3030/mobilia/deletetipo/:tipomobilia

http://localhost:3030/mobilia/deletecor/:cor

http://localhost:3030/mobilia/deletemanutencao/s:manutencao

PUT

http://localhost:3030/mobilia/edit/:id



