"use client";
import { useEffect, useState } from "react";
import { apiRequest } from "@/services/api";
import { useRouter } from "next/navigation";

export default function AddBook() {
  const router = useRouter();
  const token = localStorage.getItem("token");

  const [form, setForm] = useState({
    title: "",
    author: "",
    condition: "OLD",
    price: "",
    mode: "ONLINE"
  });

  const handleSubmit = async () => {
    await apiRequest("/books", "POST", {
      ...form,
      price: Number(form.price)
    }, token);

    router.push("/books");
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Add Book</h1>

      {["title", "author", "price"].map(key => (
        <input
          key={key}
          placeholder={key}
          className="border p-2 w-full mb-3"
          onChange={e => setForm({ ...form, [key]: e.target.value })}
        />
      ))}

      <select
        className="border p-2 w-full mb-3"
        onChange={e => setForm({ ...form, condition: e.target.value })}
      >
        <option value="NEW">NEW</option>
        <option value="OLD">OLD</option>
        <option value="ROUGH">ROUGH</option>
      </select>

      <select
        className="border p-2 w-full mb-3"
        onChange={e => setForm({ ...form, mode: e.target.value })}
      >
        <option value="ONLINE">ONLINE</option>
        <option value="OFFLINE">OFFLINE</option>
      </select>

      <button
        className="bg-black text-white w-full py-2"
        onClick={handleSubmit}
      >
        Add Book
      </button>
    </div>
  );
}
