import "./styles/ThankYouPage.css";
import CTA from "../elements/CTA.jsx";
import thankYouImage from "../assets/images/thankYouImage2.svg";
import instagramLogo from "/src/assets/images/instagramLogo.webp";
import facebookLogo from "/src/assets/images/facebookLogo.png";
import tiktokLogo from "/src/assets/images/tiktokLogo.webp";

export default function ThankYouPage() {
  return (
    <section className="ThankYouPage page-appearance-animation">
      <img src={thankYouImage} alt="Logo" className="ThankYouPage__image" />

      <div className="ThankYouPage__text-container">
        <h2 className="ThankYouPage__title">You're in. We're on it.</h2>
        <p className="ThankYouPage__message">
          Your message made it to the right place. Expect a follow-up soon — and
          in the meantime, feel free to browse or get inspired.
        </p>
      </div>

      <div className="ThankYouPage__socials-container">
        <p>Let's connect!</p>

        <div className="ThankYouPage__socials-links">
          <a href="#">
            <img src={facebookLogo} alt="Facebook Logo" />
          </a>
          <a href="#">
            <img src={instagramLogo} alt="Instagram Logo" />
          </a>
          <a href="#">
            <img src={tiktokLogo} alt="TikTok Logo" />
          </a>
        </div>
      </div>

      <CTA
        to="/"
        className="ThankYouPage__cta"
        style={{ borderRadius: "1em", padding: "0.5em 1em", opacity: 0.75 }}
      >
        Back to homepage
      </CTA>
    </section>
  );
}
