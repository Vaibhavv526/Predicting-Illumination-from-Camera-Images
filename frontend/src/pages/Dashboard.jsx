import DashboardLayout from "../components/DashboardLayout";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import UploadCard from "../components/UploadCard";
import { useEffect, useState } from "react";
import { getPredictionHistory } from "../api/prediction";
import PredictionHistory from "../components/PredictionHistory.jsx";

function Dashboard() {
  const [predictionHistory, setPredictionHistory] = useState([]);
  const fetchHistory = async () => {
    try {
        const history = await getPredictionHistory();

        setPredictionHistory(history);
    } catch (error) {
        console.error("Failed to fetch prediction history:", error);
    }
};

useEffect(() => {
    fetchHistory();
}, []);
console.log(predictionHistory);
const totalPredictions = predictionHistory.length;

const brightCount = predictionHistory.filter(
  (item) => item.prediction === "Bright"
).length;

const normalCount = predictionHistory.filter(
  (item) => item.prediction === "Normal"
).length;

const darkCount = predictionHistory.filter(
  (item) => item.prediction === "Dark"
).length;
  return (
    <DashboardLayout sidebar={<Sidebar />}>
      <div className="dashboard-page">
        <Navbar title="Dashboard" />

        <div className="stats-grid">
          <StatCard
            title="Total Predictions"
            value={totalPredictions}
          />

          <StatCard
            title="Bright Images"
            value={brightCount}
          />

          <StatCard
            title="Normal Images"
            value={normalCount}
          />

          <StatCard
            title="Dark Images"
            value={darkCount}
          />
        </div>

        
          <PredictionHistory history={predictionHistory} />
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;