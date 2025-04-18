import "./styles/ContactPage.css";
import { motion } from "framer-motion";

import contactImage from "/src/assets/images/contactImage.webp";
import instagramLogo from "/src/assets/images/instagramLogo.webp";
import facebookLogo from "/src/assets/images/facebookLogo.png";
import tiktokLogo from "/src/assets/images/tiktokLogo.webp";

import PageTitle from "../elements/PageTitle.jsx";

export default function ContactPage() {
  return (
    <section className="ContactPage page-appearance-animation">
      <PageTitle title="Contact page title" />

      <div className="ContactPage__content">
        <motion.img
          src={contactImage}
          alt="Placeholder contact visual"
          className="ContactPage__image"
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 0.7,
            type: "spring",
            stiffness: 110,
            damping: 15,
          }}
          viewport={{ once: true, margin: "-200px" }}
        />

        <div className="ContactPage__info">
          <motion.p
            className="ContactPage__info-text"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              type: "spring",
              stiffness: 130,
            }}
            viewport={{ once: true, margin: "-200px" }}
          >
            Here’s where you can leave your final impression — invite your
            visitors to reach out, ask a question, or take the next step.
          </motion.p>

          <motion.div
            className="ContactPage__details"
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              type: "spring",
              stiffness: 100,
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p>
              <strong>Address:</strong>
              <br /> 1234 Placeholder Ave, City, Country
            </p>
            <p>
              <strong>Phone:</strong> <br />
              (000) 000-0000
            </p>
          </motion.div>

          <motion.div
            className="ContactPage__hours-socials"
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              type: "spring",
              stiffness: 140,
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="ContactPage__hours-socials-container">
              <strong>Business Hours:</strong>
              <br /> Mon–Fri | 9:00–17:00
              <br /> Sat–Sun | 10:00–15:00
            </p>
            <div className="ContactPage__hours-socials-container">
              <strong>Socials:</strong>
              <br />
              <div className="ContactPage__socials-links">
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
          </motion.div>
        </div>
      </div>

      <motion.h3
        className="ContactPage__email gradient-text"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.4,
          type: "spring",
          stiffness: 130,
        }}
        viewport={{ once: true, margin: "-100px" }}
      >
        example@email.com
      </motion.h3>

      <motion.iframe
        className="ContactPage__map"
        title="Business Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835284453122!2d-122.42067968468136!3d37.7749292797599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064e1aa6613%3A0x8e4d563bdc0b2c64!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1700000000000"
        allowFullScreen
        loading="lazy"
        style={{ border: 0 }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          type: "spring",
          stiffness: 100,
        }}
      ></motion.iframe>
    </section>
  );
}
