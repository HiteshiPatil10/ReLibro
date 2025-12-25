const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");
const {
  uploadNote,
  getNotes,
  buyNote
} = require("../controllers/notesController");

router.post("/", protect, uploadNote);
router.get("/", getNotes);
router.post("/:id/buy", protect, buyNote);

module.exports = router;
