import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { MdFitnessCenter } from "react-icons/md";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Membership", path: "/membership" },
  { label: "Reviews", path: "/reviews" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const getLinkClass = ({ isActive }) =>
    `nav-link ${isActive ? "active" : ""}`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/90 backdrop-blur-xl border-b border-[#222222] shadow-lg shadow-black/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 group"
            onClick={() => setMenuOpen(false)}
          >
            <div className="w-9 h-9 bg-gradient-to-br from-white to-[#94a3b8] rounded-sm flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[#94a3b8]/20 transition-all duration-300">
              <MdFitnessCenter className="text-black text-xl" />
            </div>
            <span className="font-bebas text-2xl md:text-3xl tracking-widest text-white group-hover:text-[#94a3b8] transition-colors duration-300">
              FIT<span className="text-[#94a3b8]">BANG</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={getLinkClass}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to="/membership"
              className="hidden md:inline-flex btn-primary text-xs"
            >
              Join Now
            </Link>
            <button
              className="lg:hidden text-white text-2xl p-2 hover:text-[#94a3b8] transition-colors duration-300"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              {menuOpen ? <RiCloseLine /> : <RiMenuLine />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />

        <div
          className={`absolute top-0 right-0 h-full w-72 bg-[#0a0a0a] border-l border-[#222222] flex flex-col transition-transform duration-500 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 border-b border-[#222222] flex items-center justify-between">
            <span className="font-bebas text-2xl tracking-widest">
              FIT<span className="text-[#94a3b8]">BANG</span>
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-gray-400 hover:text-white text-2xl transition-colors"
            >
              <RiCloseLine />
            </button>
          </div>

          <nav className="flex flex-col p-6 gap-2 flex-1">
            {navLinks.map((link, i) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 font-medium text-sm tracking-widest uppercase transition-all duration-300 border-l-2 ${
                    isActive
                      ? "text-white border-[#94a3b8] bg-[#94a3b8]/10"
                      : "text-gray-400 border-transparent hover:text-white hover:border-[#94a3b8] hover:bg-white/5"
                  }`
                }
                style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="p-6 border-t border-[#222222]">
            <Link
              to="/membership"
              className="btn-primary w-full text-center block"
              onClick={() => setMenuOpen(false)}
            >
              Join Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
