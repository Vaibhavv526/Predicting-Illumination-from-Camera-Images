# 📖 API Documentation

This document describes all available REST API endpoints for the **Predicting Illumination from Camera Images** backend.

---

# 🌐 Base URL

Production

```
https://predicting-illumination-from-camera-images-production.up.railway.app
```

Local

```
http://127.0.0.1:8000
```

---

# 📄 Interactive API Docs

Swagger UI

```
https://predicting-illumination-from-camera-images-production.up.railway.app/docs
```

---

# Authentication

The API uses **JWT (JSON Web Token)** authentication.

After successful login, include the access token in every protected request.

```
Authorization: Bearer <your_access_token>
```

---

# API Endpoints

---

# 🔐 Authentication APIs

---

## Register User

### Endpoint

```
POST /auth/register
```

### Description

Creates a new user account.

### Request

```json
{
    "username": "vaibhav",
    "email": "vaibhav@example.com",
    "password": "StrongPassword123"
}
```

### Success Response

```
201 Created
```

```json
{
    "message": "User registered successfully"
}
```

---

## Login

### Endpoint

```
POST /auth/login
```

### Description

Authenticates a user and returns a JWT access token.

### Request

```json
{
    "email": "vaibhav@example.com",
    "password": "StrongPassword123"
}
```

### Success Response

```json
{
    "access_token": "...",
    "token_type": "bearer"
}
```

---

## Forgot Password

### Endpoint

```
POST /auth/forgot-password
```

### Description

Generates an OTP and sends it to the user's email.

### Request

```json
{
    "email": "vaibhav@example.com"
}
```

### Success Response

```json
{
    "message": "OTP sent successfully"
}
```

---

## Verify OTP

### Endpoint

```
POST /auth/verify-otp
```

### Description

Verifies the OTP received by email.

### Request

```json
{
    "email": "vaibhav@example.com",
    "otp": "123456"
}
```

### Success Response

```json
{
    "message": "OTP verified successfully"
}
```

---

## Reset Password

### Endpoint

```
POST /auth/reset-password
```

### Description

Resets the password after OTP verification.

### Request

```json
{
    "email": "vaibhav@example.com",
    "new_password": "NewStrongPassword123"
}
```

### Success Response

```json
{
    "message": "Password reset successfully"
}
```

---

# 👤 User APIs

---

## Get Current User

### Endpoint

```
GET /users/me
```

### Authentication

✅ Required

### Header

```
Authorization: Bearer <JWT Token>
```

### Success Response

```json
{
    "id": 1,
    "username": "vaibhav",
    "email": "vaibhav@example.com"
}
```

---

## Change Password

### Endpoint

```
PUT /users/change-password
```

### Authentication

✅ Required

### Request

```json
{
    "current_password": "OldPassword",
    "new_password": "NewPassword"
}
```

### Success Response

```json
{
    "message": "Password changed successfully"
}
```

---

# 🤖 Prediction APIs

---

## Predict Illumination

### Endpoint

```
POST /predict
```

### Authentication

✅ Required

### Content Type

```
multipart/form-data
```

### Request

Upload an image.

```
image: camera_image.jpg
```

### Success Response

```json
{
    "prediction": "Bright",
    "confidence": 98.74
}
```

---

## Prediction History

### Endpoint

```
GET /predict/history
```

### Authentication

✅ Required

### Success Response

```json
[
    {
        "prediction": "Dark",
        "confidence": 99.1,
        "timestamp": "2026-08-02T14:20:33"
    },
    {
        "prediction": "Bright",
        "confidence": 97.3,
        "timestamp": "2026-08-02T15:01:08"
    }
]
```

---

# HTTP Status Codes

| Code | Meaning |
|------|---------|
|200|Request Successful|
|201|Resource Created|
|400|Bad Request|
|401|Unauthorized|
|403|Forbidden|
|404|Not Found|
|422|Validation Error|
|500|Internal Server Error|

---

# Authentication Flow

```
Register
      │
      ▼
Login
      │
      ▼
Receive JWT Token
      │
      ▼
Store Token
      │
      ▼
Include in Authorization Header
      │
      ▼
Access Protected APIs
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
Send Email
        │
        ▼
Verify OTP
        │
        ▼
Reset Password
```

---

# Prediction Flow

```
Upload Image
        │
        ▼
Image Preprocessing
        │
        ▼
ResNet18 Model
        │
        ▼
Prediction
        │
        ▼
Store History
        │
        ▼
Return Response
```

---

# Response Format

Successful Response

```json
{
    "message": "Success",
    "data": {}
}
```

Error Response

```json
{
    "detail": "Error Message"
}
```

---

# Security

The application implements multiple security measures:

- JWT Authentication
- Password Hashing using bcrypt
- Protected Routes
- Email OTP Verification
- Environment Variables for Secrets
- Input Validation using Pydantic
- SQLAlchemy ORM to reduce SQL injection risks
- CORS Configuration

---

# Machine Learning Model

Model

```
ResNet18
```

Framework

```
PyTorch
```

Classes

- Dark
- Normal
- Bright

Image Size

```
224 × 224
```

---

# Deployment

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

Email Service

```
Resend
```

---

# Testing

The API can be tested using:

- Swagger UI
- Postman
- Insomnia
- cURL

Swagger Documentation

```
https://predicting-illumination-from-camera-images-production.up.railway.app/docs
```

---

# Version

Current API Version

```
v1.0.0
```

---

# Contact

For issues, feature requests, or contributions, please open an issue in the GitHub repository.
