var express = require("express");
var router = express.Router();

var radarController = require("../controllers/radarController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js

router.post("/listar", function (req, res) {
    radarController.listar(req, res);
});

router.post("/listarParams", function (req, res) {
    radarController.listarParametro(req, res);
});

router.post("/alterar", function (req, res) {
    radarController.alterarValor(req, res);
});

router.post("/alterarStatus", function (req, res) {
    radarController.alterarValorStatus(req, res);
});

router.post("/remover", function (req, res) {
    radarController.removerUm(req, res);
});

router.post("/removerAll", function (req, res) {
    radarController.removerTudo(req, res);
});

router.get("/buscarPorUuid/:uuid", function (req, res) {
    radarController.buscarRadarPorUuid(req, res);
});

router.get("/buscarParametros/:fk_radar", function (req, res) {
    radarController.buscarParametros(req, res);
});

router.post("/cadastrar", function (req, res) {
    radarController.cadastrarRadar(req, res);
})

router.post("/cadastrarParametro", function (req, res) {
    radarController.cadastrarParametros(req, res);
})

module.exports = router;