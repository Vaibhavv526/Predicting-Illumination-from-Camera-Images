import "../styles/Sidebar.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

    const handleLogout = () => {
      localStorage.removeItem("token");
      navigate("/login", { replace: true });
    };
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        
        <h2>DayNightNet</h2>
      </div>

      <nav className="sidebar-nav">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "sidebar-item active" : "sidebar-item"
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/predict"
          className={({ isActive }) =>
            isActive ? "sidebar-item active" : "sidebar-item"
          }
        >
          Predict
        </NavLink>

        <NavLink
          to="/history"
          className={({ isActive }) =>
            isActive ? "sidebar-item active" : "sidebar-item"
          }
        >
          History
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? "sidebar-item active" : "sidebar-item"
          }
        >
          Settings
        </NavLink>
      </nav>

      <button className="sidebar-item" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Sidebar;