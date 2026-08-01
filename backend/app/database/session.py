from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from app.core.config import settings


from sqlalchemy import create_engine
from sqlalchemy.pool import NullPool

engine = create_engine(
    settings.DATABASE_URL,
    pool_pre_ping=True,
    poolclass=NullPool,
)

SessionLocal = sessionmaker( #Every incoming request gets its own database session.
    autocommit=False,
    autoflush=False,
    bind=engine
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()