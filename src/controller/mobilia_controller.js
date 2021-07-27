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
    app.get('/mobilia/:id', (request, response)=>{
        const id = request.params.id
        mobiliaDb.getOneMobilia(id)
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
    app.post('/mobiliainserir', (request, response)=>{
        const {tipomobilia,cor,manutencao} = request.body
        let newMobilia = new Mobilia(tipomobilia,cor,manutencao)
        mobiliaDb.insertMobilia(newMobilia)
        .then(()=>{
            response.json({
                message:"Mobilia inserida com sucesso",
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
    app.delete('/mobilia/delete/:id', (request, response) =>{
        const id = request.params.id
        mobiliaDb.deteleMobiliaFromId(id)
        .then(() => {
            response.json({
                message: "Mobilia deletado com sucesso"
            })
        })
        .catch((err)=>{
            response.json({
                message: "Erro ao deletar Mobilia",
                Error:err
            })
        })
    })
    //aqui deleta todos os que pertencem ao tipo - cor - mobilia
    app.delete('/mobilia/deletetipo/:tipomobilia', (request, response) =>{
        const tipomobilia = request.params.tipomobilia
        mobiliaDb.deteleMobiliaFromTipo(tipomobilia)
        .then(() => {
            response.json({
                message: "Mobilia deletada pelo tipo"
            })
        })
        .catch((err)=>{
            response.json({
                message: "Erro ao deletar pelo tipo",
                Error:err
            })
        })
    })
    app.delete('/mobilia/deletecor/:cor', (request, response) =>{
        const cor = request.params.cor
        mobiliaDb.deteleMobiliaFromCor(cor)
        .then(() => {
            response.json({
                message: "Mobilia deletada pela cor"
            })
        })
        .catch((err)=>{
            response.json({
                message: "Erro ao deletar pela cor",
                Error:err
            })
        })
    })
    app.delete('/mobilia/deletemanutencao/:manutencao', (request, response) =>{
        const manutencao = request.params.manutencao
        mobiliaDb.deteleMobiliaFromManutencao(manutencao)
        .then(() => {
            response.json({
                message: "Mobilia deletada pela manutencao",
            })
        })
        .catch((err)=>{
            response.json({
                message: "Erro ao deletar pela manutencao",
                Error:err
            })
        })
    })
    app.put('/mobilia/edit/:id', (request, response) =>{
        const id = request.params.id
        const body = request.body
        const mobilia = [body.tipomobilia, body.cor, body.manutencao]
        mobiliaDb.updateMobilia(id, mobilia)
        .then(() => {
            response.json({
                message: "Update da mobilia com sucesso",
            })
        })
        .catch((err)=>{
            response.json({
                message: "Update da mobilia deu ruim",
                Error:err
            })
        })
    })
}