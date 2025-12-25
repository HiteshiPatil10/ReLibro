const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");
const { allowRoles } = require("../middlewares/roleMiddleware");

router.get("/user", protect, (req, res) => {
  res.json({ message: "User access granted" });
});

router.get("/wholesaler",
  protect,
  allowRoles("WHOLESALER"),
  (req, res) => {
    res.json({ message: "Wholesaler access granted" });
  }
);

module.exports = router;
