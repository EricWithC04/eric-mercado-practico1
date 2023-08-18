const express = require("express");
const app = express();
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");
const fileUpload = require("express-fileupload")
const router = require("./routes/controllers.routes.js");
const renders = require("./routes/routes.js");
require("dotenv").config();
const cloudinary = require("cloudinary")
const port = process.env.PORT;

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET 
})

app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({
  createParentPath: true,
  limits: { fileSize: 25 * 1024 * 1024 },
  abortOnLimit: true,
  responseOnLimit: "Archivo demasiado grande!"
}))

app.use(express.static(path.join(__dirname, "public")));

app.use("/", renders);
app.use("/api", router);
app.get("*", (req, res) => {
  res.send("Error 404: Not found!, ruta no encontrada");
});

app.listen(port, () => {
  console.log(`Server listen in port ${port}`);
});
