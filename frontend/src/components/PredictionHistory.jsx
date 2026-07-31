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

          <td>{item.prediction}</td>

          <td>{item.confidence.toFixed(2)}%</td>

          <td>{new Date(item.created_at).toLocaleString()}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  );
}

export default PredictionHistory;