import "./styles/ServicesPage.css";
import coachingImage from "../assets/images/coachingImage.webp";
import shakeBarImage from "../assets/images/shakeBarImage.webp";
import posingImage from "../assets/images/posingImage.webp";
import freeWeightsImage from "../assets/images/freeWeightsImage.webp";
import machinesImage from "../assets/images/machinesImage.webp";
import Service from "./ServicesPage-components/Service.jsx";
import PricingOption from "./ServicesPage-components/PricingOption.jsx";
import PageTitle from "../elements/PageTitle.jsx";

export default function ServicesPage() {
  return (
    <main className="ServicesPage page-appearance-animation">
      <PageTitle title="Transforme-toi ici." />

      <div className="ServicesPage__service-container">
        <Service
          imageSrc={machinesImage}
          imageAlt="Machines de musculation"
          serviceTitle="Machines"
          buttonText="Prêt à tester nos machines ?"
          className="Service-machines"
        >
          Profitez d&apos;une gamme complète de machines modernes pour un
          entraînement sécurisé et efficace. Que vous soyez débutant ou athlète
          confirmé, nos équipements vous permettent de cibler chaque groupe
          musculaire avec précision, d&apos;améliorer votre force et de
          maximiser vos performances. Progressez à votre rythme, sans compromis
          sur la qualité.
        </Service>

        <Service
          imageSrc={freeWeightsImage}
          imageAlt="Poids libres"
          serviceTitle="Poids libres"
          buttonText="Soulève avec nous !"
          className="Service-free-weights"
        >
          Développez votre force et votre endurance avec nos haltères et barres
          libres. Idéal pour un entraînement fonctionnel, les poids libres vous
          permettent de travailler votre stabilité, votre coordination et
          d&apos;exécuter des mouvements naturels sans contrainte de machine.
        </Service>

        <Service
          imageSrc={posingImage}
          imageAlt="Espace posing"
          serviceTitle="Espace Posing"
          buttonText="Pose comme un pro !"
          className="Service-machines-posing"
        >
          Perfectionnez votre posture et votre présence avec notre espace dédié
          au posing. Que vous soyez un compétiteur en bodybuilding ou que vous
          souhaitiez simplement améliorer votre contrôle corporel, cet espace
          est conçu pour affiner vos poses et mettre en valeur vos progrès.
        </Service>

        <Service
          imageSrc={shakeBarImage}
          imageAlt="Shake Bar"
          serviceTitle="Shake Bar"
          buttonText="Un shake après l'entraînement ?"
          className="Service-shake-bar"
        >
          Rechargez vos batteries avec des shakes protéinés et des boissons
          énergétiques adaptées à vos besoins. Que ce soit avant ou après votre
          entraînement, notre Shake Bar vous propose des options délicieuses
          pour optimiser votre récupération et soutenir vos objectifs
          nutritionnels.
        </Service>

        <Service
          imageSrc={coachingImage}
          imageAlt="Coaching personnalisé"
          serviceTitle="Coaching personnalisé"
          buttonText="Un coach rien que pour toi !"
          className="Service-coaching"
          to="/coaching"
        >
          Atteignez vos objectifs plus rapidement avec l&apos;accompagnement
          d&apos;un coach expérimenté. Profitez d&apos;un programme sur mesure,
          de conseils en nutrition et d&apos;un suivi adapté à votre progression
          pour maximiser vos performances.
        </Service>
      </div>

      {/* ============================================== */
      /* ============================================== */
      /* ============================================== */
      /* ============================================== */
      /* ============================================== */}

      <section className="ServicesPage__pricing">
        <h3 className="ServicesPage__pricing-title">
          Choisissez le bon plan pour vos besoins.
        </h3>

        <div className="ServicesPage__pricing-options">
          <PricingOption
            title="Premier essai"
            price="Gratuit"
            className="PricingOption-trial"
          >
            Profitez d&apos;une première séance gratuite pour tester nos
            équipements et services.
          </PricingOption>

          <PricingOption
            title="Mensuel"
            price="$39.95 / Mois"
            className="PricingOption-monthly"
          >
            Un abonnement flexible pour un accès illimité aux machines, poids
            libres, et plus encore, chaque mois.
          </PricingOption>

          <PricingOption
            title="Entrée unique"
            price="$10"
            className="PricingOption-single"
          >
            Accès à une séance unique avec toutes les installations à votre
            disposition.
          </PricingOption>
        </div>
      </section>
    </main>
  );
}
