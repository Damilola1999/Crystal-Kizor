import { useEffect, useMemo, useRef, useState, CSSProperties } from "react";
import "./Home.css";
import { roles, headline, paragraph, Words, brands, rolesData, Logo, socials } from "./heroData.tsx";
import { Arrow, AnimatedWords } from "./HeroComponents";

export default function Hero() {
  const [ready, setReady] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 50);
    return () => clearTimeout(t);
  }, []);

  // word offsets so each block continues the stagger of the previous one
  const { rolesDelay, headlineDelays, paraDelay, btnDelay } = useMemo(() => {
    const rolesDelay = 0.2;
    const headlineDelays = headline.reduce<number[]>((acc, _line, i) => {
      const start = acc.length === 0
        ? rolesDelay + roles.length * 0.08
        : acc[acc.length - 1] + headline[i - 1].split(" ").length * 0.12;
      acc.push(start);
      return acc;
    }, []);
    const paraDelay = headlineDelays[headlineDelays.length - 1] + headline[headline.length - 1].split(" ").length * 0.12 + 0.1;
    const paraWords = paragraph.split(" ").length;
    const btnDelay = paraDelay + paraWords * 0.025 + 0.2;
    return { rolesDelay, headlineDelays, paraDelay, btnDelay };
  }, []);

  return (
    <section ref={ref} className={`hero ${ready ? "is-ready" : ""}`}>
      <div className="hero__bg" />

      <div className="hero__content">
        <p className="hero__roles">
          {roles.map((role, i) => (
            <span className="word-mask" key={role}>
              <span className="word" style={{ animationDelay: `${rolesDelay + i * 0.08}s` }}>
                {role.toUpperCase()}
              </span>
              {i < roles.length - 1 && <span className="hero__dot">•</span>}
            </span>
          ))}
        </p>

        <h1 className="hero__title">
          {headline.map((line, i) => (
            <span className="hero__line" key={line}>
              <AnimatedWords text={line} startDelay={headlineDelays[i]} step={0.12} />
            </span>
          ))}
        </h1>

        <p className="hero__text">
          <AnimatedWords text={paragraph} startDelay={paraDelay} step={0.025} />
        </p>

        <a href="#work" className="hero__btn" style={{ animationDelay: `${btnDelay}s` }}>
          Explore My Work <Arrow />
        </a>
      </div>

      <div className="hero__signature">
        <span className="hero__script">Crystal Kizor</span>
        <span className="hero__tags">IDEAS &nbsp;/&nbsp; DESIGN &nbsp;/&nbsp; IMPACT</span>
      </div>
    </section>
  );
}


export function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, inView };
}


/* ---------- Component ---------- */
export function Middle() {
  const eco = useInView<HTMLElement>(0.15);

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
              <Words text="Multiple brands. One vision." delay={0.15} step={0.13} />
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

      <About />
    </div>
  );
}


export function About() {
  const { ref, inView } = useInView<HTMLElement>(0.2);

  return (
    <section ref={ref} className={`about ${inView ? "is-in" : ""}`}>
      <div className="about__media">
        <iframe
          src="https://assets.pinterest.com/ext/embed.html?id=882635226975256461"
          height="100%"
          width="100%"
          frameBorder="0"
          scrolling="no"
          title="Crystal Kizor video"
        />
      </div>

      <div className="about__copy">
        <p className="eyebrow fade" style={{ animationDelay: "0.1s" }}>
          ABOUT CRYSTAL KIZOR
        </p>
        <h2 className="about__title">
          <Words text="Designing systems" delay={0.25} step={0.12} />
          <br />
          <Words text="for a more human," delay={0.6} step={0.12} />
          <br />
          <Words text="sustainable future." delay={1.0} step={0.12} />
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
        {rolesData.map((r, i) => (
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
  );
}


/* ---------- Component ---------- */
export function Closing() {
  const top = useInView<HTMLElement>(0.25);
  const foot = useInView<HTMLElement>(0.3);

  return (
    <>
      {/* ===== The Bigger Picture ===== */}
      <section ref={top.ref} className={`cl ${top.inView ? "is-in" : ""}`}>
        <div className="cl__bg" />
        <div className="cl__overlay" />

        <div className="cl__inner">
          <div className="cl__copy">
            <p className="cl__eyebrow c-fade" style={{ animationDelay: "0.1s" }}>
              THE BIGGER PICTURE
            </p>

            <h2 className="cl__title">
              <Words text="From buildings to people," delay={0.25} step={0.11} />
              <br />
              <Words text="from ideas to impact." delay={0.75} step={0.11} />
            </h2>

            <p className="cl__text c-fade" style={{ animationDelay: "1.2s" }}>
              Everything I do is connected — creating value across spaces, people, knowledge and purpose. Together, these brands
              and initiatives form a growing ecosystem for a better tomorrow.
            </p>

            <a href="#ecosystem" className="cl__btn c-fade" style={{ animationDelay: "1.4s" }}>
              Explore the Ecosystem <Arrow />
            </a>
          </div>

          <blockquote className="cl__quote c-fade" style={{ animationDelay: "1.1s" }}>
            <p>
              “Design is not just about buildings, it’s about people, possibilities and a better future.”
            </p>
            — CRYSTAL KIZOR
          </blockquote>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer ref={foot.ref} className={`ft ${foot.inView ? "is-in" : ""}`}>
        <div className="ft__inner">
          <div className="ft__brand c-fade" style={{ animationDelay: "0s" }}>
            <Logo />
            <div>
              <span className="ft__name">CRYSTAL KIZOR</span>
              <span className="ft__tag">ARCHITECTURE &nbsp;·&nbsp; DESIGN &nbsp;·&nbsp; PEOPLE &nbsp;·&nbsp; IMPACT</span>
            </div>
          </div>

          <div className="ft__connect">
            <h3 className="c-fade" style={{ animationDelay: "0.15s" }}>
              Let’s stay connected
            </h3>
            <p className="c-fade" style={{ animationDelay: "0.25s" }}>
              Follow the journey, get updates and be part of what’s next.
            </p>
            <ul className="ft__socials">
              {socials.map((s, i) => (
                <li key={s.label} className="c-fade" style={{ animationDelay: `${0.4 + i * 0.1}s` }}>
                  <a href={s.href} aria-label={s.label}>
                    {s.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <a href="#contact" className="ft__btn c-fade" style={{ animationDelay: "0.5s" }}>
            Get in Touch <Arrow />
          </a>
        </div>
      </footer>
    </>
  );
}