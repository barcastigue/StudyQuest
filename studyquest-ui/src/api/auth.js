// Talks to the Spring Boot backend.
const API = import.meta.env.VITE_API_URL ?? "http://localhost:8080";

async function post(path, body) {
  let res;
  try {
    res = await fetch(`${API}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch {
    throw new Error("Can't reach the server. Is the backend running on port 8080?");
  }
  const data = await res.json().catch(() => null);
  if (!res.ok) throw new Error(data?.message || "Something went wrong. Please try again.");
  return data;
}

export const loginRequest = (email, password) =>
  post("/auth/api/login", { email, password });

export const registerRequest = (username, email, password) =>
  post("/auth/api/register", { username, email, password });
