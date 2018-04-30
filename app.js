const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

import bodyParser from 'body-parser';
import morgan from 'morgan';
import express from 'express';
const app = express();
//..

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
