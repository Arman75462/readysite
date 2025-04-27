import "./styles/ServicesPage.css";
import { useState } from "react";
import siteContent from "../assets/siteContent.js";
import PricingOption from "./ServicesPage-components/PricingOption.jsx";
import PageTitle from "../elements/PageTitle.jsx";
import CTA from "../elements/CTA.jsx";
import { motion } from "framer-motion";

export default function ServicesPage() {
  // Initialize state and load previous value from localStorage if available
  const [isBubbleAnimation, setIsBubbleAnimation] = useState(() => {
    const storedValue = localStorage.getItem("isBubbleAnimation");
    // If a value exists, parse and return it. Otherwise, default to true.
    return storedValue !== null ? JSON.parse(storedValue) : true;
  });

  // Toggle animation state and persist the result in localStorage
  function handleBubbleAnimation() {
    setIsBubbleAnimation((prev) => {
      const next = !prev; // flip the current value
      localStorage.setItem("isBubbleAnimation", JSON.stringify(next)); // store new value
      return next; // update state
    });
  }

  return (
    <main className="ServicesPage page-appearance-animation">
      <PageTitle title={siteContent.servicesPage.pageTitle} />

      {/*===============================================
        =================SERVICES SECTION================
        ================================================*/}
      <section className="ServicesPage__services-container">
        {siteContent.servicesPage.servicesList.map((service, index) => {
          return (
            <motion.div
              key={index}
              className="ServicesPage__services-card"
              initial={{ opacity: 0, x: (index + 1) % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }} // Fade in and slide left to center
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <img
                className="ServicesPage__services-card__image"
                src={service.imageSrc}
                alt={service.imageAlt}
                style={{ order: (index + 1) % 2 === 0 ? 2 : "" }}
              />
              <div className="ServicesPage__services-card__content">
                <h4 className="ServicesPage__services-card__title">
                  {service.serviceTitle}
                </h4>
                <p className="ServicesPage__services-card__description">
                  {service.serviceDescription}
                </p>
                <CTA className="ServicesPage__services-card__cta">
                  {service.buttonLabel}
                </CTA>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/*===============================================
        =================PRICING SECTION================
        ================================================*/}
      <section className="ServicesPage__pricing">
        <h3 className="ServicesPage__pricing-title">
          {siteContent.servicesPage.pricingSection.sectionTitle}
        </h3>

        <div className="ServicesPage__pricing-options">
          <PricingOption
            title={siteContent.servicesPage.pricingSection.freeOption.title}
            price={siteContent.servicesPage.pricingSection.freeOption.price}
            className="ServicesPage__pricing-options--free"
          >
            {siteContent.servicesPage.pricingSection.freeOption.description}
          </PricingOption>

          <PricingOption
            title={siteContent.servicesPage.pricingSection.premiumOption.title}
            price={siteContent.servicesPage.pricingSection.premiumOption.price}
            className="ServicesPage__pricing-options--premium"
          >
            {siteContent.servicesPage.pricingSection.premiumOption.description}
          </PricingOption>

          <PricingOption
            title={siteContent.servicesPage.pricingSection.standardOption.title}
            price={siteContent.servicesPage.pricingSection.standardOption.price}
            className="ServicesPage__pricing-options--standard"
          >
            {siteContent.servicesPage.pricingSection.standardOption.description}
          </PricingOption>
        </div>
      </section>

      {/*===============================================
        ================CLOSING CTA SECTION=============
        ================================================*/}
      <motion.section
        className="ServicesPage__closing-cta"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          type: "spring",
          stiffness: 50,
          damping: 25,
        }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="ServicesPage__closing-cta-wrapper">
          <div className="ServicesPage__closing-cta-icon-container">
            {/* INLINE SVG BELOW */}
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ServicesPage__bubble-icon"
            >
              <defs>
                <radialGradient id="bubbleGlow" cx="50%" cy="50%" r="65%">
                  <stop offset="0%" stopColor="#64b5f6" />
                  <stop offset="100%" stopColor="#bbdefb" />
                </radialGradient>
              </defs>
              <style>
                {isBubbleAnimation
                  ? `
                  .dot {
                    animation: pulse 1.5s ease-in-out infinite;
                    transform-origin: center;
                  }

                  .dot:nth-of-type(2) {
                    animation-delay: 0.2s;
                  }

                  .dot:nth-of-type(3) {
                    animation-delay: 0.4s;
                  }

                  @keyframes pulse {
                    0%, 100% {
                      transform: scale(1);
                      opacity: 0.7;
                    }
                    50% {
                      transform: scale(1.2);
                      opacity: 1;
                    }
                  }
                `
                  : null}
              </style>

              <path
                d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V15C20 15.5523 19.5523 16 19 16H8L4 20V5Z"
                fill="url(#bubbleGlow)"
                stroke="#90caf9"
                strokeWidth="1.5"
              />
              <circle className="dot" cx="8" cy="10" r="1.5" fill="white" />
              <circle className="dot" cx="12" cy="10" r="1.5" fill="white" />
              <circle className="dot" cx="16" cy="10" r="1.5" fill="white" />
            </svg>

            <button className="ServicesPage__bubble-pause-button">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                className="ServicesPage__bubble-pause-icon"
                onClick={handleBubbleAnimation}
              >
                {/* Outer circle */}
                <circle
                  cx="24"
                  cy="24"
                  r="22"
                  fill="#f0f0f0"
                  stroke="#ccc"
                  strokeWidth="2"
                />

                {isBubbleAnimation ? (
                  // Pause bars ||
                  <>
                    <rect
                      x="16"
                      y="14"
                      width="4"
                      height="20"
                      fill="#333"
                      rx="1"
                    />
                    <rect
                      x="28"
                      y="14"
                      width="4"
                      height="20"
                      fill="#333"
                      rx="1"
                    />
                  </>
                ) : (
                  // Play triangle ▶️
                  <polygon points="18,14 18,34 32,24" fill="#333" />
                )}
              </svg>
            </button>
          </div>

          <h3 className="ServicesPage__closing-cta-title">
            {siteContent.servicesPage.closingCtaSection.title}
          </h3>
          <p className="ServicesPage__closing-cta-text">
            {siteContent.servicesPage.closingCtaSection.text}
          </p>
          <CTA
            className="ServicesPage__closing-cta-button"
            to={siteContent.servicesPage.closingCtaSection.buttonLink}
          >
            {siteContent.servicesPage.closingCtaSection.buttonLabel}
          </CTA>
        </div>
      </motion.section>
    </main>
  );
}
