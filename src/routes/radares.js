var express = require("express");
var router = express.Router();

var radarController = require("../controllers/radarController");

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