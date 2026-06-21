import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";
import API from "../utils/api";

const contactInfo = [
  {
    icon: FaMapMarkerAlt,
    title: "Our Location",
    lines: ["42 Fitness Boulevard, Sector 18,", "New Delhi, India - 110001"],
  },
  {
    icon: FaPhone,
    title: "Phone Number",
    lines: ["+91 12345 67890", "+91 98765 43210"],
  },
  {
    icon: FaEnvelope,
    title: "Email Address",
    lines: ["info@fitbang.com", "support@fitbang.com"],
  },
  {
    icon: FaClock,
    title: "Working Hours",
    lines: ["Mon-Fri: 5:00 AM - 11:00 PM", "Sat-Sun: 6:00 AM - 10:00 PM"],
  },
];

const initialForm = { fullName: "", email: "", phone: "", message: "" };

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullName, email, phone, message } = form;

    if (!fullName.trim() || !email.trim() || !phone.trim() || !message.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await API.post("/contact", form);
      setSuccess(true);
      setForm(initialForm);
    } catch (err) {
      setError(
        err?.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black pt-20">
      <section className="relative py-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-black" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#94a3b8]/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto text-center">
          <span className="text-[#94a3b8] font-semibold text-xs tracking-[4px] uppercase block mb-4">
            Get in Touch
          </span>
          <h1 className="font-bebas text-6xl md:text-8xl text-white leading-none tracking-wide mb-6">
            LET'S START YOUR
            <span className="block gradient-text">JOURNEY TOGETHER</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Have questions? Want to learn more? Reach out and our team will get back to you within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 bg-[#0a0a0a] border-y border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="card-glass p-6 hover:border-[#94a3b8]/50 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-11 h-11 bg-[#94a3b8]/10 border border-[#94a3b8]/20 rounded-sm flex items-center justify-center mb-4">
                  <Icon className="text-[#94a3b8]" size={18} />
                </div>
                <h4 className="font-bebas text-lg tracking-widest text-white mb-2">{item.title}</h4>
                {item.lines.map((line, j) => (
                  <p key={j} className="text-gray-500 text-sm">{line}</p>
                ))}
              </div>
            );
          })}
        </div>
      </section>

      <section className="section-padding bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionTitle
                label="Send a Message"
                title="REACH OUT TO US"
                subtitle="Fill in the form below and we will respond within 24 hours."
                center={false}
              />

              {success ? (
                <div className="card-glass p-10 text-center border-[#94a3b8]/50">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#94a3b8] to-[#64748b] rounded-full flex items-center justify-center mx-auto mb-5">
                    <FaCheckCircle className="text-white text-3xl" />
                  </div>
                  <h3 className="font-bebas text-2xl tracking-widest text-white mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    Thank you for reaching out. Our team will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="btn-primary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 text-red-400 text-sm px-4 py-3 rounded-sm">
                      <FaExclamationCircle className="flex-shrink-0" />
                      {error}
                    </div>
                  )}

                  <div>
                    <label className="block text-gray-400 text-xs tracking-widest uppercase mb-2 font-medium">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-[#111] border border-[#222] text-white placeholder-gray-600 px-5 py-4 text-sm rounded-sm focus:outline-none focus:border-[#94a3b8] transition-colors duration-300"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-400 text-xs tracking-widest uppercase mb-2 font-medium">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full bg-[#111] border border-[#222] text-white placeholder-gray-600 px-5 py-4 text-sm rounded-sm focus:outline-none focus:border-[#94a3b8] transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-xs tracking-widest uppercase mb-2 font-medium">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full bg-[#111] border border-[#222] text-white placeholder-gray-600 px-5 py-4 text-sm rounded-sm focus:outline-none focus:border-[#94a3b8] transition-colors duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-400 text-xs tracking-widest uppercase mb-2 font-medium">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Tell us how we can help you..."
                      className="w-full bg-[#111] border border-[#222] text-white placeholder-gray-600 px-5 py-4 text-sm rounded-sm focus:outline-none focus:border-[#94a3b8] transition-colors duration-300 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 text-black"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-8">
              <div className="card-glass overflow-hidden">
                <div className="h-72 bg-gradient-to-br from-[#111] to-[#0a0a0a] flex items-center justify-center relative">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#94a3b8]/10 border border-[#94a3b8]/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaMapMarkerAlt className="text-[#94a3b8] text-2xl" />
                    </div>
                    <p className="font-bebas text-xl tracking-widest text-white mb-1">FitBang Gym</p>
                    <p className="text-gray-500 text-sm">42 Fitness Boulevard, Sector 18</p>
                    <p className="text-gray-500 text-sm">New Delhi, India - 110001</p>
                    <a
                      href="#"
                      className="inline-block mt-4 text-[#94a3b8] text-xs tracking-widest uppercase font-semibold hover:underline"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                  <div className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: "linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                </div>
              </div>

              <div className="card-glass p-7">
                <h4 className="font-bebas text-2xl tracking-widest text-white mb-6 flex items-center gap-3">
                  <FaClock className="text-[#94a3b8]" /> Opening Hours
                </h4>
                <div className="space-y-3 text-sm">
                  {[
                    { day: "Monday - Friday", hours: "5:00 AM - 11:00 PM" },
                    { day: "Saturday", hours: "6:00 AM - 10:00 PM" },
                    { day: "Sunday", hours: "7:00 AM - 8:00 PM" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center py-2 border-b border-[#1a1a1a] last:border-0"
                    >
                      <span className="text-gray-400">{item.day}</span>
                      <span className="text-white font-medium">{item.hours}</span>
                    </div>
                  ))}
                  <div className="mt-4 pt-4 border-t border-[#222] bg-[#94a3b8]/5 -mx-7 px-7 py-4 -mb-7 rounded-b-sm">
                    <p className="text-[#94a3b8] text-xs font-semibold tracking-wider uppercase">
                      * Holiday timings may vary
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
