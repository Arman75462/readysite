import "./styles/Hero.css";
import CTA from "../../elements/CTA.jsx";
import heroImage from "/src/assets/images/heroImage.webp";

export default function Hero() {
  return (
    <div className="Hero">
      {/*===============================================
      ===============HERO CONTENT SECTION===============
      ================================================*/}
      <div className="Hero__content">
        <h2 className="Hero__title">Catch Their Eye Here</h2>

        <p className="Hero__text">
          This is your chance to say something memorable — a quick sentence that
          captures attention and sets the tone for your site.
        </p>

        <CTA className="Hero__cta" to="/about">
          Get to Know Us
        </CTA>
      </div>

      {/*===============================================
      ====================HERO IMAGE====================
      ================================================*/}
      <img
        loading="eager"
        src={heroImage}
        alt="Generic hero section image"
        className="Hero__image"
        width="1200"
        height="600"
      />
    </div>
  );
}
