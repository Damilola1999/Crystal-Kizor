import { ReactNode } from "react";

export const roles = ["Architect", "Designer", "Entrepreneur", "Speaker", "Researcher", "Creator"];

export const headline = ["Building better", "spaces, people and", "possibilities."];

export const paragraph =
  "I'm Crystal Kizor — an architect, designer, entrepreneur, speaker, researcher and creator. Through a growing ecosystem of brands and initiatives, I work at the intersection of design, people and purpose to create lasting impact.";


/* ---------- Helpers ---------- */
export function Words({ text, delay = 0, step = 0.09 }: { text: string; delay?: number; step?: number }) {
  return (
    <>
      {text.split(" ").map((w, i) => (
        <span className="m-mask" key={`${w}-${i}`}>
          <span className="m-word" style={{ animationDelay: `${delay + i * step}s` }}>
            {w}
          </span>
          {"\u00A0"}
        </span>
      ))}
    </>
  );
}

/* ---------- Brand logos ---------- */
const StudioCoka = () => (
  <div className="logo logo--studio">
    <span>STUDIO</span>
    <span>COKA</span>
  </div>
);

const Ako = () => (
  <div className="logo logo--ako">
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 19 12 4l9 15M8 14l4 3 4-3" />
    </svg>
    <div>
      <strong>AKO</strong>
      <small>ALLIANCE</small>
    </div>
  </div>
);

const Elevated = () => (
  <div className="logo logo--elevated">
    ELE<span>vated</span>
  </div>
);

const Tea = () => (
  <div className="logo logo--tea">
    <strong>TEA</strong>
    <div>
      <span>The Effective</span>
      <span>Architect</span>
    </div>
  </div>
);

const Speaking = () => (
  <div className="logo logo--speaking">
    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2c-5 0-9 3.5-9 8 0 3 2 5.5 5 6.5V22h2v-4.2c.7.1 1.3.2 2 .2 5 0 9-3.5 9-8s-4-8-9-8z" />
    </svg>
    <div>
      <span>Speaking</span>
      <span>Engagements</span>
    </div>
  </div>
);

const Alive = () => (
  <div className="logo logo--alive">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2 9.5 8H4l4.5 4L7 19l5-3 5 3-1.5-7L20 8h-5.5z" />
    </svg>
    <span>ALIVE AND FREE</span>
  </div>
);

const Kizor = () => (
  <div className="logo logo--kizor">
    <svg width="22" height="28" viewBox="0 0 28 34" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <path d="M9 4C3 8 3 26 9 30" />
      <path d="M13 3v28" />
      <path d="M25 4 13 18l12 13" />
    </svg>
    <span>CRYSTAL KIZOR</span>
  </div>
);

/* ---------- Data ---------- */

interface Brand {
  id: string;
  image: string;
  logo: ReactNode;
  description: string;
  proof: string;
  url: string;
  cta: string;
}

export const brands: Brand[] = [
  { 
    id: "studio-coka", 
    image: "/images/Architectural Designer in Her Studio.png", 
    logo: <StudioCoka />, 
    description: "Architecture, Interior Design & Construction",
    proof: "50+ projects across 3 continents",
    url: "https://studiocoka.com",
    cta: "Visit Studio Coka"
  },
  { 
    id: "ako", 
    image: "/images/brands/ako.jpg", 
    logo: <Ako />, 
    description: "Expanding access to education and creating opportunities for children and young people.",
    proof: "12,000+ students reached since 2018",
    url: "#",
    cta: "Visit Ako"
  },
  { 
    id: "elevated", 
    image: "/images/brands/elevated.jpg", 
    logo: <Elevated />, 
    description: "Furniture & Product Design",
    proof: "15 products in production",
    url: "#",
    cta: "Visit Elevated"
  },
  { 
    id: "tea", 
    image: "/images/brands/tea.jpg", 
    logo: <Tea />, 
    description: "Education and media for architects and built-environment professionals.",
    proof: "8,000+ newsletter subscribers",
    url: "https://theeffectivearchitect.com",
    cta: "Visit TEA"
  },
  { 
    id: "speaking", 
    image: "/images/Cozy Architecture Podcast Workspace.png", 
    logo: <Speaking />, 
    description: "Talks and conversations on architecture, climate, African cities, design, entrepreneurship and more.",
    proof: "40+ keynotes & panels globally",
    url: "https://crystalkizor.com/speaking",
    cta: "View Speaking"
  },
  { 
    id: "alive", 
    image: "/images/brands/alive.jpg", 
    logo: <Alive />, 
    description: "A Christian youth movement for truth, healing, freedom, identity, purpose and life in Christ.",
    proof: "Active in 7 African countries",
    url: "https://aliveandfree.org",
    cta: "Visit Alive"
  },
  { 
    id: "kizor", 
    image: "/images/Architectural Studio Portrait.png", 
    logo: <Kizor />, 
    description: "Research, writing, media, ideas and other work that sits directly under the personal brand.",
    proof: "200+ articles & essays published",
    url: "https://crystalkizor.com",
    cta: "Visit Kizor"
  },
];

