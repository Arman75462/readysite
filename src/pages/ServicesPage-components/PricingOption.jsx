import "./PricingOption.css";
import { motion } from "framer-motion";

export default function PricingOption({
  title,
  price,
  className,
  children,
  servicesArray,
}) {
  return (
    <motion.article
      className={`PricingOption ${className}`}
      initial={{ opacity: 0, y: 150, rotateX: 15 }} // Start below with a slight forward tilt
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }} // Grind up and level out
      transition={{
        duration: 1, // Slow and deliberate
        ease: "easeInOut",
        type: "spring",
        stiffness: 50, // Low stiffness for a heavy feel
        damping: 25, // Controlled, no bounce
      }}
      viewport={{ once: true, amount: 0.4 }} // Later trigger, 400px into view
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
    >
      <h4 className="PricingOption__title">{title}</h4>
      <p className="PricingOption__price">{price}</p>
      <p className="PricingOption__description">{children}</p>
      <div className="PricingOption__services">
        {servicesArray.map((service, index) => (
          <p
            className="PricingOption__service"
            key={index}
            style={{ opacity: service.isOffered ? 1 : 0.4 }}
          >
            {service.name}
          </p>
        ))}
      </div>
    </motion.article>
  );
}
