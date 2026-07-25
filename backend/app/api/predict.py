from fastapi import APIRouter, UploadFile, File, HTTPException

from app.ml.predictor import predict_image

router = APIRouter(
    prefix="/predict",
    tags=["Prediction"]
)


@router.post("/")
async def predict(file: UploadFile = File(...)):
    """
    Predict illumination from an uploaded image.
    """

    if not file.content_type.startswith("image/"):
        raise HTTPException(
            status_code=400,
            detail="Please upload a valid image."
        )

    result = predict_image(file.file)

    return result