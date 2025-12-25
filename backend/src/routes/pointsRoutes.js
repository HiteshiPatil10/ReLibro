const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");
const {
  rateApp,
  shareApp
} = require("../controllers/pointsController");

router.post("/rate", protect, rateApp);
router.post("/share", protect, shareApp);

module.exports = router;
