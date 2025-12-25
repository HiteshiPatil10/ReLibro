"use client";
import { useEffect, useState } from "react";
import { apiRequest } from "@/services/api";

type Book = {
  _id: string;
  title: string;
  author: string;
  condition: string;
  price: number;
  mode: string;
};

export default function BooksPage() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const data = await apiRequest("/books");
      setBooks(data as Book[]);
    };

    fetchBooks();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Books Marketplace</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {books.map(book => (
          <div key={book._id} className="border p-4 rounded">
            <h2 className="font-bold">{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Condition: {book.condition}</p>
            <p>Mode: {book.mode}</p>
            <p className="font-semibold">₹{book.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
