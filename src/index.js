const express = require('express');
const app = express();
const cors = require('cors');

const mostraMobilia = require("./controller/mobilia_controller");
const db = require('./infra/sqlite-db');


app.use(express.json());
app.use(cors())

mostraMobilia(app,db);

app.listen(process.env.PORT||3030, () => {
    console.log(`Servidor rodando na porta:' ${process.env.PORT||3030}`)
  })

