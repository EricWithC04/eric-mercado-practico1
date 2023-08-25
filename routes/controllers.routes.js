const { Router } = require("express");
const router = Router();
const { getImages, submitFileExpressFileupload, submitFileCloudinary, deleteImageOfDB } = require("../controllers/index.js");

router.get("/", getImages);
router.post("/submitFileExpress", submitFileExpressFileupload)
router.post("/submitFileCloudinary", submitFileCloudinary)
router.delete("/deleteImageDB/:id", deleteImageOfDB)

module.exports = router;
