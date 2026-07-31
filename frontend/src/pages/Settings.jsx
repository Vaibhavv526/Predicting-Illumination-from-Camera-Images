import DashboardLayout from "../components/DashboardLayout";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Settings() {
  return (
    <DashboardLayout sidebar={<Sidebar />}>
      <div className="dashboard-page">
        <Navbar />

        <div className="settings-container">
          <h2>Settings</h2>

          <div className="settings-card">
            <h3>Account</h3>
            <p>Profile management features will be available here.</p>
          </div>

          <div className="settings-card">
            <h3>Security</h3>
            <p>Password management features will be available here.</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Settings;