import DashboardLayout from "../components/DashboardLayout";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/Settings.css";
import { useEffect, useState } from "react";
import { getProfile } from "../api/user";
import { useNavigate } from "react-router-dom";
import ChangePasswordModal from "../components/ChangePasswordModal";

function Settings() {
  const navigate = useNavigate();

    const handleLogout = () => {
      localStorage.removeItem("access_token");

      navigate("/login", { replace: true });
    };
  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {

  const loadProfile = async () => {
    try {
      const profile = await getProfile();
      setUser(profile);
    } catch (error) {
      console.error("Failed to load profile:", error);
    } finally {
      setLoading(false);
    }
  };

  loadProfile();   // <-- Add this line

}, []);
if (loading) {
  return (
    <DashboardLayout sidebar={<Sidebar />}>
      <div className="dashboard-page">
        <Navbar title="Settings" />
        <div className="settings-container">
          <h2>Loading profile...</h2>
        </div>
      </div>
    </DashboardLayout>
  );
}
  return (
    <DashboardLayout sidebar={<Sidebar />}>
      <div className="dashboard-page">
        <Navbar title="Settings" />
        <div className="settings-container">
  <h2>Settings</h2>

  <p className="settings-description">
    Manage your account preferences and application settings.
  </p>

  <div className="settings-card">
    <div className="settings-header">
      <span className="settings-icon">👤</span>
      <h3>Account</h3>
    </div>
    <div className="settings-item">
      <span>Full Name</span>
      <strong>{user?.full_name || "Loading..."}</strong>
    </div>

    <div className="settings-item">
        <span>Email</span>
        <strong>{user?.email || "Loading..."}</strong>
      </div>

    <div className="settings-item">
      <span>Role</span>
      <strong>
      {user
        ? user.role.charAt(0).toUpperCase() + user.role.slice(1)
        : "Loading..."}
    </strong>
    </div>
  </div>

  <div className="settings-card">
    <div className="settings-header">
      <span className="settings-icon">🔒</span>
      <h3>Security</h3>
    </div>

    <div className="settings-item">
      <span>Password</span>
      <button
        className="settings-button"
        onClick={() => setIsModalOpen(true)}
      >
        Change Password
      </button>
    </div>
  </div>

  <div className="settings-card">
    <div className="settings-header">
      <span className="settings-icon">🚪</span>
      <h3>Session</h3>
    </div>

    <p className="logout-text">
      You are currently logged in on this device.
    </p>

    <button
      className="logout-button"
      onClick={handleLogout}
    >
      Logout
    </button>
  </div>
</div>
      </div>
      <ChangePasswordModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </DashboardLayout>
  );
}

export default Settings;