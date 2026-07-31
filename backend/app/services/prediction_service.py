from sqlalchemy.orm import Session

from app.models.prediction import Prediction
from app.models.user import User

def save_prediction(
    db: Session,
    user: User,
    image_name: str,
    prediction: str,
    confidence: float,
):
    new_prediction = Prediction(
        user_id=user.id,
        image_name=image_name,
        prediction=prediction,
        confidence=confidence,
    )

    db.add(new_prediction)
    db.commit()
    db.refresh(new_prediction)

    return new_prediction