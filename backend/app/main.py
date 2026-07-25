from app.api.auth import router as auth_router

from app.database.init_db import init_db
from contextlib import asynccontextmanager

from fastapi import FastAPI
from app.core.config import settings

@asynccontextmanager
async def lifespan(app: FastAPI):
    print("Initializing Database...")
    init_db()
    yield
    print("Application Shutdown")


app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
    lifespan=lifespan
)

app.include_router(auth_router)

from app.api.users import router as users_router

app.include_router(users_router)


@app.get("/")
def root():
    return {
        "message": f"Welcome to {settings.APP_NAME} 🚀",
        "version": settings.APP_VERSION
    }


from app.api.predict import router as predict_router
app.include_router(predict_router)