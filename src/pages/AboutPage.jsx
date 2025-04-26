import "./styles/AboutPage.css";
import PageTitle from "../elements/PageTitle.jsx";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import CTA from "../elements/CTA.jsx";
import siteContent from "../assets/siteContent.js";

// Carousel in testimonials section
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function AboutPage() {
  return (
    <section className="AboutPage page-appearance-animation">
      <PageTitle title={siteContent.aboutPage.pageTitle} />

      {/*===============================================
      ==================IDENTITY SECTION================
      ================================================*/}
      <section className="AboutPage__identity-container">
        {siteContent.aboutPage.identitySection.map((section, index) => {
          return (
            <motion.section
              className="AboutPage__identity-section"
              initial={{ opacity: 0, x: (index + 1) % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.7 }}
              key={section.sectionTitle}
            >
              <img
                className="AboutPage__identity-image"
                src={section.imageSrc}
                alt={section.imageAlt}
                style={{ order: (index + 1) % 2 === 0 ? 2 : "" }}
                /* For even sections, move image after the text by setting order to 2
                 */
              />
              <div className="AboutPage__identity-content">
                <h3 className="AboutPage__identity-title">
                  {section.sectionTitle}
                </h3>
                <p className="AboutPage__identity-description">
                  {section.sectionDescription}
                </p>
              </div>
            </motion.section>
          );
        })}
      </section>

      {/*==================================================
      ======================STATS SECTION==================
      =====================================================*/}
      <section className="AboutPage__stats-container">
        <h2 className="AboutPage__stats-title">
          {siteContent.aboutPage.statsSection.sectionTitle}
        </h2>

        <div className="AboutPage__stats-grid">
          {siteContent.aboutPage.statsSection.stats.map((stat, index) => {
            return (
              <div className="AboutPage__stat" key={stat.label}>
                <stat.iconName className="AboutPage__stat-icon" />

                <p className="AboutPage__stat-value">
                  <CountUp
                    end={stat.value}
                    duration={2}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  +
                </p>
                <p className="AboutPage__stat-label">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/*==================================================
      =================TESTIMONIALS SECTION================
      =====================================================*/}
      <section className="AboutPage__testimonials-container">
        <h2 className="AboutPage__stats-title">
          {siteContent.aboutPage.testimonialsSection.sectionTitle}
        </h2>

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
            {siteContent.aboutPage.testimonialsSection.testimonials.map(
              (t, index) => (
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
              )
            )}
          </Swiper>
        </motion.div>
      </section>

      {/*==================================================
      ======================CTA SECTION====================
      =====================================================*/}
      <motion.section
        className="AboutPage__cta-container"
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
        <h3 className="AboutPage__closing-cta-title">
          {siteContent.aboutPage.closingCtaSection.sectionTitle}
        </h3>
        <p className="AboutPage__closing-cta-text">
          {siteContent.aboutPage.closingCtaSection.description}
        </p>
        <CTA
          className="AboutPage__closing-cta-button"
          to={siteContent.aboutPage.closingCtaSection.ctaLink}
        >
          {siteContent.aboutPage.closingCtaSection.ctaLabel}
        </CTA>
      </motion.section>
    </section>
  );
}
