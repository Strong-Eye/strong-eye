const { json } = require("express");
var radarModel = require("../models/radarModel");


function listar(req,res){

    var empresa = req.body.empresaServer;
     
   radarModel.listar(empresa)
               .then(
                   function (resultado) {
                    res.json(resultado)
                   
                }
               ).catch(
                   function (erro) {
                       console.log(erro);
                       console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                       res.status(500).json(erro.sqlMessage);
                   }
               );
    }

function listarParametro(req,res){

    var radar_id = req.body.radarServer;
     
   radarModel.listarParams(radar_id)
               .then(
                   function (resultado) {
                    res.json(resultado)
                   
                }
               ).catch(
                   function (erro) {
                       console.log(erro);
                       console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                       res.status(500).json(erro.sqlMessage);
                   }
               );
    }

    
function alterarValor(req,res){
       
        var componente_id = req.body.componenteServer;
        var valor = req.body.valorServer;
        var valorValor = req.body.valorValorServer;
        var radar = req.body.radarServer;

        radarModel.alterar(componente_id,valor,valorValor,radar)
                    .then(
                   function (resultado) {
                   res.json(resultado)
                   console.log(resultado)
                }
               ).catch(
                   function (erro) {
                       console.log(erro);
                       console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                       res.status(500).json(erro.sqlMessage);
                   }
               );
    }

    function alterarValorStatus(req,res){
       
        var uuid = req.body.uuidServer;
        var status = req.body.statusServer;
        

        radarModel.alterarStatus(uuid, status)
                    .then(
                   function (resultado) {
                   res.json(resultado)
                   console.log(resultado)
                }
               ).catch(
                   function (erro) {
                       console.log(erro);
                       console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                       res.status(500).json(erro.sqlMessage);
                   }
               );
    }

function removerUm(req,res){
    var uuid = req.body.uuidServer;

    radarModel.remover(uuid)
            .then(
                   function (resultado) {
                   res.json(resultado)
                   console.log(resultado)
                }
               ).catch(
                   function (erro) {
                       console.log(erro);
                       console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                       res.status(500).json(erro.sqlMessage);
                   }
               );
}

function removerTudo(req,res){

    id_empresa = req.body.empresaServer;

    radarModel.removerAll(id_empresa)
                .then(
                   function (resultado) {
                   res.json(resultado)
                   console.log(resultado)
                }
               ).catch(
                   function (erro) {
                       console.log(erro);
                       console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                       res.status(500).json(erro.sqlMessage);
                   }
               );

}
module.exports = {
    listar,
    alterarValor,
    removerUm,
    removerTudo,
    alterarValorStatus,
    listarParametro


}