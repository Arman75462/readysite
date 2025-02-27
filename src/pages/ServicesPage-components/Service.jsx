import CTA from "../../elements/CTA.jsx";
import "./styles/Service.css";
import { motion } from "framer-motion";

export default function Service({
  imageSrc,
  imageAlt,
  serviceTitle,
  children,
  buttonText,
  className,
  to = "/contact",
  ...rest
}) {
  return (
    <motion.section
      className={`Service ${className}`}
      initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
      whileInView={{ opacity: 1, x: 0 }} // Fade in and slide left to center
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-300px" }} // Trigger when 300px into view
      {...rest}
    >
      <img className="Service__image" src={imageSrc} alt={imageAlt} />
      <div className="Service__content">
        <h4 className="Service__title">{serviceTitle}</h4>
        <p className="Service__description">{children}</p>
        <CTA to={to} className="Service__cta">
          {buttonText}
        </CTA>
      </div>
    </motion.section>
  );
}
