from PIL import Image
import torch

from app.ml.loader import model, DEVICE
from app.ml.preprocess import transform
from app.ml.labels import CLASS_NAMES


def predict_image(image_file):
    """
    Predict illumination class from an uploaded image.
    """

    image = Image.open(image_file).convert("RGB")

    image_tensor = transform(image).unsqueeze(0).to(DEVICE)

    with torch.no_grad():
        outputs = model(image_tensor)

        probabilities = torch.softmax(outputs, dim=1)

        confidence, predicted_class = torch.max(probabilities, dim=1)

    return {
        "prediction": CLASS_NAMES[predicted_class.item()],
        "confidence": round(confidence.item() * 100, 2)
    }