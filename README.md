# ServidorPIBIC
Servidor NodeJS que vai receber uma imagem de um aplicativo móvel, vai passar para um código C++ com OpenCV e vai retornar a resposta para o aplicativo.

É necessário ter instalado: node v8.10.0 e npm 5.1.0.

Passos necessários para executar o servidor:
  1. Na pasta root do projeto, execute o comando no terminal: npm install;
  2. Para rodar o servidor, basta rodar o comando: node server.js
 
 
O servidor vai rodar no http://localhost:8080/
O endpoint para enviar a imagem é http://localhost:8080/imagem

