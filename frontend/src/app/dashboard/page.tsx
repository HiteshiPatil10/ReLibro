"use client";
import { useEffect, useState } from "react";
import { apiRequest } from "@/services/api";
import { useRouter } from "next/navigation";
import { isLoggedIn } from "@/utils/auth";
export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn()) {
      router.push("/login");
    }
  }, [router]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
    </div>
  );
}

/*
export default function Dashboard() {
  const [points, setPoints] = useState(0);
  const role =
    typeof window !== "undefined"
      ? localStorage.getItem("role")
      : null;
  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("token")
      : null;

  useEffect(() => {
    if (!token) return;

    apiRequest("/auth/me", "GET", undefined, token).then(data =>
      setPoints(data.points)
    );
  }, [token]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">Dashboard</h1>
      <p className="mb-4">⭐ Points: <b>{points}</b></p>

      {role === "USER" && <p>User Dashboard</p>}
      {role === "WHOLESALER" && <p>Wholesaler Dashboard</p>}
    </div>
  );
}
*/