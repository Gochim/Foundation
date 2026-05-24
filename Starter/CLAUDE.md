# Starter Project

FastAPI backend + Vite/TypeScript/Tailwind frontend.

Do not add new frameworks without asking

## Project Structure

```
Starter/
├── backend/          # FastAPI (Python)
│   ├── main.py
│   ├── requirements.txt
│   └── .venv/
└── frontend/         # Vite + TypeScript + Tailwind
    ├── src/
    │   ├── main.ts
    │   └── style.css
    └── package.json
```

## Key Details

- CORS is configured to allow `http://localhost:5173`
- Frontend fetches from `http://localhost:8000/api/message`
- Python venv lives at `backend/.venv`
