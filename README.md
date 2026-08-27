# ⚡ Django + React Boilerplate

A modern full-stack boilerplate scaffolded with [Desphixs Boilerplate Scaffolder](https://desphixs.io/boilerplate).  
It combines a **Django REST Framework backend** with a **React + Vite + TailwindCSS frontend**, including light/dark mode support, base routing, and ready-to-use authentication.

---

## ✨ Features

### 🌐 Frontend (React + Vite + Tailwind)

-   ⚡ Blazing fast bundling with **Vite.js**
-   🎨 **TailwindCSS** preconfigured with custom themes
-   🌞🌙 Built-in **Light/Dark mode** toggle
-   🛣️ Base routes: `Home`, `Login`, `Register`, `Dashboard`
-   🔗 Axios client pre-setup for API calls

### 🛠 Backend (Django + DRF)

-   🐍 Django 5.x with **Django REST Framework**
-   🔐 Auth endpoints: `register`, `login`, `logout`, `refresh token`
-   ⚙️ Configurable `.env` support (via `python-decouple`)
-   📦 SQLite default, Postgres-ready
-   🚀 CORS + JWT authentication included

---

## 📂 Project Structure

```

boilerplate/
├── backend/                # Django project
│   ├── manage.py
│   ├── core/               # Main Django app (settings, urls, etc.)
│   ├── users/              # User & Auth logic
│   └── requirements.txt
│
├── frontend/               # React + Vite + Tailwind app
│   ├── index.html
│   ├── src/
│   │   ├── routes/         # Base routes
│   │   ├── components/     # Shared UI components
│   │   └── App.tsx
│   └── package.json
│
└── README.md

```

---

## ⚙️ Setup Instructions

### 1️⃣ Backend (Django + DRF)

```bash
# Navigate to backend
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate   # Mac/Linux
venv\Scripts\activate      # Windows

# Install dependencies
pip install -r requirements.txt

# Setup environment
cp .env.example .env

# Run migrations
python manage.py migrate

# Start server
python manage.py runserver
```

The backend will be live at:
👉 `http://127.0.0.1:8000/api/`

---

### 2️⃣ Frontend (React + Vite + Tailwind)

```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Setup environment
cp .env.example .env

# Start dev server
npm run dev
```

The frontend will be live at:
👉 `http://127.0.0.1:5173/`

---

## 🔐 Authentication Endpoints

-   `POST /api/auth/register/` → Register new user
-   `POST /api/auth/login/` → Obtain JWT access + refresh tokens
-   `POST /api/auth/logout/` → Invalidate tokens
-   `POST /api/auth/token/refresh/` → Refresh access token

---

## 🧰 Environment Variables

### Backend `.env`

```env
DEBUG=True
SECRET_KEY=your_secret_key
DATABASE_URL=sqlite:///db.sqlite3
ALLOWED_HOSTS=*
```

### Frontend `.env`

```env
VITE_API_URL=http://127.0.0.1:8000/api/
```

---

## 🚀 Deployment

-   **Backend**: Deploy on Render, Railway, or any Django-friendly host.
-   **Frontend**: Deploy on Vercel, Netlify, or any static host.
-   Ensure `CORS` and API URLs are properly set in `.env` for production.

---

## 🙌 Credits

Generated with 💜 by [Desphixs Boilerplate Scaffolder](https://desphixs.io/boilerplate).
Start building faster, skip the boring setup.
