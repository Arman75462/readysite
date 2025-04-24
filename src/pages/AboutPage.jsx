import "./styles/AboutPage.css";
import PageTitle from "../elements/PageTitle.jsx";
import whoAreWeImage from "../assets/images/whoAreWeImage.webp";
import ourStoryImage from "../assets/images/ourStoryImage.webp";
import ourMissionImage from "../assets/images/ourMissionImage.webp";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import testimonials from "../assets/testimonials.js";

// Icons in stats section
import { FiUsers } from "react-icons/fi";
import { FaProjectDiagram } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { BsClockHistory } from "react-icons/bs";

// Carousel in testimonials section
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function AboutPage() {
  return (
    <section className="AboutPage page-appearance-animation">
      <PageTitle title="Tell your story here." />

      {/* =================IDENTITY SECTION================== */}
      <section className="AboutPage__identity-container">
        {/* =================WHO WE ARE================== */}
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
            <h3 className="AboutPage__identity-title">Who are we?</h3>
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
            <h3 className="AboutPage__identity-title">
              Our story / Background
            </h3>
            <p className="AboutPage__identity-description">
              Talk about how the journey started. Share the origin of the
              business, what inspired it, and how it grew into what it is today.
              Be real — visitors love a good story, and this is the perfect
              place to build trust and connection.
            </p>
          </div>
        </motion.section>

        {/* =================OUR MISSION================== */}
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
            <h3 className="AboutPage__identity-title">
              Our Mission / Philosophy
            </h3>
            <p className="AboutPage__identity-description">
              Use this section to express your mission or the philosophy behind
              your work. What do you care about? What do you stand for? Give
              your visitors something to connect with beyond just your services.
              It’s not just about what you do — it’s about why you do it.
            </p>
          </div>
        </motion.section>
      </section>

      {/* =================STATS SECTION================== */}
      <section className="AboutPage__stats-container">
        <h2 className="AboutPage__stats-title">Numbers don't lie</h2>

        <div className="AboutPage__stats-grid">
          <div className="AboutPage__stat">
            <FiUsers className="AboutPage__stat-icon" />

            <p className="AboutPage__stat-value">
              <CountUp end={500} duration={2} enableScrollSpy scrollSpyOnce />+
            </p>
            <p className="AboutPage__stat-label">Clients served</p>
          </div>

          <div className="AboutPage__stat">
            <FaProjectDiagram className="AboutPage__stat-icon" />

            <p className="AboutPage__stat-value">
              <CountUp end={1200} duration={2} enableScrollSpy scrollSpyOnce />+
            </p>
            <p className="AboutPage__stat-label">Projects completed</p>
          </div>

          <div className="AboutPage__stat">
            <BsClockHistory className="AboutPage__stat-icon" />

            <p className="AboutPage__stat-value">
              <CountUp end={10} duration={2} enableScrollSpy scrollSpyOnce />+
            </p>
            <p className="AboutPage__stat-label">Years of experience</p>
          </div>

          <div className="AboutPage__stat">
            <AiFillStar className="AboutPage__stat-icon" />

            <p className="AboutPage__stat-value">
              <CountUp end={500} duration={2} enableScrollSpy scrollSpyOnce />+
            </p>
            <p className="AboutPage__stat-label">5-star reviews</p>
          </div>
        </div>
      </section>

      {/* =================TESTIMONIALS SECTION================== */}
      <section className="AboutPage__testimonials-container">
        <h2 className="AboutPage__stats-title">What Our Clients Say</h2>

        <motion.div
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
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              600: { slidesPerView: 2 },
              1000: { slidesPerView: 3 },
            }}
            className="AboutPage__testimonial-swiper"
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <div className="AboutPage__testimonial-card">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="AboutPage__testimonial-avatar"
                  />
                  <div
                    className="AboutPage__testimonial-stars"
                    style={{ color: "gold" }}
                  >
                    ★★★★★
                  </div>
                  <p className="AboutPage__testimonial-quote">"{t.quote}"</p>
                  <p className="AboutPage__testimonial-name">{t.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </section>

      {/* =================CTA SECTION================== */}
      <section className="AboutPage__cta-container"></section>
    </section>
  );
}
