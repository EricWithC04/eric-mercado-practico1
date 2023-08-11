const { Router } = require("express");
const router = Router();
const { getImages, createImage } = require("../controllers/index.js");

router.get("/", getImages);
router.post("/createImage", createImage);

module.exports = router;
