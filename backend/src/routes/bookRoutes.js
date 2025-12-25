const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");
const { addBook, getBooks } = require("../controllers/bookController");

router.post("/", protect, addBook);
router.get("/", getBooks);

module.exports = router;
