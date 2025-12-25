const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");
const { allowRoles } = require("../middlewares/roleMiddleware");
const { bulkAddBooks } = require("../controllers/wholesalerController");

router.post(
  "/bulk-books",
  protect,
  allowRoles("WHOLESALER"),
  bulkAddBooks
);

module.exports = router;
