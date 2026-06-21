const SectionTitle = ({ label, title, subtitle, center = true }) => {
  return (
    <div className={`mb-14 ${center ? "text-center" : ""}`}>
      {label && (
        <span className="text-[#94a3b8] font-semibold text-xs tracking-[4px] uppercase block mb-3">
          {label}
        </span>
      )}
      <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl text-white tracking-wide leading-tight">
        {title}
      </h2>
      {center ? (
        <div className="divider mt-4 mb-0" />
      ) : (
        <div className="divider-left mt-4 mb-0" />
      )}
      {subtitle && (
        <p className="text-gray-400 text-base md:text-lg mt-5 max-w-2xl leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
