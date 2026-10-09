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
  <svg width="28" height="34" viewBox="0 0 28 34" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
    <path d="M9 4C3 8 3 26 9 30" />
    <path d="M13 3v28" />
    <path d="M25 4L13 18l12 13" />
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