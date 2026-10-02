var express = require("express");
var router = express.Router();

var codigoController = require("../controllers/codigoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    codigoController.cadastrar(req, res);
})

router.post("/listar", function (req, res) {
    codigoController.listar(req, res);
})

module.exports = router;