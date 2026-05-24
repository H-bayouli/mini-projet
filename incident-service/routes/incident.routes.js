const express = require("express");
const router = express.Router();

const c = require("../controllers/incident.controller");

router.post("/", c.createIncident);
router.get("/", c.getIncidents);
router.put("/:id", c.updateStatus);

module.exports = router;