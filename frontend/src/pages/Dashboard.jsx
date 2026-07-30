import DashboardLayout from "../components/DashboardLayout";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import UploadCard from "../components/UploadCard";

function Dashboard() {
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
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;