// this file for admin routes
const { Router } = require("express");
const seriesController = require("../controllers/seriesController");
const router = Router();

router.post("/addSerial", seriesController.addSerial);
// router.post("/removeSerial", seriesController.removeSerial);
// router.post("/editSerial", seriesController.editSerial);


module.exports = router;


