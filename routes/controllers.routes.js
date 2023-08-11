const { Router } = require("express");
const router = Router();
const { getImages } = require("../controllers/index.js");

router.get("/", getImages);

module.exports = router;
