const express = require('express');
const app = express();
const porta = 3030;

const mostraMobilia = require("./controller/mobilia_controller");
const db = require('./infra/sqlite-db');


app.use(express.json());

mostraMobilia(app,db);

app.listen(porta, () => {console.log(`app rodando na porta http://localhost:${porta}`)});

