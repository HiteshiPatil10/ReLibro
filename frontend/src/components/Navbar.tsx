"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const role =
    typeof window !== "undefined" ? localStorage.getItem("role") : null;

  const logout = () => {
    localStorage.clear();
    router.push("/login");
  };

  return (
    <nav className="flex items-center justify-between px-6 py-3 border-b">
      <h1 className="font-bold text-lg">Relibro</h1>

      <div className="flex gap-4 items-center">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/books">Books</Link>
        <Link href="/notes">Notes</Link>

        {role === "WHOLESALER" && (
          <Link href="/books/add">Add Books</Link>
        )}

        <button
          onClick={logout}
          className="bg-black text-white px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
