const Book = require("../models/Book");
const { addPoints } = require("../utils/pointsService");
const rules = require("../utils/pointsRules");

exports.addBook = async (req, res) => {
  const { title, author, condition, price, mode } = req.body;

  const book = await Book.create({
    title,
    author,
    condition,
    price,
    mode,
    sellerId: req.user.id
  });

  // Rough book bonus points
  if (condition === "ROUGH") {
    await addPoints(req.user.id, "ROUGH_BOOK_SELL", rules.ROUGH_BOOK_SELL);
  }

  res.json({ message: "Book listed", book });
};

exports.getBooks = async (req, res) => {
  const books = await Book.find({ isSold: false });
  res.json(books);
};
