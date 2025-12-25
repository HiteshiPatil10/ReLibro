const express = require("express");
const router = express.Router();
const { login } = require("../controllers/authController");

router.post("/login", login);

module.exports = router;

const { login, me } = require("../controllers/authController");
const { protect } = require("../middlewares/authMiddleware");

router.get("/me", protect, me);
