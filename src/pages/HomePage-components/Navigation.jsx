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
            })}
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            className="Navigation__link"
            onClick={handleHamburgerMenuClick}
            to="/services"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : null,
            })}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            className="Navigation__link"
            onClick={handleHamburgerMenuClick}
            to="/équipements"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : null,
            })}
          >
            Équipements
          </NavLink>
        </li>
        <li>
          <NavLink
            className="Navigation__link"
            onClick={handleHamburgerMenuClick}
            to="/coaching"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : null,
            })}
          >
            Coaching
          </NavLink>
        </li>
        <li>
          <CTA onClick={handleHamburgerMenuClick}>CONTACT</CTA>
        </li>
      </ul>
    </nav>
  );
}
