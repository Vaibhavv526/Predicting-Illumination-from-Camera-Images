import { useEffect, useRef, useState } from "react";
import "../styles/UploadCard.css";

function UploadCard() {
  const fileInputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const [selectedImage, setSelectedImage] = useState(null);

  const previewUrl = selectedImage
    ? URL.createObjectURL(selectedImage)
    : null;

  const handleChooseImage = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    setSelectedImage(file);

    console.log(file);
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