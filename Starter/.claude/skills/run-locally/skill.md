--- 
name: run-locally
description: Describes the steps needed to launch the project locally. Use when you want to start the application locally.
---

Running Locally

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

**Run browser** (port 5173):
```powershell
Start-Process "http://localhost:5173"
```