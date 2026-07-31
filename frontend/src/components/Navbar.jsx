import "../styles/Navbar.css";

function Navbar({ title }) {
  return (
    <header className="navbar">
      <div className="navbar-title">
        <h1>{title}</h1>
      </div>

      <div className="navbar-user">
        <span>Welcome, Vaibhav 👋</span>
      </div>
    </header>
  );
}

export default Navbar;