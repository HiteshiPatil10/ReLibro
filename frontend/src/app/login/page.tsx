"use client";
import { useState } from "react";
import { apiRequest } from "@/services/api";
import { useRouter } from "next/navigation";

export default function Login() {
  const [phone, setPhone] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const data = await apiRequest(
      "/auth/login",
      "POST",
      { phone },
      null
    );

    if (data.token) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.user.role);
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="p-6 border rounded w-80">
        <h2 className="text-xl font-bold mb-4">Login</h2>

        <input
          className="border p-2 w-full mb-4"
          placeholder="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button
          className="bg-black text-white w-full py-2"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}
