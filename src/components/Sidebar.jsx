import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">SAMS</h2>
      <NavLink to="/admin" className="nav-item">Dashboard</NavLink>
      <NavLink to="/students" className="nav-item">Students</NavLink>
      <NavLink to="/achievements" className="nav-item">Achievements</NavLink>
      <NavLink to="/" className="nav-item logout">Logout</NavLink>
    </div>
  );
}

export default Sidebar;