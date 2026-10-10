import { useEffect, useRef, useState, CSSProperties } from "react";
import "./Home.css";
import { Words } from "./heroData.tsx";
import { Arrow } from "./HeroComponents";

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

export function Speaking() {
  const { ref, inView } = useInView<HTMLElement>(0.15);

  const topics = [
    "African Cities & Urban Futures",
    "Climate-Responsive Architecture",
    "Design for Social Impact",
    "Participatory Design & Community-Led Development",
    "Women in Architecture & Leadership",
    "Creative Entrepreneurship in the Global South",
    "Education & the Next Generation of Designers",
    "Faith, Culture & the Built Environment",
  ];

  return (
    <section ref={ref} className={`speaking ${inView ? "is-in" : ""}`}>
      <div className="spk__container">
        <header className="spk__header">
          <p className="spk__eyebrow">SPEAKING</p>
          <h2 className="spk__title">
            <Words text="Ideas worth" delay={0.15} step={0.11} />
            <br />
            <Words text="amplifying." delay={0.55} step={0.11} />
          </h2>
          <p className="spk__intro">
            I speak on architecture, climate, African cities, design entrepreneurship, and the power of design to create equity.
            Available for keynotes, panels, workshops, and fireside chats — in person or virtual.
          </p>
        </header>

        <div className="spk__topics">
          <h3 className="spk__section-title">Topics</h3>
          <ul className="spk__topic-list">
            {topics.map((topic, i) => (
              <li key={topic} className="spk__topic" style={{ "--i": i } as CSSProperties}>
                {topic}
              </li>
            ))}
          </ul>
        </div>

        <div className="spk__cta-wrap">
          <a href="#contact" className="spk__btn">
            Book Crystal to Speak <Arrow />
          </a>
          <p className="spk__cta-note">Or email speaking@crystalkizor.com</p>
        </div>
      </div>
    </section>
  );
}