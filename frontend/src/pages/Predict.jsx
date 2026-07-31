import DashboardLayout from "../components/DashboardLayout";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import UploadCard from "../components/UploadCard";

function Predict() {
  return (
    <DashboardLayout sidebar={<Sidebar />}>
      <div className="dashboard-page">
        <Navbar />

        <UploadCard />
      </div>
    </DashboardLayout>
  );
}

export default Predict;