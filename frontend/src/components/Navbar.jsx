import "../styles/Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-title">
        <h1>Dashboard</h1>
      </div>

      <div className="navbar-user">
        <span>Welcome, Vaibhav 👋</span>
      </div>
    </header>
  );
}

export default Navbar;