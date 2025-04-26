import "./styles/Header.css";
import { useState, useEffect } from "react";
import Navigation from "./Navigation.jsx";
import HamburgerMenu from "./HamburgerMenu.jsx";
import siteContent from "../../assets/siteContent.js";

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
        <img
          src={siteContent.homePage.headerSection.logoSrc}
          alt={siteContent.homePage.headerSection.logoAlt}
          className="Header__logo"
        />

        <h1 className="Header__business-name">
          {siteContent.homePage.headerSection.businessName}
        </h1>
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
