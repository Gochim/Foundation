# Starter Project

FastAPI backend + Vite/TypeScript/Tailwind frontend.

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

## Running Locally

**Backend** (port 8000):
```powershell
cd backend
.venv\Scripts\activate
uvicorn main:app --reload
```

**Frontend** (port 5173):
```powershell
cd frontend
npm run dev
```

## Key Details

- CORS is configured to allow `http://localhost:5173`
- Frontend fetches from `http://localhost:8000/api/message`
- Python venv lives at `backend/.venv`
