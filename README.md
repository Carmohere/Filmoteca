# **Filmoteca API**

O objetivo deste projeto é fornecer uma interface RESTful para gerenciar um catálogo de filmes. A aplicação permite que os usuários:
- Registrem-se e autentiquem-se com segurança.
- Realizem operações CRUD (Criar, Ler, Atualizar e Excluir) em filmes.
- Protejam operações sensíveis por meio de autenticação JWT.
- Explorem e testem os endpoints usando uma documentação interativa com Swagger.

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
│   ├── database.js
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
├── .gitignore 
├── Dockerfile
├── docker-compose.yml
├── app.js
├── package.json
└── README.md
```
---
## Descrição dos Componentes

- **database/**: Contém configurações gerais, como conexão com o banco de dados e Swagger.
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
    O projeto utiliza SQLite como banco de dados. O arquivo config/database.js já está configurado para uso local. Para criar as tabelas, execute:
    ``` bash
    npm run migrate
    ```

4. **Executar Localmente**
    ``` bash
    npm start
    ```

6. **Construa a Imagem do Docker**
     ```bash
    docker build -t filmoteca-api .
      ```

7. **Execute o Container**
     ```bash
    docker run -p 3000:3000 filmoteca-api
      ```

**A API estará disponível em http://localhost:3000.**

**Documentação Swagger**
Acesse http://localhost:3000/api-docs para visualizar e testar os endpoints via Swagger.

## Tutorial de Uso
1. **Registrar um usuário**
    - Endpoint: POST /auth/register
    - Exemplo de Requisição
        ```bash
        {
        "username": "teste123",
        "password": "teste12345"
        }
        ```

2. **Fazer Login**
    - Endpoint: POST /auth/login
    - Descrição: Realiza login e retorna um token **JWT**.

    - Exemplo de Requisição
        ```bash
        {
        "username": "teste123",
        "password": "teste12345"
        }
        ```

        Resposta Esperada
        ```bash
        {
        "message": "Login bem-sucedido",
        "token": "eyJhbGciOiJIUzI1NiIsInR..."
        }
        ```
 **Atenção: Guarde o token retornado. Ele será usado para autorizar requisições protegidas.**

3. **Autorizar no Swagger**
    - Acesse a documentação Swagger em: http://localhost:3000/api-docs/
    - Clique no botão "Authorize", localizado no canto superior direito da tela.
    - No campo de entrada, insira o token JWT recebido ao fazer login.
    - Clique em "Authorize" para aplicar a autenticação em todos os endpoints protegidos.

Agora, você pode usar os endpoints da API diretamente no Swagger com autenticação habilitada.

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

