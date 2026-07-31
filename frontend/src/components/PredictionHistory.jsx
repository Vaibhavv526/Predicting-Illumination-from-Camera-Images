import "../styles/PredictionHistory.css";

function PredictionHistory({ history }) {
  return (
    <div className="history-table-container">
  <table className="history-table">
    <thead>
      <tr>
        <th>Image Name</th>
        <th>Prediction</th>
        <th>Confidence</th>
        <th>Date & Time</th>
      </tr>
    </thead>

    <tbody>
      {history.map((item) => (
        <tr key={item.id}>
          <td>{item.image_name}</td>

          <td>
            <span
                className={`prediction-badge ${item.prediction.toLowerCase()}`}
            >
                {item.prediction}
            </span>
            </td>

          <td>
        <div className="confidence-cell">
            <div className="confidence-bar">
            <div
                className="confidence-fill"
                style={{ width: `${item.confidence}%` }}
            ></div>
            </div>

            <span>{item.confidence.toFixed(2)}%</span>
        </div>
        </td>

          <td>
            <div className="history-date">
                <span className="history-day">
                {new Date(item.created_at).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                })}
                </span>

                <span className="history-time">
                {new Date(item.created_at).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                })}
                </span>
            </div>
            </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  );
}

export default PredictionHistory;