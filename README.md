# **Filmoteca API**

O objetivo deste projeto API é fornecer uma interface RESTful para gerenciar um catálogo de filmes. A aplicação permite que os usuários:
- Registrem e autentiquem-se com segurança.
- Criem, leiam, atualizem e excluam filmes.
- Protejam operações sensíveis com autenticação JWT.

Além disso, a API foi projetada com foco em boas práticas de desenvolvimento, incluindo validação de dados, documentação Swagger e conteinerização com Docker.

---

## **Tecnologias e Bibliotecas Utilizadas**
- **Node.js**: Plataforma para desenvolvimento backend.
- **Express.js**: Framework web minimalista.
- **Sequelize**: ORM para gerenciamento de banco de dados.
- **SQLite**: Banco de dados relacional leve.
- **JWT (jsonwebtoken)**: Para autenticação e autorização.
- **bcrypt**: Para criptografar senhas.
- **express-validator**: Para validação de dados de entrada.
- **Swagger**: Para documentação interativa da API.
- **Docker**: Para conteinerização e portabilidade.

---

## **Estrutura de Pastas**

```plaintext
Filmoteca/
├── config/
│   ├── config.js
│   └── swagger.js
├── controllers/
│   ├── authController.js
│   └── filmController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   ├── userModel.js
│   └── filmModel.js
├── routes/
│   ├── authRoutes.js
│   └── filmRoutes.js
├── .dockerignore
├── Dockerfile
├── package.json
└── README.md
```
---
## Descrição dos Componentes

- **config/**: Contém configurações gerais, como conexão com o banco de dados e Swagger.
- **controllers/**: Implementa a lógica de negócios, como autenticação e manipulação de filmes.
- **middleware/**: Middlewares que interceptam e processam requisições antes de atingir os controladores.
- **models/**: Define os modelos do banco de dados, incluindo validações e relações.
- **routes/**: Define os endpoints da API e conecta-os aos controladores.
---
# Instruções para Configurar e Executar o Projeto

### Pré-requisitos
- Node.js (versão 16 ou superior).
- Docker (Opção para execução conteinerizada).

## Instalação
1. **Clone o repositório**

   ```bash
   git clone https://github.com/Carmohere/Filmoteca.git
   cd Filmoteca
   ```

2. **Instale as dependências no diretório do projeto**

	```bash
	npm install
	```

3. **Configurar o Banco de Dados**
    O projeto utiliza SQLite como banco de dados. O arquivo config/config.js já está configurado para uso local. Para criar as tabelas, execute:
    ``` bash
    npx sequelize-cli db:migrate
    ```

4. **Executar Localmente**
    ``` bash
    npm start
    ```
5. **Executar com Docker**
     ```bash
    docker-compose up --build
      ```

**A API estará disponível em http://localhost:3000.**

**Documentação Swagger**
Acesse http://localhost:3000/api-docs para visualizar e testar os endpoints via Swagger.

## Endpoints Disponíveis
## 1. **Autenticação**

| Método | Endpoint            | Descrição                         | Autenticação |
|--------|---------------------|-----------------------------------|--------------|
| POST   | /auth/register       | Registrar novo usuário            | Não          |
| POST   | /auth/login          | Fazer login e obter JWT           | Não          |

## 2. **Filmes**

| Método | Endpoint            | Descrição                             | Autenticação |
|--------|---------------------|---------------------------------------|--------------|
| GET    | /films              | Listar todos os filmes                | Sim          |
| POST   | /films              | Adicionar um novo filme               | Sim          |
| PUT    | /films/:id          | Atualizar informações de um filme     | Sim          |
| DELETE | /films/:id          | Remover um filme                      | Sim          |

