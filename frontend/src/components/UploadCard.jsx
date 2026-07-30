import "../styles/UploadCard.css";

function UploadCard() {
  return (
    <div className="upload-card">
      <h2>Upload Image</h2>

      <p>
        Upload a camera image to predict the illumination
        category.
      </p>

      <div className="upload-area">
        <p>Drag & Drop your image here</p>

        <span>or</span>

        <button className="upload-button">
          Choose Image
        </button>
      </div>
    </div>
  );
}

export default UploadCard;