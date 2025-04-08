import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css"
export default function Navbar() {
  return (
    <header className={`navbar`}>
      <nav className="nav-container">
        <div className="nav-content">
          <ul className="nav-links">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin-signup"
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              >
                Admin Sign-up
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
