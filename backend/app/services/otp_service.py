# We'll use it to generate a 6-digit OTP.

from datetime import datetime, timedelta
import random

from sqlalchemy.orm import Session

from app.models.password_reset_otp import PasswordResetOTP

def generate_otp():
    """
    Generate a random 6-digit OTP.
    """

    otp = str(random.randint(100000, 999999))

    return otp

def save_otp(db: Session, email: str):
    """
    Generate an OTP, save it in the database,
    and return the generated OTP.
    """
    db.query(PasswordResetOTP).filter(
    PasswordResetOTP.email == email,
    PasswordResetOTP.is_used.is_(False)
).delete()

    otp = generate_otp()

    expiry_time = datetime.utcnow() + timedelta(minutes=10)

    otp_record = PasswordResetOTP(
        email=email,
        otp=otp,
        expires_at=expiry_time,
        is_used=False
    )

    db.add(otp_record)
    db.commit()
    db.refresh(otp_record)

    return otp