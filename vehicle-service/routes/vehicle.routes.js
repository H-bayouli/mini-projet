const express = require("express");
const router = express.Router();
const c = require("../controllers/vehicle.controller");

router.post("/", c.addVehicle);
router.get("/", c.getVehicles);
router.post("/position", c.addPosition);
router.get("/history/:id", c.history);

module.exports = router;