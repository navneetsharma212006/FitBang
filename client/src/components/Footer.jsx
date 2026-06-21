import { Link } from "react-router-dom";
import { MdFitnessCenter } from "react-icons/md";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-5 group">
              <div className="w-9 h-9 bg-gradient-to-br from-white to-[#94a3b8] rounded-sm flex items-center justify-center">
                <MdFitnessCenter className="text-black text-xl" />
              </div>
              <span className="font-bebas text-2xl tracking-widest text-white">
                FIT<span className="text-[#94a3b8]">BANG</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Where strength meets dedication. FitBang is your premium destination for total fitness transformation.
            </p>
            <div className="flex gap-3">
              {[
                { icon: FaInstagram, href: "#" },
                { icon: FaFacebookF, href: "#" },
                { icon: FaTwitter, href: "#" },
                { icon: FaYoutube, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 border border-[#333] flex items-center justify-center text-gray-500 hover:text-white hover:border-[#94a3b8] hover:bg-[#94a3b8]/10 transition-all duration-300 rounded-sm"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bebas text-lg tracking-widest text-white mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Membership", path: "/membership" },
                { label: "Reviews", path: "/reviews" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-500 text-sm hover:text-[#94a3b8] transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#94a3b8] inline-block" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bebas text-lg tracking-widest text-white mb-5">
              Opening Hours
            </h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="text-white">5:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-white">6:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white">7:00 AM - 8:00 PM</span>
              </li>
              <li className="mt-4 pt-4 border-t border-[#222]">
                <span className="text-[#94a3b8] font-medium">Premium Members:</span>
                <p className="mt-1">24/7 Access Available</p>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bebas text-lg tracking-widest text-white mb-5">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-500">
                <FaMapMarkerAlt className="text-[#94a3b8] mt-0.5 flex-shrink-0" />
                <span>42 Fitness Boulevard, Sector 18, New Delhi, India - 110001</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-500">
                <FaPhone className="text-[#94a3b8] flex-shrink-0" />
                <a href="tel:+911234567890" className="hover:text-white transition-colors">
                  +91 12345 67890
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-500">
                <FaEnvelope className="text-[#94a3b8] flex-shrink-0" />
                <a href="mailto:info@fitbang.com" className="hover:text-white transition-colors">
                  info@fitbang.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-[#1a1a1a] flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-sm">
            &copy; {year} FitBang. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm">
            Built for champions. Designed for champions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
