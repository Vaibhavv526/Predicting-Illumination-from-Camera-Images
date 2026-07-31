from datetime import datetime

from pydantic import BaseModel


class PredictionResponse(BaseModel):
    id: int
    image_name: str
    prediction: str
    confidence: float
    created_at: datetime

    model_config = {
        "from_attributes": True
    }