# 🌟 BrightDarkEnv

An end-to-end AI-powered web application that predicts the illumination level (**Dark**, **Normal**, or **Bright**) from uploaded camera images using a deep learning model. The project includes a modern React frontend, a FastAPI backend, secure JWT authentication, PostgreSQL database, Dockerized deployment, and cloud hosting.

---

## 🚀 Live Demo

### 🌐 Live
https://predicting-illumination-from-camera.vercel.app
---

# 📸 Features

### 🔐 Authentication
- User Registration
- Secure Login
- JWT Authentication
- Protected Routes
- User Profile
- Change Password
- Forgot Password
- OTP Email Verification
- Password Reset

### 🤖 AI Prediction
- Upload Camera Images
- Predict Illumination Level
- Confidence Score
- Prediction History
- User-wise Prediction Records

### 📊 Dashboard
- User Profile
- Prediction History
- Image Preview
- Secure Authentication

---

# 🛠 Tech Stack

## Frontend
- React.js
- Vite
- React Router
- Axios
- CSS

## Backend
- FastAPI
- SQLAlchemy
- Pydantic
- JWT Authentication
- Resend Email API

## Database
- PostgreSQL

## Machine Learning
- PyTorch
- Torchvision
- OpenCV
- Pillow
- ResNet18 (Transfer Learning)

## Deployment
- Docker
- Railway (Backend)
- Vercel (Frontend)

---

# 🏗 Project Architecture

```
                   React Frontend
                        │
                        ▼
                    Vercel Hosting
                        │
                        ▼
                FastAPI Backend (Docker)
                        │
        ┌───────────────┴───────────────┐
        │                               │
        ▼                               ▼
 PostgreSQL Database              ResNet18 Model
        │                               │
        └───────────────┬───────────────┘
                        ▼
                 Prediction Results
```

---

# 📂 Project Structure

```
Predicting-Illumination-from-Camera-Images
│
├── backend
│   ├── app
│   │   ├── api
│   │   ├── auth
│   │   ├── core
│   │   ├── database
│   │   ├── models
│   │   ├── schemas
│   │   ├── services
│   │   └── main.py
│   │
│   ├── Dockerfile
│   ├── requirements.txt
│   └── .env
│
├── frontend
│   ├── src
│   ├── public
│   ├── package.json
│   └── vercel.json
│
└── README.md
```

---

# 🧠 Deep Learning Model

### Model
- ResNet18 (Transfer Learning)

### Framework
- PyTorch

### Classes
- 🌑 Dark
- ☀️ Normal
- 💡 Bright

### Image Size
```
224 × 224
```

---

# 🔐 Authentication Flow

```
Register
      │
      ▼
Hash Password (bcrypt)
      │
      ▼
Store in PostgreSQL
      │
      ▼
Login
      │
      ▼
Generate JWT
      │
      ▼
Protected Routes
```

---

# 📧 Password Recovery

```
Forgot Password
        │
        ▼
Generate OTP
        │
        ▼
Send Email (Resend API)
        │
        ▼
Verify OTP
        │
        ▼
Reset Password
```

---

# 🐳 Docker

Build Image

```bash
docker build -t illumination-backend .
```

Run Container

```bash
docker run --rm \
-p 8080:8080 \
--env-file .env \
illumination-backend
```

---

# ⚙ Environment Variables

Create a `.env` file inside the backend folder.

```env
APP_NAME=

APP_VERSION=

DATABASE_URL=

SECRET_KEY=

ALGORITHM=HS256

ACCESS_TOKEN_EXPIRE_MINUTES=30

UPLOAD_DIR=

MODEL_PATH=app/models/best_model.pth

EMAIL_ADDRESS=

EMAIL_PASSWORD=

RESEND_API_KEY=
```

---

# 🚀 Local Setup

## Clone Repository

```bash
git clone https://github.com/Vaibhavv526/Predicting-Illumination-from-Camera-Images.git
```

```bash
cd Predicting-Illumination-from-Camera-Images
```

---

## Backend

```bash
cd backend
```

Create Virtual Environment

```bash
python -m venv myvenv
```

Activate

Linux / WSL

```bash
source myvenv/bin/activate
```

Windows

```bash
myvenv\Scripts\activate
```

Install Dependencies

```bash
pip install -r requirements.txt
```

Run Backend

```bash
uvicorn app.main:app --reload
```

---

## Frontend

```bash
cd frontend
```

Install Packages

```bash
npm install
```

Run

```bash
npm run dev
```

---

# 📦 Deployment

### Backend
- Docker
- Railway

### Frontend
- Vercel

### Database
- PostgreSQL

### Email Service
- Resend

---

# 📈 Future Improvements

- Multi-model support
- Admin Dashboard
- User Analytics
- Batch Image Prediction
- Model Versioning
- Cloud Storage Integration
- CI/CD Pipeline with GitHub Actions
- Unit & Integration Tests

---

# 👨‍💻 Author

**K Vaibhav**

- GitHub: https://github.com/Vaibhavv526
- LinkedIn: https://www.linkedin.com/in/k-vaibhav-7328b1329/

---

# ⭐ Support

If you found this project useful, consider giving it a **⭐ Star** on GitHub.

It helps others discover the project and motivates future improvements.
