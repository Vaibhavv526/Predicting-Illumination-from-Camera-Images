import "../styles/PrimaryButton.css";
import Spinner from "./Spinner";

function PrimaryButton({
  text,
  loadingText = "Loading...",
  type = "submit",
  loading = false,
  disabled = false,
}) {
  return (
    <button
      type={type}
      className="primary-button"
      disabled={loading || disabled}
    >
      {loading ? (
        <>
          <Spinner />
          <span>{loadingText}</span>
        </>
      ) : (
        text
      )}
    </button>
  );
}

export default PrimaryButton;