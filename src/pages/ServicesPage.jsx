import "./styles/ServicesPage.css";
import { useState } from "react";
import service4Image from "../assets/images/service4Image.webp";
import service3Image from "../assets/images/service3Image.webp";
import service2Image from "../assets/images/service2Image.webp";
import service1Image from "../assets/images/service1Image.webp";
import Service from "./ServicesPage-components/Service.jsx";
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
      <PageTitle title="Service page title" />

      {/*===============================================
        =================SERVICES SECTION================
        ================================================*/}
      <section className="ServicesPage__services-container">
        <Service
          imageSrc={service1Image}
          imageAlt="First service illustration"
          serviceTitle="Service One"
          buttonText="Learn more"
          className="Service-one"
          leftOrRightAppearance="100"
        >
          Describe your main service here with enough detail to make it clear,
          but still easy to scan. What is the service? What does it offer? Why
          is it valuable? This is usually your core offer, so you want your
          visitors to get a full sense of what they can expect and why it
          matters. You can also include any standout feature that makes this a
          strong first impression.
        </Service>

        <Service
          imageSrc={service2Image}
          imageAlt="Second service illustration"
          serviceTitle="Service Two"
          buttonText="Explore"
          className="Service-two"
          leftOrRightAppearance="-100"
        >
          Use this section to present another important service you offer. It
          can be something that complements the first, or stands on its own.
          Focus on what makes it useful, who it’s designed for, and how it adds
          value to the overall experience you’re delivering. This space is great
          for explaining how your service fits into the bigger picture.
        </Service>

        <Service
          imageSrc={service3Image}
          imageAlt="Third service illustration"
          serviceTitle="Service Three"
          buttonText="More info"
          className="Service-three"
          leftOrRightAppearance="100"
        >
          This block is great for a more optional or niche service — something
          not everyone will need, but the right client will appreciate. Explain
          briefly what it does, who it’s for, and what kind of outcome it’s
          meant to create. Don’t be afraid to call out the specific type of
          client this is perfect for.
        </Service>

        <Service
          imageSrc={service4Image}
          imageAlt="Fourth service illustration"
          serviceTitle="Service Four"
          buttonText="See details"
          className="Service-four"
          leftOrRightAppearance="-100"
        >
          Use this space for a bonus offering or value-add — whether that’s
          support, customization, ongoing help, or anything extra that makes
          your service more complete. Let visitors know this is where you go
          above and beyond. Think of this as the little detail that helps your
          business stand out from others.
        </Service>
      </section>

      {/*===============================================
        =================PRICING SECTION================
        ================================================*/}
      <section className="ServicesPage__pricing">
        <h3 className="ServicesPage__pricing-title">
          Pricing section title goes here.
        </h3>

        <div className="ServicesPage__pricing-options">
          <PricingOption
            title="Free Trial"
            price="Free"
            className="ServicesPage__pricing-options--trial"
          >
            Use this space to describe a limited version of your service that
            new visitors can try without committing.
          </PricingOption>

          <PricingOption
            title="Premium"
            price="$$$"
            className="ServicesPage__pricing-options--premium"
          >
            Use this for your full offer — whether that means priority support,
            extra access, or just more of everything.
          </PricingOption>

          <PricingOption
            title="Standard"
            price="$$"
            className="ServicesPage__pricing-options--standard"
          >
            Describe your most commonly selected plan here. This is likely the
            one that balances access, price, and features.
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
            You’re one message away.
          </h3>
          <p className="ServicesPage__closing-cta-text">
            If you’ve made it this far, there’s probably something here that
            clicked with you. Don’t overthink it — send a message and start the
            conversation.
          </p>
          <CTA className="ServicesPage__closing-cta-button" to="/contact">
            Let’s Talk
          </CTA>
        </div>
      </motion.section>
    </main>
  );
}
