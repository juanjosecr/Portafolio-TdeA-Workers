from dataclasses import dataclass
import os


@dataclass
class Settings:
    app_name: str = os.getenv("APP_NAME", "Portafolio-TdeAw API")
    app_env: str = os.getenv("APP_ENV", "development")
    app_port: int = int(os.getenv("APP_PORT", "8000"))
    mongodb_uri: str = os.getenv("MONGODB_URI", "mongodb://localhost:27017")
    mongodb_db: str = os.getenv("MONGODB_DB", "portafolio_tdeaw")


settings = Settings()
