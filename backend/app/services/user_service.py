from sqlalchemy.orm import Session

from app.models.user import User
from app.schemas.user import UserCreate
from app.auth.security import hash_password


def get_user_by_email(db: Session, email: str):
    return db.query(User).filter(User.email == email).first()


def create_user(db: Session, user: UserCreate):
    hashed_pwd = hash_password(user.password)

    new_user = User(
        full_name=user.full_name,
        email=user.email,
        hashed_password=hashed_pwd,
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user

from app.auth.security import verify_password


def authenticate_user(db: Session, email: str, password: str):
    user = get_user_by_email(db, email)

    if not user:
        return None

    if not verify_password(password, user.hashed_password):
        return None

    return user