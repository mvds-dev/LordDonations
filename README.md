## projeto_final_m4

Projeto de conclusão do quarto módulo.

## 1. **Users**

O objeto User é definido como:

| Campo     | Tipo    | Descrição                                       |
| --------- | ------- | ----------------------------------------------- |
| id        | string  | Identificador único do usuário.                 |
| name      | string  | O nome do usuário.                              |
| email     | string  | O e-mail do usuário.                            |
| password  | string  | A senha de acesso do usuário.                   |
| age       | number  | A idade do usuário.                             |
| cpf       | number  | O cpf do usuário.                               |
| isActive  | boolean | Define se um usuário é Administrador ou não.    |
| createdAt | date    | Define a data de criação do usuário.            |
| updatedAt | date    | Define a data de alguma atualização no usuário. |

### Endpoints

| Método | Rota         | Descrição                               |
| ------ | ------------ | --------------------------------------- |
| POST   | /users       | Criação de um usuário.                  |
| GET    | /users       | Lista todos os usuários                 |
| POST   | /users/login | Faz o login do usuário gerando um token |
| PATCH  | /users       | Atualiza os dados do usuário            |
| DELETE | /users       | Realiza um softdelete no usuário        |

---

### 1.1. **Criação de Usuário**

[ Voltar para os Endpoints do Usuário ](#endpoints)

### `/users`

### Exemplo de Request:

```
POST /users
Host: http://localhost:3333
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

[ Voltar para os Endpoints do Usuário ](#endpoints)

### `/users`

### Exemplo de Request:

```
GET /users
Host: http://localhost:3333
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

[ Voltar para os Endpoints do Usuário ](#endpoints)

### `/users/login`

### Exemplo de Request:

```
POST /users/login
Host: http://localhost:3333
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

[ Voltar para os Endpoints do Usuário ](#endpoints)

### `/users`

### Exemplo de Request:

```
PATCH /users
Host: http://localhost:3333
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

[ Voltar para os Endpoints do Usuário ](#endpoints)

### `/users`

### Exemplo de Request:

```
DELETE /users
Host: http://localhost:3333
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
