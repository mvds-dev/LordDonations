## Projeto Final M4 - Lord Donations

Projeto de conclusão do quarto módulo.

# Documentação da API

## Tabela de Conteúdos

- [Visão Geral](#1-visão-geral)
- [Diagrama ER](#2-diagrama-er)
- [Início Rápido](#3-início-rápido)
  - [Instalando Dependências](#31-instalando-dependências)
  - [Variáveis de Ambiente](#32-variáveis-de-ambiente)
  - [Migrations](#33-migrations)
- [Autenticação](#4-autenticação)
- [Endpoints](#5-endpoints)

---

## 1. Visão Geral

Visão geral do projeto, um pouco das tecnologias usadas.

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)

A URL base da aplicação:
https://lord-donations.herokuapp.com/

---

## 2. Diagrama ER

[ Voltar para o topo ](#tabela-de-conteúdos)

Diagrama ER da API definindo bem as relações entre as tabelas do banco de dados.

![DER](Capstone-DER-ProjetoM4.jpg)

---

## 3. Início Rápido

[ Voltar para o topo ](#tabela-de-conteúdos)

### 3.1. Instalando Dependências

Clone o projeto em sua máquina e instale as dependências com o comando:

```shell
yarn
```

### 3.2. Variáveis de Ambiente

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**:

```
cp .env.example .env
```

Configure suas variáveis de ambiente com suas credenciais do Postgres e uma nova database da sua escolha.

### 3.3. Migrations

Execute as migrations com o comando:

```
yarn typeorm migration:run -d src/data-source.ts
```

---

## 4. Autenticação

[ Voltar para o topo ](#tabela-de-conteúdos)

Por enquanto, não foi implementada autenticação.

---

## 5. Endpoints

[ Voltar para o topo ](#tabela-de-conteúdos)

### Índice

- [Users](#1-users)
- [Types](#2-types)
- [Statuses](#3-statuses)
- [Institutions](#4-institutions)
- [Addresses](#5-addresses)
- [Requests](#6-requests)

---

## 1. **Users**

O objeto User é definido como:

| Campo     | Tipo    | Descrição                                       |
| --------- | ------- | ----------------------------------------------- |
| id        | uuid    | Identificador único do usuário.                 |
| name      | string  | O nome do usuário.                              |
| email     | string  | O e-mail do usuário.                            |
| password  | string  | A senha de acesso do usuário.                   |
| age       | number  | A idade do usuário.                             |
| cpf       | number  | O cpf do usuário.                               |
| addressId | uuid    | Id com o endereço do usuário.                   |
| isActive  | boolean | Define se um usuário está ativo ou não.         |
| createdAt | date    | Define a data de criação do usuário.            |
| updatedAt | date    | Define a data de alguma atualização no usuário. |

### Endpoints Users

| Método | Rota         | Descrição                               |
| ------ | ------------ | --------------------------------------- |
| POST   | /users       | Criação de um usuário.                  |
| GET    | /users       | Lista todos os usuários                 |
| POST   | /users/login | Faz o login do usuário gerando um token |
| PATCH  | /users       | Atualiza os dados do usuário            |
| DELETE | /users       | Realiza um softdelete no usuário        |

---

### 1.1. **Criação de Usuário**

[ Voltar para os Endpoints do Usuário ](#endpoints-Users)

### `/users`

### Exemplo de Request:

```
POST /users
Host: https://lord-donations.herokuapp.com/
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
{
	"name": "nome",
	"email": "email@mail.com",
	"password": "123",
	"age": 20,
	"cpf": "000.000.000-00"
}
```

### Exemplo de Response:

```
201 Created
```

```json
{
	"name": "nome",
	"email": "email@mail.com",
	"age": 20,
	"cpf": "000.000.000-00",
	"id": "1e33db4f-4e97-459d-9e3d-7b2eeffc4f8e",
	"isActive": true,
	"createdAt": "2022-09-12T19:11:21.483Z",
	"updatedAt": "2022-09-12T19:11:21.483Z"
}
```

### Possíveis Erros:

| Código do Erro  | Descrição               |
| --------------- | ----------------------- |
| 401 Conflict    | User already exists     |
| 400 Bad request | Request in wrong format |

---

### 1.2. **Listando Usuários**

[ Voltar para os Endpoints do Usuário ](#endpoints-Users)

### `/users`

### Exemplo de Request:

```
GET /users
Host: https://lord-donations.herokuapp.com/
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
[
	{
		"id": "9a5746a1-aaf0-4abb-a26e-1ede9eea12a0",
		"name": "nome",
		"email": "email@mail.com",
		"age": 20,
		"cpf": "000.000.000-00",
		"isActive": true,
		"createdAt": "2022-09-12T14:06:31.179Z",
		"updatedAt": "2022-09-12T17:53:24.098Z"
	}
]
```

### Possíveis Erros:

Nenhum, o máximo que pode acontecer é retornar uma lista vazia.

---

### 1.3. **Login de Usuários**

[ Voltar para os Endpoints do Usuário ](#endpoints-Users)

### `/users/login`

### Exemplo de Request:

```
POST /users/login
Host: https://lord-donations.herokuapp.com/
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
{
	"email": "email@mail.com",
	"password": "123"
}
```

### Exemplo de Response:

```
200 Ok
```

```json
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjlhNTc0NmExLWFhZjAtNGFiYi1hMjZlLTFlZGU5ZWVhMTJhMCIsInVzZXJUeXBlIjoidXNlciIsImlhdCI6MTY2MzAwOTk5OCwiZXhwIjoxNjYzMDk2Mzk4fQ.BTy8nrPj6Ojbb6ZQwfSb_Egw7ORHWAY8Ot9xWpX6IQc"
}
```

### Possíveis Erros:

| Código do Erro  | Descrição               |
| --------------- | ----------------------- |
| 400 Bad request | Request in wrong format |
| 404 Not found   | Wrong email/password    |
| 400 Not found   | User is not active      |

---

### 1.4. **Atualização de Usuários**

[ Voltar para os Endpoints do Usuário ](#endpoints-Users)

### `/users`

### Exemplo de Request:

```
PATCH /users
Host: https://lord-donations.herokuapp.com/
Authorization: Token
Content-type: application/json
```

### Corpo da Requisição:

```json
{
	"name": "nameUpdated",
	"email": "emailUpdated@mail.com",
	"password": "321",
	"age": 21
}
```

### Exemplo de Response:

```
200 Ok
```

```json
{
	"message": "User updated"
}
```

### Possíveis Erros:

| Código do Erro  | Descrição      |
| --------------- | -------------- |
| 400 Bad request | Wrong format   |
| 404 Not found   | User not found |

---

### 1.5. **Deleção de Usuários**

[ Voltar para os Endpoints do Usuário ](#endpoints-Users)

### `/users`

### Exemplo de Request:

```
DELETE /users
Host: https://lord-donations.herokuapp.com/
Authorization: Token
Content-type: application/json
```

### Corpo da Requisição:

```
Vazio
```

### Exemplo de Response:

```
204 No content
```

### Possíveis Erros:

| Código do Erro  | Descrição           |
| --------------- | ------------------- |
| 400 Bad request | Inactive User       |
| 404 Not found   | User does not exist |

---

## 2. **Types**

O objeto types é definido como:

| Campo       | Tipo    | Descrição                           |
| ----------- | ------- | ----------------------------------- |
| id          | uuid    | Identificador único do type.        |
| name        | string  | O nome do tipo.                     |
| description | string  | O nome do tipo.                     |
| isActive    | boolean | Define se o tipo está ativo ou não. |

### Endpoints Types

| Método | Rota   | Descrição             |
| ------ | ------ | --------------------- |
| LIST   | /types | Lista todos os types. |

---

### 2.1. **Listando Types**

[ Voltar para os Endpoints do Types ](#endpoints-types)

### `/types`

### Exemplo de Request:

```
GET /types
Host: https://lord-donations.herokuapp.com/
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
[
	{
		"id": "9a5746a1-aaf0-4abb-a26e-1ede9eea12a0",
		"name": "type A",
		"description": "type A description",
		"isActive": true
	}
]
```

### Possíveis Erros:

Nenhum, o máximo que pode acontecer é retornar uma lista vazia.

---

## 3. **Statuses**

O objeto Status é definido como:

| Campo | Tipo   | Descrição                      |
| ----- | ------ | ------------------------------ |
| id    | uuid   | Identificador único do Status. |
| name  | string | O nome do Status.              |

### Endpoints Status

| Método | Rota      | Descrição             |
| ------ | --------- | --------------------- |
| GET    | /statuses | Lista todos os status |

---

### 3.1. **Listando os Status**

[ Voltar para os Endpoints do Status ](#endpoints-status)

### `/statuses`

### Exemplo de Request:

```
GET /statuses
Host: https://lord-donations.herokuapp.com/
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
[
	{
		"id": "158b6d32-3a92-44d6-a4ba-5b260247dee8",
		"name": "active"
	},
	{
		"id": "eb72e8d2-f07c-4cd6-827e-37c3110a521d",
		"name": "sent"
	},
	{
		"id": "f0054a06-5777-4c8b-980d-a53987ad5589",
		"name": "received"
	}
]
```

### Possíveis Erros:

Nenhum, o máximo que pode acontecer é retornar uma lista vazia.

---

## 4. **Institutions**

O objeto Institutions é definido como:

| Campo     | Tipo    | Descrição                                           |
| --------- | ------- | --------------------------------------------------- |
| id        | uuid    | Identificador único da instituição.                 |
| name      | string  | O nome da instituição.                              |
| email     | string  | O e-mail da instituição.                            |
| password  | string  | A senha de acesso da instituição.                   |
| cnpj      | string  | O cnpj da instituição.                              |
| addressId | uuid    | Id com o endereço da instituição.                   |
| isActive  | boolean | Define se uma instituição está ativa ou não.        |
| createdAt | date    | Define a data de criação da instituição.            |
| updatedAt | date    | Define a data de alguma atualização na instituição. |

### Endpoints Institution

| Método | Rota                            | Descrição                                           |
| ------ | ------------------------------- | --------------------------------------------------- |
| POST   | /institutions                   | Criação de um instituição.                          |
| GET    | /institutions                   | Lista todas as instituições.                        |
| POST   | /institutions/login             | Faz o login da instituição gerando um token.        |
| PATCH  | /institutions                   | Atualiza os dados de uma instituição.               |
| DELETE | /institutions                   | Realiza um softdelete na instituição.               |
| GET    | /institutions/donations/donated | Lista todos os objetos doados para uma instituição. |

---

### 4.1. **Criação de Instituição**

[ Voltar para os Endpoints da Instituição ](#endpoints-institution)

### `/institutions`

### Exemplo de Request:

```
POST /institutions
Host: https://lord-donations.herokuapp.com/
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
{
	"name": "nome",
	"email": "email@mail.com",
	"password": "123",
	"cnpj": "00.000.000/0001-00"

    {
	"name":"nome",
	"email":"email@mail.com",
	"password":"123",
	"cnpj":"00.000.000/0001-00",
	"address": {
		"city": "cidade",
		"state": "st",
		"number": 1,
		"cep": "00000‑000",
		"district": "bairro"
	}
}
}
```

### Exemplo de Response:

```
201 Created
```

```json
{
	"name": "nome",
	"email": "email@mail.com",
	"cnpj": "00.000.000/0001-00",
	"isActive": true,
	"id": "1e33db4f-4e97-459d-9e3d-7b2eeffc4f8e",
	"createdAt": "2022-09-12T19:11:21.483Z",
	"updatedAt": "2022-09-12T19:11:21.483Z",
	"address": {
		"city": "cidade",
		"state": "st",
		"number": 1,
		"cep": "00000‑000",
		"district": "bairro"
	}
}
```

### Possíveis Erros:

| Código do Erro  | Descrição            |
| --------------- | -------------------- |
| 400 Bad Request | Email already exists |
| 400 Bad Request | CNPJ already exists  |
| 400 Bad Request | Some data is missing |

---

### 4.2. **Listando Instituições**

[ Voltar para os Endpoints da Instituição ](#endpoints-institution)

### `/institutions`

### Exemplo de Request:

```
GET /institutions
Host: https://lord-donations.herokuapp.com/
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
[
	{
		"id": "9a5746a1-aaf0-4abb-a26e-1ede9eea12a0",
		"name": "nome",
		"email": "email@mail.com",
		"cnpj": "00.000.000/0001-00",
		"createdAt": "2022-09-12T14:06:31.179Z",
		"updatedAt": "2022-09-12T17:53:24.098Z",
		"isActive": true
	}
]
```

### Possíveis Erros:

Nenhum, o máximo que pode acontecer é retornar uma lista vazia.

---

### 4.3. **Login de Instituição**

[ Voltar para os Endpoints da Instituição ](#endpoints-institution)

### `/institutions/login`

### Exemplo de Request:

```
POST /institutions/login
Host: https://lord-donations.herokuapp.com/
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
{
	"email": "email@mail.com",
	"password": "123"
}
```

### Exemplo de Response:

```
202 Accepted
```

```json
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjlhNTc0NmExLWFhZjAtNGFiYi1hMjZlLTFlZGU5ZWVhMTJhMCIsInVzZXJUeXBlIjoidXNlciIsImlhdCI6MTY2MzAwOTk5OCwiZXhwIjoxNjYzMDk2Mzk4fQ.BTy8nrPj6Ojbb6ZQwfSb_Egw7ORHWAY8Ot9xWpX6IQc"
}
```

### Possíveis Erros:

| Código do Erro  | Descrição                    |
| --------------- | ---------------------------- |
| 400 Bad request | Email or password is missing |
| 404 Not found   | Wrong email/password         |
| 403 Forbidden   | Institution is deactivated   |

---

### 4.4. **Atualização de Instituições**

[ Voltar para os Endpoints da Instituição ](#endpoints-institution)

### `/institutions`

### Exemplo de Request:

```
PATCH /institutions
Host: https://lord-donatendpointsions.herokuapp.com/
Authorization: Token
Content-type: application/json
```

### Corpo da Requisição:

```json
{
	"name": "nameUpdated",
	"email": "emailUpdated@mail.com",
	"password": "321",
	"cnpj": "00.000.000/0001-11"
}
```

### Exemplo de Response:

```
202 Accepted
```

```json
{
	"message": "Instition updated!"
}
```

### Possíveis Erros:

| Código do Erro  | Descrição                  |
| --------------- | -------------------------- |
| 400 Bad request | Nothing to update          |
| 404 Not found   | Institution not found      |
| 400 Bad request | Institution is deactivated |
| 400 Bad request | Email already exists       |
| 400 Bad request | CNPJ already exists        |
| 409 Conflict    | Try a different email      |
| 409 Conflict    | Try a different name       |

---

### 4.5. **Deleção de Instituições**

[ Voltar para os Endpoints da Instituição ](#endpoints-institution)

### `/institutions`

### Exemplo de Request:

```
DELETE /institutions
Host: https://lord-donations.herokuapp.com/
Authorization: Token
Content-type: application/json
```

### Corpo da Requisição:

```
Vazio
```

### Exemplo de Response:

```
202 Accepted
```

```json
{
	"message": "Institution deleted with success!"
}
```

### Possíveis Erros:

| Código do Erro  | Descrição                       |
| --------------- | ------------------------------- |
| 400 Bad request | Institution already deactivated |
| 404 Not found   | Institution not found           |

---

### 4.6. **Listando os objetos doados de uma Instituição**

[ Voltar para os Endpoints da Instituição ](#endpoints-institution)

### `/institutions/donations/donated`

### Exemplo de Request:

```
GET /institutions/donations/donated
Host: https://lord-donations.herokuapp.com/
Authorization: Token
Content-type: application/json
```

### Corpo da Requisição:

```
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
[
	{
		"id": "629c19e9-5f10-4fc2-b8bf-82c91792fe01",
		"name": "nome do Objeto",
		"description": "descrição do Objeto",
		"institution": {
			"id": "2a1198d7-03ba-418b-a7b4-e817820d780c",
			"name": "nome da Instituição",
			"email": "institution@mail.com",
			"cnpj": "00.000.000/0001-00",
			"createdAt": "2022-09-12T13:59:14.489Z",
			"updatedAt": "2022-09-12T13:59:14.489Z",
			"isActive": true,
			"address": {
				"city": "cidade",
				"state": "st",
				"number": 1,
				"cep": "00000‑000",
				"district": "bairro"
			}
		},
		"status": {
			"id": "0f55fb57-b9cf-4365-990d-93d54466c171",
			"name": "received"
		}
	}
]
```

### Possíveis Erros:

Nenhum, o máximo que pode acontecer é retornar uma lista vazia.

---

## 5. **Addresses**

O objeto Address é definido como:

| Campo    | Tipo   | Descrição                       |
| -------- | ------ | ------------------------------- |
| id       | uuid   | Identificador único do address. |
| city     | string | O nome do address.              |
| state    | string | O estado do address.            |
| number   | number | O número do address.            |
| cep      | string | O CEP do adress.                |
| district | string | O bairro do address.            |

### Endpoints Address

| Método | Rota           | Descrição                     |
| ------ | -------------- | ----------------------------- |
| POST   | /addresses     | Criação de um address.        |
| GET    | /addresses     | Lista todos os addresses.     |
| PATCH  | /addresses/:id | Atualiza os dados do address. |

---

### 5.1. **Criação de Address**

[ Voltar para os Endpoints do Address ](#endpoints-address)

### `/addresses`

### Exemplo de Request:

```
POST /addresses
Host: https://lord-donations.herokuapp.com/
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
{
	"city": "test",
	"state": "ts",
	"number": 3,
	"cep": "1",
	"district": "test"
}
```

### Exemplo de Response:

```
201 Created
```

```json
{
	"id": "27cabe5e-013e-4cb6-9e8f-99105b290cc1",
	"city": "test",
	"state": "ts",
	"number": 3,
	"cep": "1",
	"district": "test"
}
```

### Possíveis Erros:

| Código do Erro  | Descrição               |
| --------------- | ----------------------- |
| 409 Conflict    | Address already exists  |
| 400 Bad request | Request in wrong format |

---

### 5.2. **Listando Addresses**

[ Voltar para os Endpoints do Address ](#endpoints-address)

### `/addresses`

### Exemplo de Request:

```
GET /addresses
Host: https://lord-donations.herokuapp.com/
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
[
	{
		"id": "27cabe5e-013e-4cb6-9e8f-99105b290cc1",
		"city": "test",
		"state": "ts",
		"number": "3",
		"cep": "1",
		"district": "test"
	}
]
```

### Possíveis Erros:

Nenhum, o máximo que pode acontecer é retornar uma lista vazia.

---

### 5.3. **Atualização de Address**

[ Voltar para os Endpoints do Address ](#endpoints-address)

### `/addresses/:id`

### Exemplo de Request:

```
PATCH /addresses/:id
Host: https://lord-donations.herokuapp.com/
Authorization: Token
Content-type: application/json
```

### Corpo da Requisição:

```json
{
	"city": "test4",
	"state": "ts4",
	"number": "4"
}
```

### Exemplo de Response:

```
200 Ok
```

```json
{
	"id": "27cabe5e-013e-4cb6-9e8f-99105b290cc1",
	"city": "test4",
	"state": "ts4",
	"number": "4"
}
```

### Possíveis Erros:

| Código do Erro   | Descrição         |
| ---------------- | ----------------- |
| 400 Bad request  | Wrong format      |
| 404 Not found    | Address not found |
| 401 Unauthorized | Invalid token     |

---

## 6. **Requests**

O objeto Request é definido como:

| Campo         | Tipo   | Descrição                                  |
| ------------- | ------ | ------------------------------------------ |
| id            | uuid   | Identificador único do Request.            |
| quantity      | number | Quantidade requisitada.                    |
| description   | string | Uma descrição para explicar a requisição.  |
| institutionId | uuid   | Id com a instituição que fez a requisição. |
| typeId        | uuid   | Id com o tipo de objetos da requisição.    |

### Endpoints Requests

| Método | Rota                 | Descrição                            |
| ------ | -------------------- | ------------------------------------ |
| GET    | /requests            | Lista todos os requests.             |
| POST   | /requests            | Criação de um request.               |
| PATCH  | /requests/:requestId | Atualiza os dados de um request.     |
| DELETE | /requests/:requestId | Realiza um softdelete em um request. |

---

### 6.1. **Listando Requests**

[ Voltar para os Endpoints do Request ](#endpoints-requests)

### `/requests `

### Exemplo de Request:

```
GET /requests
Host: https://lord-donations.herokuapp.com/
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
[
	{
		"id": "3867155a-d335-4182-aa62-7b0677ceb297",
		"quantity": 1,
		"description": "request description"
	}
]
```

### Possíveis Erros:

Nenhum, o máximo que pode acontecer é retornar uma lista vazia.

---

### 6.2. **Criação de Requisições**

[ Voltar para os Endpoints do Request ](#endpoints-requests)

### `/requests`

### Exemplo de Request:

```
POST /requests
Host: https://lord-donations.herokuapp.com/
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
{
	"typeId": "0d448969-4b92-4165-88f6-ce9f46c78702",
	"description": "request description",
	"quantity": 1
}
```

### Exemplo de Response:

```
201 Created
```

```json
{
	"id": "f11da941-4c4c-4df9-b96e-949c018f9779",
	"quantity": 1,
	"description": "request description",
	"type": {
		"id": "0d448969-4b92-4165-88f6-ce9f46c78702",
		"name": "nome do tipo",
		"description": "descrição do tipo",
		"isActive": true
	},
	"institution": {
		"id": "2a1198d7-03ba-418b-a7b4-e817820d780c",
		"name": "institution",
		"email": "institution@mail.com",
		"cnpj": "00.000.000/0001-00",
		"createdAt": "2022-09-12T13:59:14.489Z",
		"updatedAt": "2022-09-12T13:59:14.489Z",
		"isActive": true
	}
}
```

### Possíveis Erros:

| Código do Erro  | Descrição                                           |
| --------------- | --------------------------------------------------- |
| 400 Bad Request | Requests must have typeId, quantity and description |
| 400 Bad Request | Quantity must be a number and description a string  |
| 404 Not found   | Type not found                                      |
| 400 Bad Request | Type is not active                                  |
| 404 Not found   | Institution not found                               |
| 404 Not found   | Institution is not active                           |

---

### 6.3. **Atualização de Requisições**

[ Voltar para os Endpoints do Request ](#endpoints-requests)

### `/requests/:requestId`

### Exemplo de Request:

```
PATCH /requests/:requestId
Host: https://lord-donations.herokuapp.com/
Authorization: Token
Content-type: application/json
```

### Corpo da Requisição:

```json
{
	"quantity": 2,
	"description": "request description updated"
}
```

### Exemplo de Response:

```
200 Ok
```

```json
{
	"message": "request updated"
}
```

### Possíveis Erros:

| Código do Erro  | Descrição             |
| --------------- | --------------------- |
| 400 Bad request | nothing to update     |
| 404 Not found   | Institution not found |
| 404 Not found   | Request not found     |

---

### 6.4. **Deleção de Requisições**

[ Voltar para os Endpoints do Request ](#endpoints-requests)

### `/requests/:requestId`

### Exemplo de Request:

```
DELETE /requests/:requestId
Host: https://lord-donations.herokuapp.com/
Authorization: Token
Content-type: application/json
```

### Corpo da Requisição:

```
Vazio
```

### Exemplo de Response:

```
204 No content
```

### Possíveis Erros:

| Código do Erro | Descrição             |
| -------------- | --------------------- |
| 404 Not found  | Institution not found |
| 404 Not found  | Request not found     |

---

[ Voltar para o Topo ](#documentação-da-api)
