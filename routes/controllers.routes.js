const { Router } = require("express");
const router = Router();
const { getImages, submitFileExpressFileupload, submitFileCloudinary } = require("../controllers/index.js");

router.get("/", getImages);
router.post("/submitFileExpress", submitFileExpressFileupload)
router.post("/submitFileCloudinary", submitFileCloudinary)

module.exports = router;
