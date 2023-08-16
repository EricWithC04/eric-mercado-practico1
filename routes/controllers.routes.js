const { Router } = require("express");
const router = Router();
const { getImages, submitFile } = require("../controllers/index.js");

router.get("/", getImages);
router.post("/submitFile", submitFile)

module.exports = router;
