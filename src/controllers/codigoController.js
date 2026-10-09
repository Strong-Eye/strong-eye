var codigoModel = require("../models/codigoModel");

function cadastrar(req, res) {
    var id_usuario = req.body.idUsuarioServer;
    var codigo = req.body.codigoServer;
    var id_empresa = req.body.idEmpresaServer;
    var cargo = req.body.cargoServer;

    if (codigo == undefined) {
        res.status(400).send("Seu codigo está undefined!");
    } else {
        codigoModel.cadastrar(id_usuario, codigo, id_empresa, cargo)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function listar(req, res) {
    var id_usuario = req.body.idUsuarioServer;
    var id_empresa = req.body.idEmpresaServer;
    var paramFiltro = req.body.filtroServer;
    var pesquisa = req.body.paramPesquisaServer

    if (id_empresa == undefined) {
        res.status(400).send("Seu id_empresa está undefined!");
    } else {
        codigoModel.listar(id_usuario, id_empresa, paramFiltro, pesquisa)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function deletar(req, res, codigo) {
    if (codigo == undefined) {
        res.status(400).send("Seu codigo está undefined!");
    } else {
        codigoModel.deletar(codigo)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
        );
    }
}

function atualizar(req, res) {
    var codigo = req.body.codigoServer;
    var cargo = req.body.cargoServer;

    if (codigo == undefined || cargo == undefined ) {
        res.status(400).send("Seu id_empresa está undefined!");
    } else {
        codigoModel.atualizarCargo(codigo, cargo)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

module.exports = {
    cadastrar,
    listar,
    deletar,
    atualizar
}