import { FaStar, FaUser } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const { name, rating, comment, role } = review;

  return (
    <div className="card-glass p-7 flex flex-col gap-5 hover:shadow-lg hover:shadow-[#94a3b8]/10 hover:-translate-y-1 transition-all duration-300">
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar
            key={i}
            size={14}
            className={i < rating ? "text-[#94a3b8]" : "text-[#333]"}
          />
        ))}
      </div>

      <p className="text-gray-300 text-sm leading-relaxed flex-1">
        &ldquo;{comment}&rdquo;
      </p>

      <div className="flex items-center gap-3 pt-4 border-t border-[#222]">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white to-[#94a3b8] flex items-center justify-center flex-shrink-0">
          <FaUser size={14} className="text-black" />
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{name}</p>
          <p className="text-gray-500 text-xs">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
