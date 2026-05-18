const express = require("express");
const cors = require("cors");

const vehicleRoutes = require("./routes/vehicle.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/vehicles", vehicleRoutes);

app.listen(4002, () => console.log("Vehicle service running 4002"));