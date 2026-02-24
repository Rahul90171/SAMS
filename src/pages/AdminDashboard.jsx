import Layout from "../components/Layout";

function AdminDashboard() {
  return (
    <Layout>
      <h1>Dashboard</h1>
      <div className="card-container">
        <div className="card">🎓 Total Students: 120</div>
        <div className="card">🏆 Achievements: 45</div>
        <div className="card">⏳ Pending Approvals: 8</div>
      </div>
    </Layout>
  );
}

export default AdminDashboard;