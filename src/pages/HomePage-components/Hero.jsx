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
          Catch Their Eye Here
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
          This is your chance to say something memorable — a quick sentence that
          captures attention and sets the tone for your site.
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
          <CTA className="Hero__cta" to="/about">
            Get to Know Us
          </CTA>
        </motion.div>
      </motion.div>

      <motion.img
        src={heroImage}
        alt="Generic hero section image"
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
