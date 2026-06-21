import { FaCheck, FaStar, FaBolt } from "react-icons/fa";
import { Link } from "react-router-dom";

const MembershipCard = ({ plan }) => {
  const { name, price, duration, features, isPopular, badge } = plan;

  return (
    <div
      className={`relative card-glass p-8 flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
        isPopular
          ? "border-[#94a3b8] shadow-lg shadow-[#94a3b8]/5 hover:shadow-[#94a3b8]/10"
          : "hover:shadow-white/5"
      }`}
    >
      {badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-to-r from-white to-[#94a3b8] text-black text-xs font-bold px-5 py-1.5 rounded-full tracking-widest uppercase flex items-center gap-1.5">
            {isPopular ? <FaStar size={10} /> : <FaBolt size={10} />}
            {badge}
          </span>
        </div>
      )}

      <div className="mb-6 mt-2">
        <h3 className="font-bebas text-2xl tracking-widest text-gray-400 mb-2">
          {name}
        </h3>
        <div className="flex items-end gap-2">
          <span className="font-bebas text-5xl text-white gradient-text">
            &#8377;{price.toLocaleString("en-IN")}
          </span>
          <span className="text-gray-500 text-sm mb-2">/ {duration}</span>
        </div>
      </div>

      <div
        className={`w-full h-px mb-6 ${
          isPopular
            ? "bg-gradient-to-r from-transparent via-[#94a3b8]/40 to-transparent"
            : "bg-[#222]"
        }`}
      />

      <ul className="space-y-3 flex-1 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
            <span
              className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                isPopular
                  ? "bg-[#94a3b8]/20 text-[#94a3b8]"
                  : "bg-white/10 text-white"
              }`}
            >
              <FaCheck size={8} />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <Link
        to="/contact"
        className={`w-full text-center py-3 font-semibold text-sm tracking-widest uppercase transition-all duration-300 rounded-sm block ${
          isPopular
            ? "bg-gradient-to-r from-white to-[#94a3b8] text-black hover:shadow-lg hover:shadow-[#94a3b8]/20 hover:scale-[1.02]"
            : "border border-[#333] text-white hover:border-white hover:bg-white hover:text-black"
        }`}
      >
        Get Started
      </Link>
    </div>
  );
};

export default MembershipCard;
