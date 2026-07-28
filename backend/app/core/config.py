from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    APP_NAME: str
    APP_VERSION: str

    DATABASE_URL: str

    SECRET_KEY: str
    ALGORITHM: str
    ACCESS_TOKEN_EXPIRE_MINUTES: int

    UPLOAD_DIR: str
    MODEL_PATH: str

    EMAIL_ADDRESS: str
    EMAIL_PASSWORD: str

    model_config = SettingsConfigDict(env_file=".env")


settings = Settings()