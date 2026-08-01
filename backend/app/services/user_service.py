from sqlalchemy.orm import Session

from app.models.user import User
from app.schemas.user import UserCreate
from app.auth.security import (
    hash_password,
    verify_password,
)


def get_user_by_email(db: Session, email: str):
    return db.query(User).filter(User.email == email).first()


def create_user(db: Session, user: UserCreate):
    print("STEP 1")

    hashed_pwd = hash_password(user.password)
    print("STEP 2")

    new_user = User(
        full_name=user.full_name,
        email=user.email,
        hashed_password=hashed_pwd,
    )
    print("STEP 3")

    db.add(new_user)
    print("STEP 4")

    db.commit()
    print("STEP 5")

    db.refresh(new_user)
    print("STEP 6")

    return new_user


def authenticate_user(db: Session, email: str, password: str):
    user = get_user_by_email(db, email)

    if not user:
        return None

    if not verify_password(password, user.hashed_password):
        return None

    return user

def change_password(
    db,
    user,
    current_password,
    new_password
):
    if not verify_password(
        current_password,
        user.hashed_password,
    ):
        return False, "Current password is incorrect."

    user.hashed_password = hash_password(new_password)

    db.commit()
    db.refresh(user)

    return True, "Password changed successfully."