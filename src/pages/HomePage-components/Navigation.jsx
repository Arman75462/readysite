import "./styles/Navigation.css";
import { NavLink } from "react-router-dom";
import CTA from "../../elements/CTA.jsx";
import siteContent from "../../assets/siteContent.js";

export default function Navigation({ className, handleHamburgerMenuClick }) {
  return (
    <nav className="Navigation">
      <ul className={className}>
        {siteContent.homePage.navigationLinks.map((link, index) => (
          <li key={link.label}>
            <NavLink
              className="Navigation__link"
              onClick={handleHamburgerMenuClick}
              to={link.to}
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : null,
                opacity: 0.6,
              })}
            >
              {link.label}
            </NavLink>
          </li>
        ))}

        <li>
          <CTA onClick={handleHamburgerMenuClick}>CONTACT</CTA>
        </li>
      </ul>
    </nav>
  );
}
