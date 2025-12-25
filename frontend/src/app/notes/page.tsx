"use client";
import { useEffect, useState } from "react";
import { apiRequest } from "@/services/api";

type Note = {
  _id: string;
  title: string;
  subject: string;
  price: number;
};

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([]);
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  useEffect(() => {
    apiRequest("/notes").then(setNotes);
  }, []);

  const buyNote = async (id: string) => {
    await apiRequest(`/notes/${id}/buy`, "POST", undefined, token);
    alert("Note purchased ✅");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Notes Marketplace</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {notes.map(note => (
          <div key={note._id} className="border p-4 rounded">
            <h2 className="font-bold">{note.title}</h2>
            <p>Subject: {note.subject}</p>
            <p className="font-semibold">₹{note.price}</p>

            <button
              className="bg-black text-white px-4 py-1 mt-3"
              onClick={() => buyNote(note._id)}
            >
              Buy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
