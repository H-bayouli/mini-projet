const db = require("../db");

// créer zone
exports.createZone = (req, res) => {
  db.query("INSERT INTO zones (name) VALUES (?)",
    [req.body.name],
    () => res.json({ message: "Zone created" })
  );
};

// calcul densité
exports.addTraffic = (req, res) => {
  const { zone_id, density } = req.body;

  let level = "LOW";
  if (density > 50) level = "MEDIUM";
  if (density > 100) level = "HIGH";

  db.query(
    "INSERT INTO traffic_data (zone_id,density,level) VALUES (?,?,?)",
    [zone_id, density, level],
    () => res.json({ level })
  );
};

// zones congestionnées
exports.congested = (req, res) => {
  db.query(
    "SELECT * FROM traffic_data WHERE level='HIGH'",
    (err, result) => res.json(result)
  );
};