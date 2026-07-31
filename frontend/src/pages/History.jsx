import { useEffect, useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import PredictionHistory from "../components/PredictionHistory";
import { getPredictionHistory } from "../api/prediction";

function History() {
  const [predictionHistory, setPredictionHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const history = await getPredictionHistory();
        setPredictionHistory(history);
      } catch (error) {
        console.error("Failed to fetch history:", error);
      }
    };

    fetchHistory();
  }, []);

  return (
    <DashboardLayout sidebar={<Sidebar />}>
      <div className="dashboard-page">
        <Navbar />

        <PredictionHistory history={predictionHistory} />
      </div>
    </DashboardLayout>
  );
}

export default History;