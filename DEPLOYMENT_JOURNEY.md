# 🚀 Deployment Journey

> A complete engineering journey of deploying **Predicting Illumination from Camera Images** from local development to a production-ready cloud application.

---

# 📌 Overview

This document describes the complete deployment process, challenges encountered, debugging steps, and the final production architecture.

Unlike a simple deployment guide, this document explains the engineering decisions made during the deployment process.

---

# 🎯 Project Goal

Deploy a complete Machine Learning web application consisting of:

- React Frontend
- FastAPI Backend
- PostgreSQL Database
- ResNet18 Deep Learning Model
- JWT Authentication
- Email OTP System

into a production environment.

---

# 🏗 Final Architecture

```

┌──────────────────────────┐
│ React Frontend │
│ (Vercel) │
└────────────┬─────────────┘
│
HTTPS
│
▼
┌──────────────────────────┐
│ FastAPI Backend │
│ Docker + Railway │
└────────────┬─────────────┘
│
├──────────────┐
│ │
▼ ▼

PostgreSQL ResNet18 Model

│ │
└──────────────┘
│
▼

Prediction API
