var express = require("express");
var router = express.Router();

var codigoController = require("../controllers/codigoController");

router.post("/cadastrar", function (req, res) {
    codigoController.cadastrar(req, res);
})

router.post("/listar", function (req, res) {
    codigoController.listar(req, res);
})


router.delete("/deletar/:codigo", function (req, res) {
    let codigo = req.params.codigo
    codigoController.deletar(req, res, codigo);
})

router.put("/atualizar", function (req, res) {
    codigoController.atualizar(req, res)
})

module.exports = router;