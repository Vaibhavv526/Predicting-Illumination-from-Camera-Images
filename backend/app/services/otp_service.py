# We'll use it to generate a 6-digit OTP.

from datetime import datetime, timedelta
import random

from sqlalchemy.orm import Session

from app.models.password_reset_otp import PasswordResetOTP

from app.models.user import User
from app.auth.security import hash_password

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


def verify_otp(db: Session, email: str, otp: str):
    otp_record = (
        db.query(PasswordResetOTP)
        .filter(
            PasswordResetOTP.email == email,
            PasswordResetOTP.is_used.is_(False)
        )
        .first()
    )

    if not otp_record:
        return False, "No OTP found."

    if otp_record.otp != otp:
        return False, "Invalid OTP."

    if datetime.utcnow() > otp_record.expires_at.replace(tzinfo=None):
        return False, "OTP has expired."

    return True, otp_record

def reset_password(
    db: Session,
    email: str,
    otp: str,
    new_password: str
):
    is_valid, result = verify_otp(
        db,
        email,
        otp
    )

    if not is_valid:
        return False, result

    user = (
        db.query(User)
        .filter(User.email == email)
        .first()
    )

    if not user:
        return False, "User not found."

    user.hashed_password = hash_password(new_password)
    result.is_used = True

    db.commit()

    return True, "Password reset successfully."