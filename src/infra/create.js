const sqlite3 = require('sqlite3')
const db = new sqlite3.Database('./src/infra/database.db')

const MOBILIA_SCHEMA = `
CREATE TABLE IF NOT EXISTS "MOBILIA" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "TIPOMOBILIA" varchar(64),
    "COR" varchar(64),
    "MANUTENCAO" varchar(3)
  );`;

function criarTblMobilia(){

    db.run(MOBILIA_SCHEMA, (error) => {
        if(error) console.log("Erro ao criar tabela de Mobilia")
    })
}

db.serialize( ()=>{
    criarTblMobilia()

})