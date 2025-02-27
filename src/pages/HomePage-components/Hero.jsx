import "./styles/Hero.css";
import CTA from "../../elements/CTA.jsx";
import heroImage from "/src/assets/images/heroImage.webp";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="Hero">
      <motion.div
        className="Hero__content"
        initial={{ opacity: 0, y: 100 }} // Bigger drop-in
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
          type: "spring",
          stiffness: 80,
        }}
      >
        <motion.h2
          className="Hero__title"
          initial={{ opacity: 0, x: -50 }} // Slide in from left
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            type: "spring",
            stiffness: 100,
          }}
        >
          Poussez vos limites.
        </motion.h2>
        <motion.p
          className="Hero__text"
          initial={{ opacity: 0, x: 50 }} // Slide in from right
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
            type: "spring",
            stiffness: 100,
          }}
        >
          Nous vous aidons à forger un corps et un esprit plus forts grâce au
          fitness.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }} // Pop in with scale
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.5,
            type: "spring",
            stiffness: 120,
          }}
        >
          <CTA className="Hero__cta">CONTACT</CTA>
        </motion.div>
      </motion.div>
      <motion.img
        src={heroImage}
        alt="Femme athlétique en plein entraînement"
        className="Hero__image"
        initial={{ opacity: 0, scale: 0.85, y: 50 }} // Dramatic scale and drop
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
          type: "spring",
          stiffness: 90,
        }}
      />
    </div>
  );
}
