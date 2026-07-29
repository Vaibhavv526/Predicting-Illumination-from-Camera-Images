import "../styles/PrimaryButton.css";

function PrimaryButton({ text, onClick }) {
  return (
    <button
      className="primary-button"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default PrimaryButton;