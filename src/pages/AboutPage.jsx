import "./styles/AboutPage.css";
import PageTitle from "../elements/PageTitle.jsx";
import whoAreWeImage from "../assets/images/whoAreWeImage.webp";
import ourStoryImage from "../assets/images/ourStoryImage.webp";
import ourMissionImage from "../assets/images/ourMissionImage.webp";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <section className="AboutPage page-appearance-animation">
      <PageTitle title="Tell your story here." />

      <div className="AboutPage__identity-container">
        {/* =================WHO WE ARE SECTION================== */}
        <motion.section
          className="AboutPage__identity-section AboutPage__identity-section--who-we-are"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.7 }}
        >
          <img
            className="AboutPage__identity-image"
            src={whoAreWeImage}
            alt="Who we are illustration"
          />
          <div className="AboutPage__identity-content">
            <h4 className="AboutPage__identity-title">Who are we?</h4>
            <p className="AboutPage__identity-description">
              Use this space to describe who you are, what you do, and what your
              business or brand represents. You can keep it personal,
              professional, or both — just make it clear and relatable. This is
              your chance to give visitors a sense of the people or purpose
              behind the site.
            </p>
          </div>
        </motion.section>

        {/* =================OUR STORY================== */}
        <motion.section
          className="AboutPage__identity-section AboutPage__identity-section--our-story"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <img
            className="AboutPage__identity-image"
            src={ourStoryImage}
            alt="Our story illustration"
          />
          <div className="AboutPage__identity-content">
            <h4 className="AboutPage__identity-title">
              Our story / Background
            </h4>
            <p className="AboutPage__identity-description">
              Talk about how the journey started. Share the origin of the
              business, what inspired it, and how it grew into what it is today.
              Be real — visitors love a good story, and this is the perfect
              place to build trust and connection.
            </p>
          </div>
        </motion.section>

        {/* =================OUR MISSION SECTION================== */}
        <motion.section
          className="AboutPage__identity-section AboutPage__identity-section--mission"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <img
            className="AboutPage__identity-image"
            src={ourMissionImage}
            alt="Mission and philosophy illustration"
          />
          <div className="AboutPage__identity-content">
            <h4 className="AboutPage__identity-title">
              Our Mission / Philosophy
            </h4>
            <p className="AboutPage__identity-description">
              Use this section to express your mission or the philosophy behind
              your work. What do you care about? What do you stand for? Give
              your visitors something to connect with beyond just your services.
              It’s not just about what you do — it’s about why you do it.
            </p>
          </div>
        </motion.section>
      </div>
    </section>
  );
}
/* You could add these to your about page:
  -reviews section, showcasing clients approving of their services

*/
