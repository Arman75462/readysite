import "./styles/Hero.css";
import CTA from "../../elements/CTA.jsx";
import heroImage from "/src/assets/images/heroImage.webp";

function Hero() {
  return (
    <div className="Hero">
      <div className="Hero__content">
        <h2 className="Hero__title">Poussez vos limites.</h2>
        <p className="Hero__text">
          Nous vous aidons à forger un corps et un esprit plus forts grâce au
          fitness.
        </p>
        <CTA className="Hero__cta">CONTACT</CTA>
      </div>
      <img
        src={heroImage}
        alt="Femme athlétique en plein entraînement"
        className="Hero__image"
      />
    </div>
  );
}

export default Hero;
