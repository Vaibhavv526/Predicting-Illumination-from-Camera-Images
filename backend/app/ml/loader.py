import torch
import torch.nn as nn
from torchvision import models

from app.core.config import settings

DEVICE = torch.device("cuda" if torch.cuda.is_available() else "cpu")


def load_model():
    """
    Load the trained ResNet18 model.
    """

    model = models.resnet18(weights=None)

    # Same classifier used during training
    model.fc = nn.Sequential(
        nn.Dropout(0.4),
        nn.Linear(model.fc.in_features, 3)
    )

    # Load trained weights
    model.load_state_dict(
        torch.load(
            settings.MODEL_PATH,
            map_location=DEVICE
        )
    )

    model.to(DEVICE)
    model.eval()

    print(f"✅ Model loaded on {DEVICE}")

    return model


# Load once when FastAPI starts
model = load_model()