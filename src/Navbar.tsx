import { useState, useEffect } from "react";
import "./Navbar.css";
import { Arrow } from "./HeroComponents";

const links = [
  { label: "Home", href: "/", subLinks: null },
  { label: "About", href: "#about", subLinks: [
    { label: "Bio", href: "#bio" },
    { label: "Approach", href: "#approach" },
    { label: "Press", href: "#press" },
  ]},
  { label: "Brands & Initiatives", href: "#brands", subLinks: [
    { label: "Studio Coka", href: "#studio-coka" },
    { label: "Ako", href: "#ako" },
    { label: "Elevated", href: "#elevated" },
    { label: "TEA", href: "#tea" },
    { label: "Speaking", href: "#speaking" },
    { label: "Alive", href: "#alive" },
    { label: "Kizor", href: "#kizor" },
  ]},
  { label: "Speaking", href: "#speaking", subLinks: [
    { label: "Talks", href: "#talks" },
    { label: "Panels", href: "#panels" },
    { label: "Bookings", href: "#bookings" },
  ]},
  { label: "Ideas & Writing", href: "#writing", subLinks: [
    { label: "Articles", href: "#articles" },
    { label: "Research", href: "#research" },
    { label: "Essays", href: "#essays" },
  ]},
  { label: "Contact", href: "#contact", subLinks: [
    { label: "Work With Me", href: "#work" },
    { label: "Press Inquiries", href: "#press-inquiries" },
    { label: "General", href: "#general" },
  ]},
];

const Logo = () => (
  <svg width="32" height="38" viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20 3 C30 7, 34 14, 34 22 C34 32, 26 40, 20 45 C14 40, 6 32, 6 22 C6 14, 10 7, 20 3 Z"
      stroke="currentColor"
      strokeWidth="1.4"
      fill="none"
      strokeLinejoin="round"
    />
    <path
      d="M20 6 C28.5 9.5, 31.5 15, 31.5 22 C31.5 30, 25 36.5, 20 40.5 C15 36.5, 8.5 30, 8.5 22 C8.5 15, 11.5 9.5, 20 6 Z"
      stroke="currentColor"
      strokeWidth="0.7"
      fill="none"
      opacity="0.55"
      strokeLinejoin="round"
    />
    <line x1="11" y1="21" x2="29" y2="21" stroke="currentColor" strokeWidth="0.7" opacity="0.5" />
    <g fill="currentColor">
      <path d="M27 12.5 C27 9.5 25 7.8 22 7.8 C19.5 7.8 18 9.2 18 11 L20.5 11.2 C20.7 10.4 21.4 10 22 10 C22.8 10 23.3 10.6 23.3 11.2 C23.3 12.1 22.4 12.4 21 12.6 L21 14.4 C22.6 14.6 23.6 15.2 23.6 16.4 C23.6 17.6 22.8 18.2 22 18.2 C21.2 18.2 20.6 17.8 20.5 17 L18 17.2 C18.3 19.4 19.8 20.6 22 20.6 C24.3 20.6 25.8 19.2 25.8 17 C25.8 15 24.5 13.6 22.5 13 L25.5 13 Z" />
      <path d="M14.5 24 L14.5 37 L12.5 37 L12.5 24 L7.5 37 L5.5 37 L11.5 25 L6 24 L8 24 L12.5 28 L12.5 24 Z" />
      <path d="M14.5 24 L21.5 31 L24 33.5 L25.5 31.5 L19.5 27 L14.5 24 Z" />
    </g>
    <circle cx="20" cy="43" r="1.6" fill="currentColor" opacity="0.6" />
  </svg>
);

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [mobileOpenSubmenu, setMobileOpenSubmenu] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY <= 0) {
        setNavVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide navbar
        setNavVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show navbar
        setNavVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof links[0]) => {
    if (item.subLinks && isMobile) {
      e.preventDefault();
      if (mobileOpenSubmenu === item.label) {
        // Second click - navigate to the parent href
        window.location.href = item.href;
      } else {
        // First click - open submenu
        setMobileOpenSubmenu(item.label);
      }
    } else if (!item.subLinks) {
      setActive(item.label);
      setOpen(false);
    }
    // For desktop with subLinks: allow normal navigation
  };

  const handleSubLinkClick = (itemLabel: string) => {
    setActive(itemLabel);
    setOpen(false);
    setHovered(null);
    setMobileOpenSubmenu(null);
  };

  return (
    <header className={`nav-wrap ${navVisible ? "nav-visible" : "nav-hidden"}`}>
      <nav className="nav">
        <a href="/" className="nav__brand">
          <Logo />
          <span>CRYSTAL KIZOR</span>
        </a>

        <ul className={`nav__links ${open ? "is-open" : ""}`}>
          {links.map((item) => (
            <li key={item.label} className="nav__item">
              <a
                href={item.href}
                className={`nav__link ${active === item.label ? "is-active" : ""}`}
                onClick={(e) => handleLinkClick(e, item)}
                onMouseEnter={() => item.subLinks && setHovered(item.label)}
                onMouseLeave={() => item.subLinks && setHovered(null)}
              >
                {item.label}
              </a>
              {item.subLinks && (
                <ul className={`nav__submenu ${(hovered === item.label || mobileOpenSubmenu === item.label) ? "is-open" : ""}`}>
                  {item.subLinks.map((sub) => (
                    <li key={sub.label}>
                      <a
                        href={sub.href}
                        className="nav__sublink"
                        onClick={() => handleSubLinkClick(item.label)}
                      >
                        {sub.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li className="nav__cta-mobile">
            <a href="#" className="nav__cta">
              Get in Touch <Arrow />
            </a>
          </li>
        </ul>

        <a href="#" className="nav__cta nav__cta-desktop">
          Get in Touch <Arrow />
        </a>

        <button
          className="nav__toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
}