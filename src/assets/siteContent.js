/* Home page images */
import heroImage from "./images/heroImage.webp";
import logoIcon from "./images/logoIcon.png";

/* About page images */
import whoAreWeImage from "./images/whoAreWeImage.webp";
import ourStoryImage from "./images/ourStoryImage.webp";
import ourMissionImage from "./images/ourMissionImage.webp";
import { FiUsers } from "react-icons/fi";
import { FaProjectDiagram } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { BsClockHistory } from "react-icons/bs";

/* Services page images */
import service1Image from "./images/service1Image.webp";
import service2Image from "./images/service2Image.webp";
import service3Image from "./images/service3Image.webp";
import service4Image from "./images/service4Image.webp";

/* Contact images */
import contactImage from "./images/contactImage.webp";
import facebookLogo from "./images/facebookLogo.png";
import instagramLogo from "./images/instagramLogo.webp";
import tiktokLogo from "./images/tiktokLogo.webp";

const siteContent = {
  globalContent: {
    socialsList: [
      {
        platform: "Facebook",
        logoSrc: facebookLogo,
        logoAlt: "Facebook Logo",
        link: "#",
      },
      {
        platform: "Instagram",
        logoSrc: instagramLogo,
        logoAlt: "Instagram Logo",
        link: "#",
      },
      {
        platform: "TikTok",
        logoSrc: tiktokLogo,
        logoAlt: "TikTok Logo",
        link: "#",
      },
    ],
  },

  homePage: {
    headerSection: {
      businessName: "Business name",
      logoSrc: logoIcon,
      logoAlt: "Business logo placeholder",
    },
    navigationLinks: [
      { label: "Home", to: "/" },
      { label: "About", to: "/about" },
      { label: "Services", to: "/services" },
    ],
    heroSection: {
      title: "Catch Their Eye Here",
      description:
        "This is your chance to say something memorable — a quick sentence that captures attention and sets the tone for your site.",
      ctaLabel: "Get to Know Us",
      ctaLink: "/about",
      imageSrc: heroImage,
      imageAlt: "Generic hero section image",
    },
  },

  aboutPage: {
    pageTitle: "Tell your story here.",
    identitySection: [
      {
        sectionTitle: "Who are we?",
        sectionDescription:
          "Use this space to describe who you are, what you do, and what your business or brand represents. You can keep it personal, professional, or both — just make it clear and relatable. This is your chance to give visitors a sense of the people or purpose behind the site.",
        imageSrc: whoAreWeImage,
        imageAlt: "Who we are illustration",
      },
      {
        sectionTitle: "Our story / Background",
        sectionDescription:
          "Talk about how the journey started. Share the origin of the business, what inspired it, and how it grew into what it is today. Be real — visitors love a good story, and this is the perfect place to build trust and connection.",
        imageSrc: ourStoryImage,
        imageAlt: "Our story illustration",
      },
      {
        sectionTitle: "Our Mission / Philosophy",
        sectionDescription:
          "Use this section to express your mission or the philosophy behind your work. What do you care about? What do you stand for? Give your visitors something to connect with beyond just your services. It’s not just about what you do — it’s about why you do it.",
        imageSrc: ourMissionImage,
        imageAlt: "Mission and philosophy illustration",
      },
    ],
    statsSection: {
      sectionTitle: "Numbers don't lie",
      stats: [
        { iconName: FiUsers, value: 500, label: "Clients served" },
        {
          iconName: FaProjectDiagram,
          value: 1200,
          label: "Projects completed",
        },
        { iconName: BsClockHistory, value: 10, label: "Years of experience" },
        { iconName: AiFillStar, value: 500, label: "5-star reviews" },
      ],
    },
    testimonialsSection: {
      sectionTitle: "What Our Clients Say",
      testimonials: [
        {
          quote:
            "Always a great experience. Friendly, professional, and reliable every time.",
          name: "Alice Johnson",
          avatar:
            "https://ui-avatars.com/api/?name=Alice&length=1&background=FFC107&color=fff",
        },
        {
          quote:
            "I’ve been coming here for a while now and I’m never disappointed.",
          name: "Jason Kim",
          avatar:
            "https://ui-avatars.com/api/?name=Jason&length=1&background=4CAF50&color=fff",
        },
        {
          quote: "Top-notch service. They really care about their clients.",
          name: "Nina Lopez",
          avatar:
            "https://ui-avatars.com/api/?name=Nina&length=1&background=00BCD4&color=fff",
        },
        {
          quote:
            "Everything was smooth, fast, and professional. Highly recommend.",
          name: "Omar Rashid",
          avatar:
            "https://ui-avatars.com/api/?name=Omar&length=1&background=FF5722&color=fff",
        },
        {
          quote: "Super happy with the service. Definitely coming back.",
          name: "Lina Tran",
          avatar:
            "https://ui-avatars.com/api/?name=Lina&length=1&background=E91E63&color=fff",
        },
        {
          quote:
            "They went above and beyond. Really appreciate the attention to detail.",
          name: "Chris Evans",
          avatar:
            "https://ui-avatars.com/api/?name=Chris&length=1&background=9C27B0&color=fff",
        },
        {
          quote:
            "Very welcoming and easy to deal with. Felt comfortable right away.",
          name: "Priya Mehta",
          avatar:
            "https://ui-avatars.com/api/?name=Priya&length=1&background=F44336&color=fff",
        },
        {
          quote: "Great people, great service. Exactly what I needed.",
          name: "Daniel Cho",
          avatar:
            "https://ui-avatars.com/api/?name=Daniel&length=1&background=03A9F4&color=fff",
        },
        {
          quote:
            "You can tell they really care about what they do. That matters.",
          name: "Rachel Adams",
          avatar:
            "https://ui-avatars.com/api/?name=Rachel&length=1&background=3F51B5&color=fff",
        },
        {
          quote:
            "Professional, fast, and super easy to work with. Can’t ask for more.",
          name: "Leo Martins",
          avatar:
            "https://ui-avatars.com/api/?name=Leo&length=1&background=FF9800&color=fff",
        },
        {
          quote: "Everything was done right and the whole process was simple.",
          name: "Chloe Park",
          avatar:
            "https://ui-avatars.com/api/?name=Chloe&length=1&background=009688&color=fff",
        },
      ],
    },
    closingCtaSection: {
      sectionTitle: "You know who we are — now see what we do.",
      description: `If you’re still reading, it’s because something here resonates. Don't 
        leave it at curiosity. Explore the services built to turn your ideas 
        into something real — and find the next step that's made for you.`,
      ctaLabel: "See Our Services",
      ctaLink: "/services",
    },
  },

  servicesPage: {
    pageTitle: "Service page title",
    servicesList: [
      {
        serviceTitle: "Service One",
        serviceDescription: `Describe your main service here with enough detail to make it clear,
          but still easy to scan. What is the service? What does it offer? Why
          is it valuable? This is usually your core offer, so you want your
          visitors to get a full sense of what they can expect and why it
          matters. You can also include any standout feature that makes this a
          strong first impression.`,
        imageSrc: service1Image,
        imageAlt: "First service illustration",
        buttonLabel: "Learn more",
      },
      {
        serviceTitle: "Service Two",
        serviceDescription: `Use this section to present another important service you offer. It
          can be something that complements the first, or stands on its own.
          Focus on what makes it useful, who it’s designed for, and how it adds
          value to the overall experience you’re delivering. This space is great
          for explaining how your service fits into the bigger picture.`,
        imageSrc: service2Image,
        imageAlt: "Second service illustration",
        buttonLabel: "Explore",
      },
      {
        serviceTitle: "Service Three",
        serviceDescription: `This block is great for a more optional or niche service — something
          not everyone will need, but the right client will appreciate. Explain
          briefly what it does, who it’s for, and what kind of outcome it’s
          meant to create. Don’t be afraid to call out the specific type of
          client this is perfect for.`,
        imageSrc: service3Image,
        imageAlt: "Third service illustration",
        buttonLabel: "More info",
      },
      {
        serviceTitle: "Service Four",
        serviceDescription: `Use this space for a bonus offering or value-add — whether that’s
          support, customization, ongoing help, or anything extra that makes
          your service more complete. Let visitors know this is where you go
          above and beyond. Think of this as the little detail that helps your
          business stand out from others.`,
        imageSrc: service4Image,
        imageAlt: "Fourth service illustration",
        buttonLabel: "See details",
      },
    ],
    pricingSection: {
      sectionTitle: "Pricing section title goes here.",
      freeOption: {
        title: "Free Trial",
        price: "Free",
        description:
          "Use this space to describe a limited version of your service that new visitors can try without committing.",
      },
      premiumOption: {
        title: "Premium",
        price: "$$$",
        description:
          "Use this for your full offer — whether that means priority support, extra access, or just more of everything.",
      },
      standardOption: {
        title: "Standard",
        price: "$$",
        description:
          "Describe your most commonly selected plan here. This is likely the one that balances access, price, and features.",
      },
    },
    closingCtaSection: {
      title: "You’re one message away.",
      text: "If you’ve made it this far, there’s probably something here that clicked with you. Don’t overthink it — send a message and start the conversation.",
      buttonLabel: "Let’s Talk",
      buttonLink: "/contact",
    },
  },

  contactPage: {
    pageTitle: "Contact page title",
    introSection: {
      imageSrc: contactImage,
      imageAlt: "Placeholder contact visual",
      text: `Here’s where you can leave your final impression — invite your
            visitors to reach out, ask a question, or take the next step.`,
    },
    contactDetails: {
      address: "1234 Placeholder Ave, City, Country",
      phone: "(000) 000-0000",
      businessHours: {
        weekdays: "Mon–Fri | 9:00–17:00",
        weekends: "Sat–Sun | 10:00–15:00",
      },
    },
    clientEmailAddress: "example@email.com",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835284453122!2d-122.42067968468136!3d37.7749292797599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064e1aa6613%3A0x8e4d563bdc0b2c64!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1700000000000",
  },
};

export default siteContent;
