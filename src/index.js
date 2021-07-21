const express = require('express');
const app = express();
const porta = 3030;
const db = require('./infra/sqlite-db');

app.use(express.json());
app.listen(porta, () => {console.log(`app rodando na porta http://localhost:${porta}`)});