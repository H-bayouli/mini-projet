const express = require("express");
const cors = require("cors");
require("dotenv").config();

const trafficRoutes = require("./routes/traffic.routes");

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/traffic", trafficRoutes);

app.listen(process.env.PORT, () => {
  console.log("Traffic service running on port", process.env.PORT);
});