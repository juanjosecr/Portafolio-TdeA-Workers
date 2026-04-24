from pymongo import MongoClient

from app.core.config import settings


def get_client() -> MongoClient:
    return MongoClient(settings.mongodb_uri)
