# Use uma imagem oficial do Node.js como base
FROM node:16

# Defina o diretório de trabalho no container
WORKDIR /app

# Copie os arquivos package.json e package-lock.json para o container
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie todo o código do projeto para o container
COPY . .

# Exponha a porta onde o app será executado
EXPOSE 3000

# Comando para rodar o aplicativo
CMD ["npm", "start"]
