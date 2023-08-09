const express = require("express");
const app = express();
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT;

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("*", (req, res) => {
  res.send("Error 404: Not found!, ruta no encontrada");
});

app.listen(port, () => {
  console.log(`Server listen in port ${port}`);
});
