import "./styles/Hero.css";
import CTA from "../../elements/CTA.jsx";
import siteContent from "../../assets/siteContent.js";

export default function Hero() {
  return (
    <div className="Hero">
      {/*===============================================
      ===============HERO CONTENT SECTION===============
      ================================================*/}
      <div className="Hero__content">
        <h2 className="Hero__title">
          {siteContent.homePage.heroSection.title}
        </h2>

        <p className="Hero__text">
          {siteContent.homePage.heroSection.description}
        </p>

        <CTA
          className="Hero__cta"
          to={siteContent.homePage.heroSection.ctaLink}
        >
          {siteContent.homePage.heroSection.ctaLabel}
        </CTA>
      </div>

      {/*===============================================
      ====================HERO IMAGE====================
      ================================================*/}
      <img
        loading="eager"
        src={siteContent.homePage.heroSection.imageSrc}
        alt={siteContent.homePage.heroSection.imageAlt}
        className="Hero__image"
        width="1200"
        height="600"
      />
    </div>
  );
}
