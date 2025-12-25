const Book = require("../models/Book");

exports.bulkAddBooks = async (req, res) => {
  const books = req.body.books;

  if (!Array.isArray(books)) {
    return res.status(400).json({ message: "Books array required" });
  }

  const booksWithSeller = books.map(book => ({
    ...book,
    sellerId: req.user.id
  }));

  const savedBooks = await Book.insertMany(booksWithSeller);

  res.json({
    message: "Bulk books added",
    count: savedBooks.length
  });
};
