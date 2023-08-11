const { Router } = require("express");
const renders = Router();

const { renderImages } = require("../controllers/router.controllers.js");

renders.get("/", renderImages);

module.exports = renders;
