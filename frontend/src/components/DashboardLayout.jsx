import "../styles/DashboardLayout.css";

function DashboardLayout({ sidebar, children }) {
  return (
    <div className="dashboard-layout">
      <aside className="dashboard-sidebar">
        {sidebar}
      </aside>

      <main className="dashboard-content">
        {children}
      </main>
    </div>
  );
}

export default DashboardLayout;