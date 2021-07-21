const { request, response} = require("express");
const MobiliaDAO = require("../DAO/MobiliaDAO.js");
const Mobilia = require("../model/MobiliaModel.js");

module.exports = (app, db) => {
    
    let mobiliaDb = new MobiliaDAO(db)

    app.get('/mobilia', (request, response)=>{
        mobiliaDb.getAllMobilia()
        .then((rows) => {
            response.json({
                result:rows,
                count:rows.length
            })
        })
        .catch((err)=>{
            response.json({err})
        })
    })
    app.post('/mobilia', (request, response)=>{
        const {tipomobilia,cor,manutencao} = request.body
        let newMobilia = new Mobilia(tipomobilia,cor,manutencao)
        mobiliaDb.insertMobilia(newMobilia)
        .then(()=>{
            response.json({
                message:"Mobilia inserido com sucesso",
                error:false
            })
        })
        .catch(()=>{
            response.json({
                message:"Erro ao inserir Mobilia",
                error:true
            })
        })
    })
}