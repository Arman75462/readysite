import "./styles/PageNotFoundPage.css";
import pageNotFoundImage from "../assets/images/pageNotFoundImage.svg";
import CTA from "../elements/CTA.jsx";

export default function PageNotFoundPage() {
  return (
    <section className="PageNotFoundPage page-appearance-animation">
      {/*===============================================
      ======================IMAGE=======================
      ================================================*/}
      <img
        src={pageNotFoundImage}
        alt="Woman holding a reload sign"
        className="PageNotFoundPage__image"
      />

      {/*===============================================
      ==================CONTENT SECTION=================
      ================================================*/}
      <section className="PageNotFoundPage__text-container">
        <h2 className="PageNotFoundPage__title">404</h2>

        <p className="PageNotFoundPage__message">
          Looks like you've reached uncharted territory. But don’t worry — we’ll
          get you back home.
        </p>

        <CTA className="PageNotFoundPage__cta">Back to homepage</CTA>
      </section>
    </section>
  );
}
