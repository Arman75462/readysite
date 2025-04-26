import "./styles/ContactPage.css";
import { motion } from "framer-motion";
import { TextField, Button, Box } from "@mui/material";
import PageTitle from "../elements/PageTitle.jsx";
import siteContent from "../assets/siteContent.js";

export default function ContactPage() {
  return (
    <section className="ContactPage page-appearance-animation">
      <PageTitle title={siteContent.contactPage.pageTitle} />

      {/*===============================================
        =================CONTENT SECTION================
        ================================================*/}
      <div className="ContactPage__content">
        <motion.img
          src={siteContent.contactPage.introSection.imageSrc}
          alt={siteContent.contactPage.introSection.imageAlt}
          className="ContactPage__image"
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 0.7,
            type: "spring",
            stiffness: 110,
            damping: 15,
          }}
          viewport={{ once: true, amount: 0.5 }}
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
            viewport={{ once: true, margin: "-150px" }}
          >
            {siteContent.contactPage.introSection.text}
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
            viewport={{ once: true, amount: 0.3 }}
          >
            <p>
              <strong>Address:</strong>
              <br /> {siteContent.contactPage.contactDetails.address}
            </p>
            <p>
              <strong>Phone:</strong> <br />
              {siteContent.contactPage.contactDetails.phone}
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
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="ContactPage__hours-socials-container">
              <strong>Business Hours:</strong>
              <br />
              {siteContent.contactPage.contactDetails.businessHours.weekdays}
              <br />
              {siteContent.contactPage.contactDetails.businessHours.weekends}
            </p>

            <div className="ContactPage__hours-socials-container">
              <strong>Socials:</strong>
              <br />
              <div className="ContactPage__socials-links">
                {siteContent.globalContent.socialsList.map(
                  (socialMedia, index) => {
                    return (
                      <a href={socialMedia.link} key={socialMedia.platform}>
                        <img
                          src={socialMedia.logoSrc}
                          alt={socialMedia.logoAlt}
                        />
                      </a>
                    );
                  }
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/*===============================================
      ======================EMAIL TEXT==================
      ================================================*/}
      <motion.p
        className="ContactPage__email gradient-text"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.4,
          type: "spring",
          stiffness: 130,
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {siteContent.contactPage.clientEmailAddress}
      </motion.p>

      {/*===============================================
      ======================MAP ELEMENT=================
      ================================================*/}
      <iframe
        className="ContactPage__map"
        title="Business Location"
        src={siteContent.contactPage.mapEmbedUrl}
        allowFullScreen
        loading="lazy"
      ></iframe>

      {/*===============================================
      ====================FORM SECTION==================
      ================================================*/}
      <motion.div
        className="ContactPage__form-container"
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
        <h3 className="ContactPage__form-title">
          Got a question? Drop us a message.
        </h3>

        <Box
          component="form"
          action={`https://formsubmit.co/${siteContent.contactPage.clientEmailAddress}`}
          method="POST"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            maxWidth: "500px",
            margin: "0 auto",
          }}
        >
          <TextField
            name="name"
            label="Your Name"
            variant="outlined"
            type="text"
            required
            fullWidth
          />
          <TextField
            name="email"
            label="Your Email"
            variant="outlined"
            type="email"
            required
            fullWidth
          />
          <TextField
            name="phone"
            label="Your Phone Number (optional)"
            type="tel"
            fullWidth
            slotProps={{
              input: {
                pattern: "[0-9()+\\s-]{7,15}",
                title: "Please enter a valid phone number (7–15 digits).",
              },
            }}
          />
          <TextField
            name="message"
            label="Your Message"
            variant="outlined"
            multiline
            minRows={4}
            required
            fullWidth
          />

          {/* Prevents Formsubmit from showing a CAPTCHA popup before sending the message */}
          <input type="hidden" name="_captcha" value="false" />

          {/* After successful form submission, redirect the user back to this URL (instead of showing Formsubmit’s default thank-you page) */}
          <input
            type="hidden"
            name="_next"
            value="https://readysite.netlify.app/thank-you"
          />

          <Button type="submit" variant="contained" size="large">
            Send Message
          </Button>
        </Box>
      </motion.div>
    </section>
  );
}
