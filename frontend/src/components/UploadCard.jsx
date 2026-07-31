import { useEffect, useRef, useState } from "react";
import "../styles/UploadCard.css";

import { predictImage } from "../api/prediction";

function UploadCard({ onPredictionComplete }) {
    const fileInputRef = useRef(null);

    const [previewUrl, setPreviewUrl] = useState(null);

    const [selectedImage, setSelectedImage] = useState(null);

    const [predictionResult, setPredictionResult] = useState(null);

    const [isPredicting, setIsPredicting] = useState(false);

    // ✅ useEffect goes here
    useEffect(() => {
        if (!selectedImage) return;

        const objectUrl = URL.createObjectURL(selectedImage);

        setPreviewUrl(objectUrl);

        return () => {
            URL.revokeObjectURL(objectUrl);
        };
    }, [selectedImage]);

    // ✅ Normal function
    const handleChooseImage = () => {
        fileInputRef.current.click();
    };

    // ✅ Normal function
    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (!file) return;

        setSelectedImage(file);
        setPredictionResult(null);

        console.log(file);
    };
    const handlePredict = async () => {
  if (!selectedImage) return;

  try {
    setIsPredicting(true);

    const result = await predictImage(selectedImage);

    setPredictionResult(result);

    if (onPredictionComplete) {
      onPredictionComplete();
    }
  } catch (error) {
    console.error("Prediction failed:", error);
  } finally {
    setIsPredicting(false);
  }
};

    let summary = "";

if (predictionResult) {
    switch (predictionResult.prediction) {
        case "Bright":
            summary =
                "The model predicts that the uploaded image was captured under bright lighting conditions.";
            break;

        case "Normal":
            summary =
                "The model predicts that the uploaded image was captured under balanced lighting conditions.";
            break;

        case "Dark":
            summary =
                "The model predicts that the uploaded image was captured under low-light conditions.";
            break;

        default:
            summary = "No prediction available.";
    }
}

let badgeClass = "";
let badgeIcon = "";

if (predictionResult) {
    switch (predictionResult.prediction) {
        case "Bright":
            badgeClass = "badge-bright";
            badgeIcon = "🌞";
            break;

        case "Normal":
            badgeClass = "badge-normal";
            badgeIcon = "🌤️";
            break;

        case "Dark":
            badgeClass = "badge-dark";
            badgeIcon = "🌙";
            break;
    }
}

    return (
    <div className="upload-card">
      <h2>Upload Image</h2>

      <p>
        Upload a camera image to predict the illumination
        category.
      </p>

      {
  selectedImage ? (
    <div className="upload-area">
      <img
        src={previewUrl}
        alt="Preview"
        className="image-preview"
      />

      <p className="file-name">
        {selectedImage.name}
      </p>

      <div className="action-buttons">
        <button
          className="upload-button"
          onClick={handleChooseImage}
        >
          Change Image
        </button>

        <button
          className="predict-button"
          onClick={handlePredict}
          disabled={isPredicting}
        >
          {isPredicting ? "Predicting..." : "Predict"}
        </button>
      </div>
        <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        hidden
        onChange={handleImageChange}
      />
    </div>
  ) : (
    
    <div className="upload-area">
      <p>Drag & Drop your image here</p>

      <span>or</span>

      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        hidden
        onChange={handleImageChange}
      />

      <button
        className="upload-button"
        onClick={handleChooseImage}
      >
        Choose Image
      </button>
    </div>
    
  )
}
{predictionResult && ( // prediction-card
  <div className="prediction-card">

    <h2>Illumination Analysis</h2>

    <div className={`prediction-badge ${badgeClass}`}>
        <span>{badgeIcon}</span>

        <span>
            {predictionResult.prediction} Environment
        </span>
    </div>

    <div className="confidence-header">
        <span>Confidence</span>

        <span>{predictionResult.confidence}%</span>
      </div>

      <div className="confidence-container">
        <div
          className="confidence-bar"
          style={{
            width: `${predictionResult.confidence}%`,
          }}
        ></div>
      </div>

          <h3 className="summary-title">
            Summary
          </h3>

          <p className="summary-text">
            {summary}
          </p>
  </div>
)}
    </div>
  );
}

export default UploadCard;