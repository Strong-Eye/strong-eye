=======
var radarModel = require("../models/radarModel");
const { json } = require("express");

// Parte gui

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

// Parte matheus

function buscarRadarPorUuid(req, res) {
  var uuid = req.params.uuid;
  var fkEmpresaUsuario = req.query.fkEmpresaUsuario;

  if (!fkEmpresaUsuario) {
    return res.status(400).send("fkEmpresaUsuario está undefined!");
  }

  radarModel.buscarRadarPorUuid(uuid).then((resultado) => {
    if (resultado.length === 0) {
      return res.status(204).send();
    }

    if (String(resultado[0].fk_empresa) !== String(fkEmpresaUsuario)) {
      return res.status(403).send("Esse computador não pertence a essa empresa.");
    }

    res.status(200).json(resultado);
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar o radar: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

function cadastrarRadar(req, res) {
    var uuid = req.body.uuidServer;
    var modelo = req.body.modeloServer;
    var fk_empresa = req.body.fk_empresaServer;
    var cep = req.body.cepServer;
    var longradouro = req.body.longradouroServer;
    var bairro = req.body.bairroServer;
    var localidade = req.body.localidadeServer;
    var uf = req.body.ufServer;
    var estado = req.body.estadoServer;
    var km = req.body.kmServer;
    var complemento = req.body.complementoServer;

    if (!uuid || !modelo || !fk_empresa || !cep) {
        return res.status(400).send("Dados obrigatórios estão undefined!");
    }

    function inserirRadarEEndereco() {
        return radarModel.inserirRadar(fk_empresa, uuid, modelo).then((resultadoRadar) => {
            var fk_radar = resultadoRadar.insertId;

            return radarModel.inserirEnderecoRadar(fk_radar, cep, km, complemento).then(() => {
                return fk_radar;
            });
        });
    }

    radarModel.buscarLongradouroPorCep(cep).then((resultado) => {
        if (resultado.length === 0) {
            return radarModel.inserirLongradouro(cep, longradouro, bairro, localidade, uf, estado).then(() => {
                return inserirRadarEEndereco();
            });
        } else {
            return inserirRadarEEndereco();
        }
    }).then((fk_radar) => {
        res.status(200).json({ mensagem: "Radar cadastrado!", id: fk_radar, nome: modelo});
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao cadastrar o radar: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarParametros(req, res) {
  var fk_radar = req.params.fk_radar;

  if (!fk_radar) {
    return res.status(400).send("fk_radar está undefined!");
  }

  radarModel.buscarParametros(fk_radar).then((resultado) => {
    res.status(200).json(resultado);
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar o radar: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

function cadastrarParametros(req, res) {
    var fk_componente = req.body.fk_componenteServer;
    var fk_radar = req.body.fk_radarServer;
    var valor_maximo = req.body.valor_maximoServer;
    var valor_minimo = req.body.valor_minimoServer;

    if (!fk_componente || !fk_radar || !valor_maximo || !valor_minimo) {
        return res.status(400).send("Dados obrigatórios estão undefined!");
    }

    radarModel.inserirParametros(fk_componente, fk_radar, valor_maximo, valor_minimo).then((resultado) => {
        res.status(200).json({ mensagem: "Parâmetro cadastrado!"});
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao cadastrar o parâmetro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
  buscarRadarPorUuid,
  cadastrarRadar,
  buscarParametros,
  cadastrarParametros,
  listar,
  alterarValor,
  removerUm,
  removerTudo,
  alterarValorStatus,
  listarParametro
}