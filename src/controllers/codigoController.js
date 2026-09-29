var codigoModel = require("../models/codigoModel");

function cadastrar(req, res) {
    var codigo = req.body.codigoServer;
    var id_empresa = req.body.idEmpresaServer;
    var cargo = req.body.cargoServer;

    if (codigo == undefined) {
        res.status(400).send("Seu codigo está undefined!");
    } else {
        codigoModel.cadastrar(codigo, id_empresa, cargo)
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
}