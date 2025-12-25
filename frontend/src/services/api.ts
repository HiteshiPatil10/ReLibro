const API_BASE = "https://relibro-backend.onrender.com/api";

export const apiRequest = async (
  url: string,
  method: string = "GET",
  body?: any,
  token?: string | null
) => {
  const res = await fetch(`${API_BASE}${url}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` })
    },
    body: body ? JSON.stringify(body) : undefined
  });

  return res.json();
};
