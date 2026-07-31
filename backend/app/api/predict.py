from fastapi import APIRouter, UploadFile, File, HTTPException

from app.ml.predictor import predict_image
from sqlalchemy.orm import Session

from app.database.session import get_db
from app.auth.dependencies import get_current_user
from app.models.user import User
from app.services.prediction_service import save_prediction

from fastapi import Depends
from app.schemas.prediction import PredictionResponse

from app.services.prediction_service import (
    save_prediction,
    get_prediction_history,
)

router = APIRouter(
    prefix="/predict",
    tags=["Prediction"]
)


@router.post("/")
async def predict(
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    """
    Predict illumination from an uploaded image.
    """

    if not file.content_type.startswith("image/"):
        raise HTTPException(
            status_code=400,
            detail="Please upload a valid image."
        )

    result = predict_image(file.file)
    save_prediction(
    db=db,
    user=current_user,
    image_name=file.filename,
    prediction=result["prediction"],
    confidence=result["confidence"],
)

    return result


# Building new endpoint to show user history of there prediction in newest first
@router.get(
    "/history",
    response_model=list[PredictionResponse],
)
async def prediction_history(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    history = get_prediction_history(
        db=db,
        user=current_user,
    )

    return history