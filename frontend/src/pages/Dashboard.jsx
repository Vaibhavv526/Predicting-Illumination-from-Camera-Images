import DashboardLayout from "../components/DashboardLayout";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import UploadCard from "../components/UploadCard";
import { useEffect, useState } from "react";
import { getPredictionHistory } from "../api/prediction";
import PredictionHistory from "../components/PredictionHistory";

function Dashboard() {
  const [predictionHistory, setPredictionHistory] = useState([]);
  useEffect(() => {
  const fetchHistory = async () => {
    try {
      const history = await getPredictionHistory();

      setPredictionHistory(history);
    } catch (error) {
      console.error("Failed to fetch prediction history:", error);
    }
  };

  fetchHistory();
}, []);
console.log(predictionHistory);
  return (
    <DashboardLayout sidebar={<Sidebar />}>
      <div className="dashboard-page">
        <Navbar />

        <div className="stats-grid">
          <StatCard
            title="Total Predictions"
            value="248"
          />

          <StatCard
            title="Bright Images"
            value="92"
          />

          <StatCard
            title="Normal Images"
            value="108"
          />

          <StatCard
            title="Dark Images"
            value="48"
          />
        </div>

        <UploadCard />
          <PredictionHistory history={predictionHistory} />
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;