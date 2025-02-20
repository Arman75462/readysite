import "./styles/ServicesPage.css";
import coachingImage from "../assets/coachingImage.jpg";
import shakeBarImage from "../assets/shakeBarImage.jpg";
import posingImage from "../assets/posingImage.jpg";
import freeWeightsImage from "../assets/freeWeightsImage.jpg";
import machinesImage from "../assets/machinesImage.jpg";
import CTA from "../elements/CTA.jsx";

export default function ServicesPage() {
  return (
    <main className="ServicesPage page-appearance-animation">
      <h2 className="ServicesPage__title">Transforme-toi ici.</h2>

      <div className="ServicesPage__service-container">
        <section className="ServicesPage__service ServicesPage__service--machines">
          <img
            className="ServicesPage__service-image"
            src={machinesImage}
            alt="Machines de musculation"
          />
          <div className="ServicesPage__service-content">
            <h3 className="ServicesPage__service-title">Machines</h3>
            <p className="ServicesPage__service-description">
              Profitez d'une gamme complète de machines modernes pour un
              entraînement sécurisé et efficace. Que vous soyez débutant ou
              athlète confirmé, nos équipements vous permettent de cibler chaque
              groupe musculaire avec précision, d'améliorer votre force et de
              maximiser vos performances. Progressez à votre rythme, sans
              compromis sur la qualité.
            </p>
            <CTA className="ServicesPage__service-cta">
              Prêt à tester nos machines ?
            </CTA>
          </div>
        </section>

        <section className="ServicesPage__service ServicesPage__service--free-weights">
          <img
            className="ServicesPage__service-image"
            src={freeWeightsImage}
            alt="Poids libres"
          />
          <div className="ServicesPage__service-content">
            <h3 className="ServicesPage__service-title">Poids libres</h3>
            <p className="ServicesPage__service-description">
              Développez votre force et votre endurance avec nos haltères et
              barres libres. Idéal pour un entraînement fonctionnel, les poids
              libres vous permettent de travailler votre stabilité, votre
              coordination et d'exécuter des mouvements naturels sans contrainte
              de machine.
            </p>
            <CTA className="ServicesPage__service-cta">Soulève avec nous !</CTA>
          </div>
        </section>

        <section className="ServicesPage__service ServicesPage__service--machines--posing">
          <img
            className="ServicesPage__service-image"
            src={posingImage}
            alt="Espace posing"
          />
          <div className="ServicesPage__service-content">
            <h3 className="ServicesPage__service-title">Espace Posing</h3>
            <p className="ServicesPage__service-description">
              Perfectionnez votre posture et votre présence avec notre espace
              dédié au posing. Que vous soyez un compétiteur en bodybuilding ou
              que vous souhaitiez simplement améliorer votre contrôle corporel,
              cet espace est conçu pour affiner vos poses et mettre en valeur
              vos progrès.
            </p>
            <CTA className="ServicesPage__service-cta">Pose comme un pro !</CTA>
          </div>
        </section>

        <section className="ServicesPage__service ServicesPage__service--shake-bar">
          <img
            className="ServicesPage__service-image"
            src={shakeBarImage}
            alt="Shake Bar"
          />
          <div className="ServicesPage__service-content">
            <h3 className="ServicesPage__service-title">Shake Bar</h3>
            <p className="ServicesPage__service-description">
              Rechargez vos batteries avec des shakes protéinés et des boissons
              énergétiques adaptées à vos besoins. Que ce soit avant ou après
              votre entraînement, notre Shake Bar vous propose des options
              délicieuses pour optimiser votre récupération et soutenir vos
              objectifs nutritionnels.
            </p>
            <CTA className="ServicesPage__service-cta">
              Un shake après l'entraînement ?
            </CTA>
          </div>
        </section>

        <section className="ServicesPage__service ServicesPage__service--coaching">
          <img
            className="ServicesPage__service-image"
            src={coachingImage}
            alt="Coaching personnalisé"
          />
          <div className="ServicesPage__service-content">
            <h3 className="ServicesPage__service-title">
              Coaching personnalisé
            </h3>
            <p className="ServicesPage__service-description">
              Atteignez vos objectifs plus rapidement avec l'accompagnement d'un
              coach expérimenté. Profitez d'un programme sur mesure, de conseils
              en nutrition et d'un suivi adapté à votre progression pour
              maximiser vos performances.
            </p>
            <CTA className="ServicesPage__service-cta">
              Un coach rien que pour toi !
            </CTA>
          </div>
        </section>
      </div>

      <section className="ServicesPage__pricing">
        <h2 className="ServicesPage__pricing-title">
          Choisissez le bon plan pour vos besoins.
        </h2>
        <div className="ServicesPage__pricing-options">
          <article className="ServicesPage__pricing-option ServicesPage__pricing-option--trial">
            <h4 className="ServicesPage__pricing-option-title">
              Premier essai
            </h4>
            <p className="ServicesPage__pricing-option-price">Gratuit</p>
            <p className="ServicesPage__pricing-option-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              tempora.
            </p>
            <div className="ServicesPage__pricing-option-services">
              <p>Machines</p>
              <p>Poids libres</p>
              <p>Shake bar</p>
              <p>Espace posing</p>
              <p>Coaching</p>
            </div>
          </article>
          <article className="ServicesPage__pricing-option ServicesPage__pricing-option--monthly">
            <h4 className="ServicesPage__pricing-option-title">Mensuel</h4>
            <p className="ServicesPage__pricing-option-price">$39.95 / Mois</p>
            <p className="ServicesPage__pricing-option-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              tempora.
            </p>
            <div className="ServicesPage__pricing-option-services">
              <p>Machines</p>
              <p>Poids libres</p>
              <p>Shake bar</p>
              <p>Espace posing</p>
              <p>Coaching</p>
            </div>
          </article>
          <article className="ServicesPage__pricing-option ServicesPage__pricing-option--single">
            <h4 className="ServicesPage__pricing-option-title">
              Entrée unique
            </h4>
            <p className="ServicesPage__pricing-option-price">$10</p>
            <p className="ServicesPage__pricing-option-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              tempora.
            </p>
            <div className="ServicesPage__pricing-option-services">
              <p>Machines</p>
              <p>Poids libres</p>
              <p>Shake bar</p>
              <p>Espace posing</p>
              <p>Coaching</p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
