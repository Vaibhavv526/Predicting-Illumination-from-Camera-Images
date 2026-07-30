import "../styles/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        
        <h2>DayNightNet</h2>
      </div>

      <nav className="sidebar-nav">
        <button className="sidebar-item active">
          Dashboard
        </button>

        <button className="sidebar-item">
          Predict
        </button>

        <button className="sidebar-item">
          History
        </button>

        <button className="sidebar-item">
          Settings
        </button>
      </nav>

      <button className="sidebar-logout">
        Logout
      </button>
    </div>
  );
}

export default Sidebar;