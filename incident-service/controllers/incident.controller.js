const db = require("../db");

exports.createIncident = (req, res) => {
  const { type, description, location } = req.body;

  db.query(
    "INSERT INTO incidents (type,description,status,location) VALUES (?,?,?,?)",
    [type, description, "Signalé", location],
    () => res.json({ message: "Incident created" })
  );
};

exports.getIncidents = (req, res) => {
  db.query("SELECT * FROM incidents", (err, r) => res.json(r));
};

exports.updateStatus = (req, res) => {
  db.query(
    "UPDATE incidents SET status=? WHERE id=?",
    [req.body.status, req.params.id],
    () => res.json({ message: "Updated" })
  );
};