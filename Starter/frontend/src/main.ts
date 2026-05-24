import "./style.css";

const app = document.getElementById("app")!;

app.innerHTML = `
  <div class="min-h-screen flex items-center justify-center bg-gray-950">
    <p id="message" class="text-2xl font-semibold text-white">Loading...</p>
  </div>
`;

async function loadMessage(): Promise<void> {
  const el = document.getElementById("message")!;
  try {
    const res = await fetch("http://localhost:8000/api/message");
    const data = (await res.json()) as { message: string };
    el.textContent = data.message;
  } catch {
    el.textContent = "Could not reach the backend.";
    el.classList.add("text-red-400");
  }
}

loadMessage();
