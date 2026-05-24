const express = require("express");
const cors = require("cors");
require("dotenv").config();

const incidentRoutes = require("./routes/incident.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/incidents", incidentRoutes);

app.listen(process.env.PORT, () => {
  console.log("Incident service running on", process.env.PORT);
});