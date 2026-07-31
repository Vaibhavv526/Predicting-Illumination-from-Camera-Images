import { useEffect, useRef, useState } from "react";
import "../styles/UploadCard.css";

import { predictImage } from "../api/prediction";

function UploadCard() {
    const fileInputRef = useRef(null);

    const [previewUrl, setPreviewUrl] = useState(null);

    const [selectedImage, setSelectedImage] = useState(null);

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

        console.log(file);
    };
    const handlePredict = async () => {
      const result = await predictImage(selectedImage);
      console.log(result);

    };

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

      <p>{selectedImage.name}</p>

      <button
        className="upload-button"
        onClick={handleChooseImage}
      >
        Change Image
      </button>
      <button
          className="predict-button"
          onClick={handlePredict}
        >
          Predict
        </button>
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
    </div>
  );
}

export default UploadCard;