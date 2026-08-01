import "../styles/Navbar.css";
import { useEffect, useState } from "react";
import { getProfile } from "../api/user";

function Navbar({ title }) {
  const [user, setUser] = useState(null);

      useEffect(() => {
        const loadProfile = async () => {
          try {
            const profile = await getProfile();
            setUser(profile);
          } catch (error) {
            console.error(error);
          }
        };

        loadProfile();
      }, []);
  return (
    <header className="navbar">
      <div className="navbar-title">
        <h1>{title}</h1>
      </div>

      <div className="navbar-user">
        <span>
          Welcome, {user?.full_name || "User"} 👋
        </span>
      </div>
    </header>
  );
}

export default Navbar;