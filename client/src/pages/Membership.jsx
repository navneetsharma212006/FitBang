import { useEffect, useState } from "react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import MembershipCard from "../components/MembershipCard";
import API from "../utils/api";

const faqs = [
  {
    q: "Can I cancel my membership anytime?",
    a: "Yes. FitBang does not believe in lock-ins. You can cancel any plan with a 30-day notice period.",
  },
  {
    q: "Is there a joining fee?",
    a: "No hidden costs. The price you see is the price you pay. No registration or enrollment fees.",
  },
  {
    q: "Can I freeze my membership?",
    a: "Absolutely. You can freeze your membership for up to 2 months per year for travel or medical reasons.",
  },
  {
    q: "Are there family discounts available?",
    a: "Yes! We offer 15% off for every additional family member who joins under the same plan.",
  },
  {
    q: "What is included in the trial period?",
    a: "We offer a 7-day free trial for all new members with full access to the gym floor and group classes.",
  },
];

const Membership = () => {
  const [memberships, setMemberships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    API.get("/memberships")
      .then((res) => {
        setMemberships(res.data.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load membership plans. Please try again.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-black pt-20">
      <section className="relative py-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-black" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#94a3b8]/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto text-center">
          <span className="text-[#94a3b8] font-semibold text-xs tracking-[4px] uppercase block mb-4">
            Pricing Plans
          </span>
          <h1 className="font-bebas text-6xl md:text-8xl text-white leading-none tracking-wide mb-6">
            INVEST IN
            <span className="block gradient-text">YOUR FITNESS</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Transparent pricing. No hidden fees. No long-term commitments. Just pure results.
          </p>
        </div>
      </section>

      <section className="section-padding bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label="Choose Your Plan"
            title="MEMBERSHIP OPTIONS"
            subtitle="Whether you are just starting out or a seasoned athlete, we have the perfect plan for you."
          />

          {loading && (
            <div className="flex items-center justify-center py-20">
              <div className="w-10 h-10 border-2 border-[#94a3b8] border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {error && (
            <div className="text-center py-10">
              <p className="text-red-400 mb-4">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="btn-outline"
              >
                Retry
              </button>
            </div>
          )}

          {!loading && !error && memberships.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mt-8">
              {memberships.map((plan) => (
                <MembershipCard key={plan._id} plan={plan} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section-padding bg-black">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            label="Compare Plans"
            title="WHAT'S INCLUDED"
            subtitle="A clear breakdown of features across all membership tiers."
          />
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#222]">
                  <th className="text-left py-4 pr-6 text-gray-400 font-medium tracking-wide w-1/2">
                    Feature
                  </th>
                  {["Basic", "Standard", "Premium"].map((plan) => (
                    <th key={plan} className="text-center py-4 px-4 font-bebas text-lg tracking-widest text-white">
                      {plan}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#111]">
                {[
                  { feature: "Gym Floor Access", basic: true, standard: true, premium: true },
                  { feature: "Cardio Equipment", basic: true, standard: true, premium: true },
                  { feature: "Locker Room", basic: true, standard: true, premium: true },
                  { feature: "Group Classes", basic: "2/month", standard: "Unlimited", premium: "Unlimited" },
                  { feature: "Personal Training", basic: false, standard: "1/month", premium: "4/month" },
                  { feature: "Nutrition Plan", basic: false, standard: "Consultation", premium: "Custom Plan" },
                  { feature: "Sauna Access", basic: false, standard: true, premium: true },
                  { feature: "Guest Passes", basic: false, standard: "2/month", premium: "Unlimited" },
                  { feature: "24/7 Access", basic: false, standard: false, premium: true },
                  { feature: "Priority Booking", basic: false, standard: false, premium: true },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-[#0a0a0a] transition-colors">
                    <td className="py-4 pr-6 text-gray-300">{row.feature}</td>
                    {["basic", "standard", "premium"].map((plan) => (
                      <td key={plan} className="text-center py-4 px-4">
                        {row[plan] === true ? (
                          <FaCheckCircle className="text-[#94a3b8] mx-auto" size={16} />
                        ) : row[plan] === false ? (
                          <span className="text-[#333] text-lg">—</span>
                        ) : (
                          <span className="text-gray-300 text-xs">{row[plan]}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#050505]">
        <div className="max-w-3xl mx-auto">
          <SectionTitle
            label="FAQs"
            title="FREQUENTLY ASKED QUESTIONS"
            subtitle="Got questions? We have answers."
          />
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="card-glass overflow-hidden">
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-white/5 transition-colors duration-300"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-medium text-white text-sm">{faq.q}</span>
                  <span
                    className={`text-[#94a3b8] transition-transform duration-300 flex-shrink-0 text-xl font-bold ${
                      openFaq === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === i ? "max-h-40 pb-5" : "max-h-0"
                  }`}
                >
                  <p className="px-6 text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-black text-center">
        <h2 className="font-bebas text-5xl md:text-6xl text-white tracking-wide mb-4">
          STILL HAVE QUESTIONS?
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          Our team is happy to help you find the right plan for your goals.
        </p>
        <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
          Get in Touch <FaArrowRight size={12} />
        </Link>
      </section>
    </div>
  );
};

export default Membership;
