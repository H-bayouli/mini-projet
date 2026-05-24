const express = require("express");
const router = express.Router();

const controller = require("../controllers/traffic.controller");

// zones
router.post("/zones", controller.createZone);

// traffic
router.post("/add", controller.addTraffic);
router.get("/", controller.getTraffic);

// congestion
router.get("/congested", controller.congested);

// stats (bonus)
//router.get("/stats", controller.getStats);

module.exports = router;