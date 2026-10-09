import { CSSProperties } from "react";
import { useInView } from "./useInView";
import { Arrow, AnimatedWords } from "./HeroComponents";
import { roles } from "./heroData";
import { brands } from "./heroData";
import "./Home.css";

/* ---------- Component ---------- */
export default function Middle() {
  const eco = useInView<HTMLElement>(0.15);
  const about = useInView<HTMLElement>(0.2);

  return (
    <div className="middle">
      {/* ===== Ecosystem ===== */}
      <section ref={eco.ref} className={`eco ${eco.inView ? "is-in" : ""}`}>
        <div className="eco__head">
          <div>
            <p className="eyebrow fade" style={{ animationDelay: "0s" }}>
              THE ECOSYSTEM
            </p>
            <h2 className="eco__title">
              <AnimatedWords text="Multiple brands. One vision." delay={0.15} step={0.13} />
            </h2>
          </div>
          <p className="eco__intro fade" style={{ animationDelay: "0.5s" }}>
            Each brand and initiative is a part of a bigger picture — creating better environments, stronger communities, and
            greater opportunities for people, especially across Africa.
          </p>
        </div>

        <div className="eco__grid">
          {brands.map((b, i) => (
            <a href="#" className="card" key={b.id} style={{ "--i": i } as CSSProperties}>
              <div className="card__media">
                <img src={b.image} alt="" loading="lazy" />
              </div>
              <div className="card__body">
                <div className="card__logo">{b.logo}</div>
                <p className="card__text">{b.description}</p>
                <span className="card__arrow">
                  <Arrow />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ===== About ===== */}
      <section ref={about.ref} className={`about ${about.inView ? "is-in" : ""}`}>
        <div className="about__media">
          <img src="/images/about.jpg" alt="Crystal Kizor" loading="lazy" />
        </div>

        <div className="about__copy">
          <p className="eyebrow fade" style={{ animationDelay: "0.1s" }}>
            ABOUT CRYSTAL KIZOR
          </p>
          <h2 className="about__title">
            <AnimatedWords text="Designing systems" delay={0.25} step={0.12} />
            <br />
            <AnimatedWords text="for a more human," delay={0.6} step={0.12} />
            <br />
            <AnimatedWords text="sustainable future." delay={1.0} step={0.12} />
          </h2>
          <p className="about__text fade" style={{ animationDelay: "1.3s" }}>
            I'm passionate about using design, education, research and influence to solve real problems, create opportunities and
            help people and communities thrive — especially in Africa.
          </p>
          <a href="#about" className="about__link fade" style={{ animationDelay: "1.5s" }}>
            Learn More About Me <Arrow />
          </a>
        </div>

        <div className="about__divider" />

        <ul className="about__roles">
          {roles.map((r, i) => (
            <li className="role" key={r.title} style={{ "--i": i } as CSSProperties}>
              <span className="role__icon">{r.icon}</span>
              <div>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}