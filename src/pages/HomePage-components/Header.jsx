import "./styles/Header.css";
import { useState, useEffect } from "react";
import Navigation from "./Navigation.jsx";
import HamburgerMenu from "./HamburgerMenu.jsx";
/* import Logo from "../../assets/images/Logo.webp"; */

export default function Header() {
  const largeScreenBreakpoint = 1000;

  const [menuOpen, setIsMenuOpen] = useState(false);
  const [isScreenLarge, setIsScreenLarge] = useState(
    window.innerWidth > largeScreenBreakpoint
  );

  // Each time the windows get resized, this useEffect will evaluate if it's larger than 750px or not.
  useEffect(() => {
    function handleResize() {
      setIsScreenLarge(window.innerWidth > largeScreenBreakpoint);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleHamburgerMenuClick() {
    setIsMenuOpen((prevMenuOpen) => !prevMenuOpen);
  }

  return (
    <header className="Header">
      <div className="Header__logo-container">
        {/*         <img
          src={Logo}
          alt="Business logo placeholder"
          className="Header__logo"
        /> */}

        <svg
          width="70"
          height="70"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="20" fill="#e0e0e0" />
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="#777"
            fontSize="10"
          >
            LOGO
          </text>
        </svg>

        <h1 className="Header__business-name">Business name</h1>
      </div>

      {/* Display the standard header navigation when the screen width is 750px or wider. Otherwise, show the alternate header that occupies half the page. */}
      {isScreenLarge ? (
        <Navigation
          setIsMenuOpen={setIsMenuOpen}
          className="Navigation__list-big"
          handleHamburgerMenuClick={handleHamburgerMenuClick}
        />
      ) : (
        menuOpen && (
          <Navigation
            className="Navigation__list-small"
            handleHamburgerMenuClick={handleHamburgerMenuClick}
          />
        )
      )}

      {/* Show the hamburger menu on screens smaller than 750px to display the alternative header (which takes up half the page). For larger screens, do not display the hamburger menu. */}
      {!isScreenLarge ? (
        <HamburgerMenu
          menuOpen={menuOpen}
          handleHamburgerMenuClick={handleHamburgerMenuClick}
        />
      ) : null}
    </header>
  );
}
