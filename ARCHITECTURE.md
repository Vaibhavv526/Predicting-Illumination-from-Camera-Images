# 🏗 System Architecture

This document explains the architecture, request flow, backend components, frontend structure, authentication mechanism, database design, machine learning inference pipeline, and deployment architecture of the **Predicting Illumination from Camera Images** application.

---

# Overview

The application follows a modern client-server architecture.

```
                    User
                     │
                     ▼
          React Frontend (Vercel)
                     │
             HTTPS REST API
                     │
                     ▼
       FastAPI Backend (Railway + Docker)
          │           │             │
          │           │             │
          ▼           ▼             ▼
 PostgreSQL      ResNet18      Resend Email API
  Database        Model
```

---

# Technology Stack

## Frontend

- React
- Vite
- React Router
- Axios
- CSS

---

## Backend

- FastAPI
- SQLAlchemy
- Pydantic
- JWT Authentication
- bcrypt
- Resend Email API

---

## Machine Learning

- PyTorch
- Torchvision
- OpenCV
- Pillow

---

## Database

- PostgreSQL

---

## Deployment

- Docker
- Railway
- Vercel

---

# Overall Request Flow

```
User

 │

 ▼

React Frontend

 │

 ▼

Axios HTTP Request

 │

 ▼

FastAPI Router

 │

 ▼

Business Logic

 │

 ├─────────────┐

 ▼             ▼

Database     ML Model

 │             │

 └──────┬──────┘

        ▼

JSON Response

        ▼

Frontend UI
```

---

# Folder Structure

```
Predicting-Illumination-from-Camera-Images

│

├── backend
│   ├── app
│   │
│   ├── api
│   ├── auth
│   ├── core
│   ├── database
│   ├── models
│   ├── schemas
│   ├── services
│   ├── uploads
│   └── main.py
│
├── frontend
│   ├── src
│   ├── public
│   └── components
│
└── README.md
```

---

# Backend Architecture

```
main.py

│

▼

Routers

│

├───────────────┐

▼               ▼

Authentication  Prediction

│               │

▼               ▼

Services      ML Model

│               │

└──────┬────────┘

       ▼

Database
```

---

# API Layer

The API layer exposes REST endpoints.

Examples:

```
POST /auth/register

POST /auth/login

POST /predict

GET /predict/history

GET /users/me
```

Responsibilities:

- Receive HTTP requests
- Validate input
- Call business logic
- Return JSON responses

---

# Authentication Architecture

```
User Login

 │

 ▼

Validate Credentials

 │

 ▼

bcrypt Password Verification

 │

 ▼

Generate JWT

 │

 ▼

Return Access Token

 │

 ▼

Protected APIs
```

Every protected endpoint verifies the JWT before executing business logic.

---

# Authorization Flow

```
Frontend

 │

Authorization Header

 │

Bearer Token

 │

 ▼

FastAPI Dependency

 │

 ▼

Decode JWT

 │

 ▼

Load User

 │

 ▼

Execute API
```

---

# Password Security

Passwords are never stored in plain text.

```
User Password

 │

 ▼

bcrypt Hash

 │

 ▼

Database
```

During login:

```
Entered Password

 │

 ▼

bcrypt Verify

 │

 ▼

Authentication Result
```

---

# Forgot Password Flow

```
Forgot Password

 │

 ▼

Generate OTP

 │

 ▼

Store OTP

 │

 ▼

Resend Email API

 │

 ▼

User Email

 │

 ▼

Verify OTP

 │

 ▼

Reset Password
```

---

# Prediction Pipeline

```
Image Upload

 │

 ▼

Validate File

 │

 ▼

Resize Image

224 × 224

 │

 ▼

Normalize

 │

 ▼

Tensor Conversion

 │

 ▼

ResNet18

 │

 ▼

Softmax

 │

 ▼

Prediction

 │

 ▼

Confidence Score

 │

 ▼

Store Prediction

 │

 ▼

Return JSON
```

---

# Machine Learning Architecture

Model

```
ResNet18
```

Transfer Learning

```
Image

 │

 ▼

Pretrained Layers

 │

 ▼

Feature Extraction

 │

 ▼

Fully Connected Layer

 │

 ▼

3 Classes
```

Output Classes

```
Dark

Normal

Bright
```

---

# Database Architecture

```
PostgreSQL

│

├──────── Users

│

└──────── Predictions
```

Relationships

```
One User

 │

 ├──────── Prediction

 ├──────── Prediction

 ├──────── Prediction

 └──────── Prediction
```

---

# User Table

Stores:

- User ID
- Username
- Email
- Password Hash
- OTP
- OTP Expiry

---

# Prediction Table

Stores:

- Prediction ID
- User ID
- Image Path
- Prediction
- Confidence
- Timestamp

---

# Email Service

```
FastAPI

 │

 ▼

Resend API

 │

 ▼

Email Delivery

 │

 ▼

User Inbox
```

---

# Frontend Architecture

```
React

 │

 ├──────── Pages

 ├──────── Components

 ├──────── Services

 ├──────── Context

 └──────── Routing
```

---

# Frontend Request Flow

```
Button Click

 │

 ▼

Axios

 │

 ▼

Backend API

 │

 ▼

JSON

 │

 ▼

React State

 │

 ▼

UI Update
```

---

# Docker Architecture

```
Dockerfile

 │

 ▼

Python Image

 │

 ▼

Install Dependencies

 │

 ▼

Copy Backend

 │

 ▼

Run FastAPI
```

---

# Deployment Architecture

```
GitHub

 │

 ├──────── Railway

 │           │

 │           ▼

 │      FastAPI Docker

 │

 └──────── Vercel

             │

             ▼

        React Frontend
```

---

# Security Features

The application implements multiple security mechanisms:

- JWT Authentication
- bcrypt Password Hashing
- Protected API Routes
- Environment Variables
- Email OTP Verification
- Pydantic Input Validation
- SQLAlchemy ORM
- CORS Protection

---

# Environment Variables

```
APP_NAME

APP_VERSION

DATABASE_URL

SECRET_KEY

ALGORITHM

ACCESS_TOKEN_EXPIRE_MINUTES

UPLOAD_DIR

MODEL_PATH

RESEND_API_KEY
```

---

# Production Infrastructure

Frontend

```
Vercel
```

Backend

```
Railway
```

Database

```
PostgreSQL
```

Machine Learning

```
PyTorch ResNet18
```

Email

```
Resend
```

---

# Scalability Considerations

The architecture is designed to allow future enhancements such as:

- Redis Caching
- Background Workers
- Multiple ML Models
- Cloud Object Storage
- API Versioning
- Rate Limiting
- CI/CD Pipeline
- Kubernetes Deployment
- Monitoring & Logging

---

# Future Architecture

```
                     Load Balancer
                           │
        ┌──────────────────┴──────────────────┐
        ▼                                     ▼
   FastAPI Instance 1                  FastAPI Instance 2
        │                                     │
        └───────────────┬─────────────────────┘
                        ▼
                 PostgreSQL Database
                        │
                        ▼
                Shared ML Model Storage
```

---

# Summary

The project follows a modular, scalable, and production-ready architecture that separates presentation, business logic, persistence, machine learning inference, and infrastructure concerns. Containerization with Docker, cloud deployment on Railway and Vercel, JWT-based authentication, PostgreSQL persistence, and a dedicated email API provide a strong foundation for future enhancements and real-world deployment.
