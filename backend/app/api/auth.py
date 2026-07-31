from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from fastapi.security import OAuth2PasswordRequestForm

from app.database.session import get_db
from app.auth.dependencies import get_current_user
from app.models.user import User
from app.services.user_service import authenticate_user
from app.services.user_service import authenticate_user
from app.auth.jwt_handler import create_access_token


from app.schemas.user import UserCreate, UserResponse, UserLogin, Token
from app.services.user_service import (
    get_user_by_email,
    create_user,
    authenticate_user,
)
from app.schemas.verify_otp import VerifyOTPRequest

# for app pasword 
from app.services.email_service import send_email

# for forgot password endpoint 
from app.schemas.forgot_password import ForgotPasswordRequest

from app.services.otp_service import (
    save_otp,
    verify_otp,
    reset_password
)

from app.schemas.reset_password import ResetPasswordRequest

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"],
)


@router.post(
    "/register",
    response_model=UserResponse,
    status_code=201
)
def register_user(
    user: UserCreate,
    db: Session = Depends(get_db)
):
    existing_user = get_user_by_email(db, user.email)

    if existing_user:
        raise HTTPException(
            status_code=400,
            detail="Email already registered"
        )

    return create_user(db, user)


@router.post(
    "/login",
    response_model=Token
)

def login_user(
    form_data: OAuth2PasswordRequestForm = Depends(),
    db: Session = Depends(get_db)
):
    authenticated_user = authenticate_user(
        db,
        form_data.username,
        form_data.password
    )

    if not authenticated_user:
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    access_token = create_access_token(
        data={
            "sub": authenticated_user.email
        }
    )

    return {
        "access_token": access_token,
        "token_type": "bearer"
    }

@router.post("/forgot-password")
def forgot_password(
    request: ForgotPasswordRequest,
    db: Session = Depends(get_db)
):

    existing_user = get_user_by_email(db, request.email)

    if not existing_user:
        raise HTTPException(
            status_code=404,
            detail="No account found with this email."
        )
    otp = save_otp(db, request.email)
    send_email(
    receiver_email=request.email,
    subject="Password Reset OTP",
    body=f"Your OTP is: {otp}\n\nThis OTP is valid for 10 minutes."
)

    return {
    "message": "OTP generated successfully."
}


@router.post("/verify-otp")
def verify_otp_endpoint(
    request: VerifyOTPRequest,
    db: Session = Depends(get_db)
):
    is_valid, result = verify_otp(
        db,
        request.email,
        request.otp
    )

    if not is_valid:
        raise HTTPException(
            status_code=400,
            detail=result
        )

    return {
        "message": "OTP verified successfully."
    }

@router.post("/reset-password")
def reset_password_endpoint(
    request: ResetPasswordRequest,
    db: Session = Depends(get_db)
):

    success, message = reset_password(
        db=db,
        email=request.email,
        otp=request.otp,
        new_password=request.new_password
    )

    if not success:
        raise HTTPException(
            status_code=400,
            detail=message
        )

    return {
        "message": message
    }

@router.get(
    "/me",
    response_model=UserResponse
)
def get_my_profile(
    current_user: User = Depends(get_current_user)
):
    return current_user