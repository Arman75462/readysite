import "./styles/Navigation.css";
import { NavLink } from "react-router-dom";
import CTA from "../../elements/CTA.jsx";

export default function Navigation({ className, handleHamburgerMenuClick }) {
  return (
    <nav className="Navigation">
      <ul className={className}>
        <li>
          <NavLink
            className="Navigation__link"
            onClick={handleHamburgerMenuClick}
            to="/"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : null,
              opacity: 0.6,
            })}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="Navigation__link"
            onClick={handleHamburgerMenuClick}
            to="/about"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : null,
              opacity: 0.6,
            })}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className="Navigation__link"
            onClick={handleHamburgerMenuClick}
            to="/services"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : null,
              opacity: 0.6,
            })}
          >
            Services
          </NavLink>
        </li>
        <li>
          <CTA onClick={handleHamburgerMenuClick}>CONTACT</CTA>
        </li>
      </ul>
    </nav>
  );
}
