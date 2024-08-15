# PDAFlix API

## Descrição

A **PDAFlix API** é uma aplicação backend desenvolvida para gerenciar um catálogo de filmes, séries e animes. Além disso, permite o gerenciamento de usuários. A API foi desenvolvida utilizando **Node.js**, **Express**, **Prisma ORM**, e conecta-se a um banco de dados PostgreSQL.

## Requisitos

- **Node.js** versão 16 ou superior
- **PostgreSQL** versão 16 ou superior
- **Prisma ORM**
- **NPM** ou **Yarn**

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/pdaflix.git
   cd pdaflix
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

   ou

   ```bash
   yarn install
   ```

3. **Configure as variáveis de ambiente:**

   - Crie um arquivo `.env` na raiz do projeto.
   - Copie o conteúdo do arquivo `.env.example` para o `.env`:

     ```bash
     cp .env.example .env
     ```

   - Preencha as variáveis de ambiente no arquivo `.env` com as configurações do seu banco de dados PostgreSQL.

4. **Inicialize o Prisma:**

   ```bash
   npx prisma init
   ```

5. **Execute as migrations para criar as tabelas no banco de dados:**

   ```bash
   npx prisma migrate dev --name init
   ```

6. **Inicie o servidor:**

   ```bash
   npm run dev
   ```

   ou

   ```bash
   yarn dev
   ```

   O servidor estará rodando em `http://localhost:3000`.

## **Endpoints**

### **Movies**

- **POST** `/movies` - Cria um novo filme.
- **GET** `/movies` - Retorna todos os filmes.
- **PUT** `/movies/:id` - Atualiza um filme existente.
- **DELETE** `/movies/:id` - Deleta um filme existente.

### **Series**

- **POST** `/series` - Cria uma nova série.
- **GET** `/series` - Retorna todas as séries.
- **PUT** `/series/:id` - Atualiza uma série existente.
- **DELETE** `/series/:id` - Deleta uma série existente.

### **Animes**

- **POST** `/animes` - Cria um novo anime.
- **GET** `/animes` - Retorna todos os animes.
- **PUT** `/animes/:id` - Atualiza um anime existente.
- **DELETE** `/animes/:id` - Deleta um anime existente.

### **Users**

- **POST** `/users` - Cria um novo usuário.
- **GET** `/users` - Retorna todos os usuários.
- **PUT** `/users/:id` - Atualiza um usuário existente.
- **DELETE** `/users/:id` - Deleta um usuário existente.

## **Tecnologias Utilizadas**

- **Node.js**
- **Express**
- **Prisma ORM**
- **PostgreSQL**

## **Licença**

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
