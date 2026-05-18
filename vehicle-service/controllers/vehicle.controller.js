const db = require("../db");

// ajouter véhicule
exports.addVehicle = (req, res) => {
  const { plate_number, type, status } = req.body;

  db.query(
    "INSERT INTO vehicles (plate_number,type,status) VALUES (?,?,?)",
    [plate_number, type, status],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Vehicle added" });
    }
  );
};

// liste véhicules
exports.getVehicles = (req, res) => {
  db.query("SELECT * FROM vehicles", (err, result) => {
    res.json(result);
  });
};

// position GPS simulée
exports.addPosition = (req, res) => {
  const { vehicle_id, lat, lng } = req.body;

  db.query(
    "INSERT INTO vehicle_positions (vehicle_id,latitude,longitude) VALUES (?,?,?)",
    [vehicle_id, lat, lng],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Position added" });
    }
  );
};

// historique
exports.history = (req, res) => {
  const { id } = req.params;

  db.query(
    "SELECT * FROM vehicle_positions WHERE vehicle_id=?",
    [id],
    (err, result) => {
      res.json(result);
    }
  );
};