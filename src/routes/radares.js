var express = require("express");
var router = express.Router();

var radarController = require("../controllers/radarController");

router.get("/buscarPorUuid/:uuid", function (req, res) {
    radarController.buscarRadarPorUuid(req, res);
});

router.post("/cadastrar", function (req, res) {
    radarController.cadastrarRadar(req, res);
})

module.exports = router;