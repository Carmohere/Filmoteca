# ESTAGIO 1. Imagem base
FROM node:18

# ESTAGIO 2. Diretório de trabalho dentro do container
WORKDIR /app

# ESTAGIO 3. Copiar os arquivos do projeto para o container
COPY package*.json ./

# ESTAGIO 4. Instalar dependências
RUN npm install

# ESTAGIO 5. Copiar o restante dos arquivos para o container
COPY . .

# ESTAGIO 6. Expor a porta em que a aplicação roda
EXPOSE 3000

# ESTAGIO 7. Comando para iniciar a aplicação
CMD ["npm", "start"]
