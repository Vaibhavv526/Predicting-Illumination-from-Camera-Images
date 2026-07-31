from sqlalchemy.orm import Session

from app.models.prediction import Prediction
from app.models.user import User
from sqlalchemy import desc

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

def get_prediction_history(
    db: Session,
    user: User,
):
    return (
        db.query(Prediction)
        .filter(Prediction.user_id == user.id)
        .order_by(desc(Prediction.created_at))
        .all()
    )