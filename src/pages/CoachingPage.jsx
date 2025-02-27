import { motion } from "framer-motion";
import "./styles/CoachingPage.css";
import coachMartinImage from "../assets/images/coachMartin.webp";
import coachPascalImage from "../assets/images/coachPascal.webp";
import instagramLogo from "/src/assets/images/instagramLogo.webp";
import facebookLogo from "/src/assets/images/facebookLogo.png";
import tiktokLogo from "/src/assets/images/tiktokLogo.webp";
import PageTitle from "../elements/PageTitle.jsx";

export default function CoachingPage() {
  return (
    <section className="CoachingPage page-appearance-animation">
      <PageTitle title="Prêt pour plus ? Choisis ton coach." />

      <div className="CoachingPage__coaches-container">
        <section className="CoachingPage__coach">
          <img
            src={coachMartinImage}
            alt="Coach Martin Brunelle"
            className="CoachPage__coach-image CoachingPage__coach-image--martin"
          />
          <div className="CoachingPage__coach-content">
            <motion.h3
              className="CoachingPage__coach-title"
              initial={{ opacity: 0, x: -50 }} // Slide in from left
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Coach Martin
            </motion.h3>
            <motion.ul
              className="CoachingPage__coach-description"
              initial={{ opacity: 0, x: 50 }} // Slide in from right
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.3,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <li>Expert en recomposition corporelle</li>
              <li>Entraîneur professionnel certifier</li>
              <li>Croissance musculaire</li>
              <li>Perte de gras</li>
              <li>Remise en forme</li>
            </motion.ul>
            <motion.div
              className="CoachingPage__socials-links"
              initial={{ opacity: 0, scale: 0.8 }} // Pop in with scale
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.5,
                type: "spring",
                stiffness: 120,
              }}
              viewport={{ once: true, margin: "-30px" }}
            >
              <a href="https://www.facebook.com/p/Martin-Brunelle-Entraineur-priv%C3%A9--100048470801222/">
                <img src={facebookLogo} alt="Logo Facebook" />
              </a>
              <a href="https://www.instagram.com/coach_martin89/?hl=en">
                <img src={instagramLogo} alt="Logo Instagram" />
              </a>
            </motion.div>
          </div>
        </section>

        <section className="CoachingPage__coach CoachingPage__coach--pascal">
          <img
            src={coachPascalImage}
            alt="Coach Pascal Morin"
            className="CoachPage__coach-image CoachingPage__coach-image--pascal"
          />
          <div className="CoachingPage__coach-content">
            <motion.h3
              className="CoachingPage__coach-title"
              initial={{ opacity: 0, x: -50 }} // Slide in from left
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
            >
              Coach Pascal
            </motion.h3>
            <motion.ul
              className="CoachingPage__coach-description"
              initial={{ opacity: 0, x: 50 }} // Slide in from right
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.3,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
            >
              <li>Entraineur privé</li>
              <li>Préparateur physique</li>
              <li>Transformation physique</li>
              <li>Optimisation des mouvements</li>
              <li>Posing</li>
            </motion.ul>
            <motion.div
              className="CoachingPage__socials-links"
              initial={{ opacity: 0, scale: 0.8 }} // Pop in with scale
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.5,
                type: "spring",
                stiffness: 120,
              }}
              viewport={{ once: true }}
            >
              <a href="https://www.facebook.com/p/Pascal-Morin-100010708803643/">
                <img src={facebookLogo} alt="Logo Facebook" />
              </a>
              <a href="https://www.instagram.com/classicsavage_/">
                <img src={instagramLogo} alt="Logo Instagram" />
              </a>
              <a href="https://www.tiktok.com/@classicsavage_?lang=en">
                <img src={tiktokLogo} alt="Logo TikTok" />
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </section>
  );
}
