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
        <motion.section
          className="CoachingPage__coach"
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-150px" }}
        >
          <img
            src={coachMartinImage}
            alt="Coach Martin Brunelle"
            className="CoachPage__coach-image CoachingPage__coach-image--martin"
          />
          <div className="CoachingPage__coach-content">
            <h3 className="CoachingPage__coach-title">Coach Martin</h3>
            <ul className="CoachingPage__coach-description">
              <li>Expert en recomposition corporelle</li>
              <li>Entraîneur professionnel certifié</li>
              <li>Croissance musculaire</li>
              <li>Perte de gras</li>
              <li>Remise en forme</li>
            </ul>
            <div className="CoachingPage__socials-links">
              <a href="https://www.facebook.com/p/Martin-Brunelle-Entraineur-priv%C3%A9--100048470801222/">
                <img src={facebookLogo} alt="Logo Facebook" />
              </a>
              <a href="https://www.instagram.com/coach_martin89/?hl=en">
                <img src={instagramLogo} alt="Logo Instagram" />
              </a>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="CoachingPage__coach CoachingPage__coach--pascal"
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-150px" }}
        >
          <img
            src={coachPascalImage}
            alt="Coach Pascal Morin"
            className="CoachPage__coach-image CoachingPage__coach-image--pascal"
          />
          <div className="CoachingPage__coach-content">
            <h3 className="CoachingPage__coach-title">Coach Pascal</h3>
            <ul className="CoachingPage__coach-description">
              <li>Entraineur privé</li>
              <li>Préparateur physique</li>
              <li>Transformation physique</li>
              <li>Optimisation des mouvements</li>
              <li>Posing</li>
            </ul>
            <div className="CoachingPage__socials-links">
              <a href="https://www.facebook.com/p/Pascal-Morin-100010708803643/">
                <img src={facebookLogo} alt="Logo Facebook" />
              </a>
              <a href="https://www.instagram.com/classicsavage_/">
                <img src={instagramLogo} alt="Logo Instagram" />
              </a>
              <a href="https://www.tiktok.com/@classicsavage_?lang=en">
                <img src={tiktokLogo} alt="Logo TikTok" />
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </section>
  );
}
