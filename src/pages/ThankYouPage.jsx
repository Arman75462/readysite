import "./styles/ThankYouPage.css";
import CTA from "../elements/CTA.jsx";
import thankYouImage from "../assets/images/thankYouImage.svg";
import instagramLogo from "/src/assets/images/instagramLogo.webp";
import facebookLogo from "/src/assets/images/facebookLogo.png";
import tiktokLogo from "/src/assets/images/tiktokLogo.webp";
import siteContent from "../assets/siteContent.js";

export default function ThankYouPage() {
  return (
    <section className="ThankYouPage page-appearance-animation">
      {/*===============================================
      ======================IMAGE=======================
      ================================================*/}
      <img
        src={thankYouImage}
        alt="Woman holding a message bubble containing a notification"
        className="ThankYouPage__image"
      />

      {/*===============================================
      ==================CONTENT SECTION=================
      ================================================*/}
      <section className="ThankYouPage__text-container">
        <h2 className="ThankYouPage__title">We heard you. Now it begins.</h2>

        <p className="ThankYouPage__message">
          Your message was sent succesfully. Expect a follow-up soon — and in
          the meantime, feel free to browse or get inspired.
        </p>

        <div className="ThankYouPage__socials-container">
          <p>Let's connect!</p>

          <div className="ThankYouPage__socials-links">
            {siteContent.globalContent.socialsList.map((socialMedia, index) => {
              return (
                <a href={socialMedia.link} key={socialMedia.platform}>
                  <img src={socialMedia.logoSrc} alt={socialMedia.logoAlt} />
                </a>
              );
            })}
          </div>
        </div>

        <CTA
          to="/"
          className="ThankYouPage__cta"
          style={{
            borderRadius: "1em",
            padding: "0.5em 1em",
            opacity: 0.5,
            background: "var(--striking-color)",
          }}
        >
          Back to homepage
        </CTA>
      </section>
    </section>
  );
}
