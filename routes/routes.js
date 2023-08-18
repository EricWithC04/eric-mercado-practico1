const { Router } = require("express");
const renders = Router();

const { renderExpressFileupload, renderCloudinary } = require("../controllers/router.controllers.js");

renders.get("/", renderExpressFileupload);
renders.get("/cloudinary", renderCloudinary);

module.exports = renders;