const iconProps = {
  width: 30,
  height: 30,
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const rolesData = [
  {
    title: "Architect & Designer",
    text: "Creating thoughtful, climate-responsive spaces and products.",
    icon: (
      <svg {...iconProps}>
        <circle cx="16" cy="9" r="4" />
        <path d="M9 28v-8l-3 3M23 28v-8l3 3M9 20c0-4 3-6 7-6s7 2 7 6v8M12 22h8M16 14v14" />
      </svg>
    ),
  },
  {
    title: "Entrepreneur",
    text: "Building brands and initiatives that create opportunities and impact.",
    icon: (
      <svg {...iconProps}>
        <circle cx="16" cy="17" r="10" />
        <path d="M16 3v4M12 3h8M10 12h12l-6 8zM16 20v5M12 25h8" />
      </svg>
    ),
  },
  {
    title: "Speaker",
    text: "Sharing ideas and sparking conversations that lead to change.",
    icon: (
      <svg {...iconProps}>
        <rect x="12" y="3" width="8" height="15" rx="4" />
        <path d="M7 14c0 5 4 8 9 8s9-3 9-8M16 22v6M11 28h10M3 11c-1 3-1 6 0 9M29 11c1 3 1 6 0 9" />
      </svg>
    ),
  },
  {
    title: "Researcher & Writer",
    text: "Exploring ideas, telling stories and contributing to the built environment and beyond.",
    icon: (
      <svg {...iconProps}>
        <rect x="6" y="4" width="20" height="24" rx="2" />
        <path d="M11 11h10M11 16h10M11 21h6" />
      </svg>
    ),
  },
];



export const Arrow = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const Logo = () => (
  <img src="/logo/main-logo.png" alt="Crystal Kizor" width="40" height="48" />
);

/* ---------- Social icons ---------- */
export const socials = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.4 2H3.6C2.7 2 2 2.7 2 3.6v16.8c0 .9.7 1.6 1.6 1.6h16.8c.9 0 1.6-.7 1.6-1.6V3.6c0-.9-.7-1.6-1.6-1.6zM8 19H5V9.5h3V19zM6.5 8.2a1.7 1.7 0 110-3.4 1.7 1.7 0 010 3.4zM19 19h-3v-4.6c0-1.1 0-2.5-1.5-2.5S12.9 13 12.9 14.3V19h-3V9.5h2.8v1.3c.4-.8 1.4-1.5 2.9-1.5 3 0 3.4 2 3.4 4.6V19z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.3" cy="6.7" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 8.2c-.2-1-1-1.8-2-2C18.2 5.800 12 5.800 12 5.800s-6.200 0-8 .4c-1 .2-1.800 1-2 2C1.600 10 1.600 12 1.600 12s0 2 .4 3.800c.2 1 1 1.800 2 2 1.800.4 8 .4 8 .4s6.200 0 8-.4c1-.2 1.800-1 2-2 .4-1.800.4-3.800.4-3.800s0-2-.4-3.800zM10 15V9l5.200 3L10 15z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:hello@crystalkizor.com",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="1.5" />
        <path d="M3.5 6.500l8.500 7 8.500-7" />
      </svg>
    ),
  },
];


