# Development Guide

This document provides a complete overview of the development workflow, project structure, setup process, coding standards, and deployment strategy for the Predicting Illumination from Camera Images project.

---

# Table of Contents

- Project Overview
- Project Architecture
- Development Workflow
- Local Development Setup
- Backend Development
- Frontend Development
- Deep Learning Pipeline
- Database
- Authentication
- API Development
- Deployment Workflow
- Environment Variables
- Git Workflow
- Coding Standards
- Future Improvements

---

# Project Overview

Predicting Illumination from Camera Images is an end-to-end AI-powered web application that predicts illumination levels from camera images.

The project combines Deep Learning, Computer Vision, and Full Stack Development into a deployable production application.

Main objectives:

- Image illumination prediction
- Secure authentication
- Prediction history
- Cloud deployment
- Production-ready REST API

---

# Project Architecture

```
                User
                  │
                  ▼
          React Frontend (Vercel)
                  │
                  ▼
          FastAPI Backend (Railway)
                  │
      ┌───────────┴────────────┐
      ▼                        ▼
 PostgreSQL              ResNet18 Model
      │                        │
      ▼                        ▼
Prediction History      Image Prediction
```

---

# Development Workflow

The project followed the following stages:

## Phase 1

Dataset Preparation

- Dataset organization
- Train/Test split
- Image preprocessing

---

## Phase 2

Model Development

- Training
- Validation
- Hyperparameter tuning
- Model evaluation

---

## Phase 3

Backend Development

- FastAPI
- Authentication
- Prediction API
- History API

---

## Phase 4

Frontend Development

- Authentication UI
- Dashboard
- Upload interface
- Prediction history

---

## Phase 5

Deployment

- Docker
- Railway
- Vercel
- Resend Email

---

# Local Development Setup

Clone the repository

```bash
git clone <repository-url>
```

Navigate to project

```bash
cd Predicting-Illumination-from-Camera-Images
```

Create virtual environment

```bash
python -m venv myvenv
```

Activate

Linux

```bash
source myvenv/bin/activate
```

Windows

```bash
myvenv\Scripts\activate
```

Install backend dependencies

```bash
pip install -r requirements.txt
```

Install frontend dependencies

```bash
cd frontend

npm install
```

Run backend

```bash
uvicorn app.main:app --reload
```

Run frontend

```bash
npm run dev
```

---

# Backend Development

Backend Framework

- FastAPI

Major modules

```
app/

api/

core/

database/

models/

schemas/

services/

utils/
```

Responsibilities

- User Authentication
- JWT
- Password Reset
- Prediction API
- History API
- Database Communication

---

# Frontend Development

Frontend Framework

React + Vite

Main Pages

- Login
- Register
- Dashboard
- Prediction
- History
- Settings
- Forgot Password

Components

- AuthCard
- AuthLayout
- InputField
- PrimaryButton
- Navbar

Features

- Authentication
- Protected Routes
- Image Upload
- Prediction History
- Demo Account

---

# Deep Learning Pipeline

Model

- ResNet18

Additional Components

- YOLO
- XGBoost

Pipeline

```
Image

↓

Preprocessing

↓

ResNet18 Feature Extraction

↓

YOLO-assisted Classification

↓

XGBoost Decision Layer

↓

Prediction
```

Prediction Classes

- Dark
- Normal
- Bright

---

# Database

Database

PostgreSQL

Main Tables

Users

Prediction History

Stores

- User
- Filename
- Prediction
- Confidence
- Timestamp

---

# Authentication

Authentication uses JWT.

Flow

```
Register

↓

Login

↓

Access Token

↓

Protected APIs

↓

Logout
```

Features

- Login
- Register
- Password Change
- Forgot Password
- Email Verification
- Secure Password Hashing

---

# API Development

Main APIs

Authentication

```
POST /auth/register

POST /auth/login

POST /auth/forgot-password

POST /auth/reset-password
```

Prediction

```
POST /predict
```

History

```
GET /predict/history
```

User

```
GET /users/me
```

Interactive API documentation

```
/docs
```

---

# Deployment Workflow

Backend

Railway

Frontend

Vercel

Containerization

Docker

Deployment Process

```
Local Development

↓

Docker Build

↓

GitHub

↓

Railway

↓

Production Backend

↓

Vercel Frontend

↓

Live Application
```

---

# Environment Variables

Backend

```
APP_NAME

APP_VERSION

DATABASE_URL

SECRET_KEY

ALGORITHM

ACCESS_TOKEN_EXPIRE_MINUTES

MODEL_PATH

UPLOAD_DIR

EMAIL_ADDRESS

EMAIL_PASSWORD

RESEND_API_KEY
```

Frontend

```
VITE_API_URL
```

---

# Git Workflow

Development process

```
Feature Branch

↓

Development

↓

Commit

↓

Push

↓

Deploy
```

Useful commands

```bash
git status

git add .

git commit -m "message"

git pull --rebase origin main

git push
```

---

# Coding Standards

Backend

- Modular architecture
- Dependency Injection
- Environment variables
- Type hints
- Pydantic validation

Frontend

- Functional Components
- React Hooks
- Reusable Components
- Clean Folder Structure

General

- Meaningful variable names
- Small reusable functions
- Consistent formatting
- Clear documentation

---

# Future Improvements

Possible future enhancements

- Mobile application
- Batch image prediction
- Model versioning
- Admin dashboard
- User analytics
- Prediction visualization
- Confidence graphs
- Docker Compose deployment
- CI/CD pipeline using GitHub Actions
- Kubernetes deployment
- Monitoring and logging
- Model retraining pipeline

---

# Development Timeline

1. Dataset Preparation

2. Model Training

3. Backend API Development

4. Authentication System

5. Frontend Development

6. Prediction Integration

7. Dockerization

8. Railway Deployment

9. Vercel Deployment

10. Documentation

11. Demo Account Integration

12. Production Release

---

# Contributors

Developer

K Vaibhav

---

# License

This project is intended for educational, research, and portfolio purposes.
