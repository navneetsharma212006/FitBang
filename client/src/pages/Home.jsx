import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  MdFitnessCenter,
  MdDirectionsRun,
  MdRestaurant,
  MdPeople,
} from "react-icons/md";
import {
  FaArrowRight,
  FaDumbbell,
  FaCheckCircle,
  FaStar,
  FaTrophy,
  FaFireAlt,
  FaHeartbeat,
  FaPlay,
} from "react-icons/fa";
import { GiMuscleUp, GiWeightLiftingUp } from "react-icons/gi";
import SectionTitle from "../components/SectionTitle";
import MembershipCard from "../components/MembershipCard";
import ReviewCard from "../components/ReviewCard";
import API from "../utils/api";

const stats = [
  { value: "5000+", label: "Active Members" },
  { value: "50+", label: "Expert Trainers" },
  { value: "200+", label: "Classes Monthly" },
  { value: "12+", label: "Years of Excellence" },
];

const features = [
  {
    icon: GiWeightLiftingUp,
    title: "Strength Training",
    desc: "Build power and muscle with our Olympic-grade free weights and cable machines designed for all levels.",
  },
  {
    icon: MdDirectionsRun,
    title: "Cardio Zone",
    desc: "Premium treadmills, ellipticals, and bikes with built-in entertainment to make every session enjoyable.",
  },
  {
    icon: MdFitnessCenter,
    title: "Personal Training",
    desc: "One-on-one sessions with certified trainers who create personalized plans tailored to your goals.",
  },
  {
    icon: MdRestaurant,
    title: "Nutrition Guidance",
    desc: "Expert nutritionists craft meal plans that complement your training and accelerate your results.",
  },
  {
    icon: MdPeople,
    title: "Group Classes",
    desc: "From HIIT to yoga, our energizing group classes keep you motivated and help you build community.",
  },
  {
    icon: GiMuscleUp,
    title: "Recovery Suite",
    desc: "State-of-the-art sauna, steam room, and massage therapy to speed up recovery and reduce injury risk.",
  },
];

const whyUs = [
  "Certified world-class personal trainers",
  "Open 24/7 for premium members",
  "State-of-the-art equipment",
  "Customized fitness and nutrition plans",
  "Hygienic locker and shower facilities",
  "Community events and challenges",
];

const trainers = [
  {
    name: "Raj Malhotra",
    role: "Strength & Conditioning",
    exp: "4 yrs",
    img: "/images/trainer_raj.png",
  },
  {
    name: "Priya Nair",
    role: "Yoga & Flexibility",
    exp: "4 yrs",
    img: "/images/trainer_priya.png",
  },
  {
    name: "Aryan Kapoor",
    role: "HIIT & Functional Fitness",
    exp: "5 yrs",
    img: "/images/trainer_aryan.png",
  },
  {
    name: "Deepa Sharma",
    role: "Nutrition & Wellness",
    exp: "3 yrs",
    img: "/images/trainer_deepa.png",
  },
];

const Home = () => {
  const [memberships, setMemberships] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    API.get("/memberships")
      .then((res) => setMemberships(res.data.data))
      .catch(() => {});
    API.get("/reviews")
      .then((res) => setReviews(res.data.data.slice(0, 3)))
      .catch(() => {});
  }, []);

  return (
    <div className="bg-black">

      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero_athlete.png"
            alt="FitBang athlete training"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        </div>

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 pt-24 pb-16 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-white/20 px-4 py-2 rounded-full mb-8">
              <div className="w-2 h-2 rounded-full bg-[#94a3b8]" />
              <span className="text-white text-xs tracking-[3px] uppercase font-semibold">
                Established in New Delhi
              </span>
            </div>

            <h1 className="font-bebas text-6xl md:text-8xl lg:text-[110px] leading-none tracking-wide text-white mb-6 text-shadow">
              ELEVATE YOUR
              <span className="block gradient-text">ATHLETIC PERFORMANCE</span>
            </h1>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              FitBang is more than a gym. It is where champions are built. Experience elite training, world-class coaches, and a community that pushes you beyond your limits.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/membership" className="btn-primary flex items-center gap-2">
                Start Your Journey <FaArrowRight size={12} />
              </Link>
              <Link to="/about" className="btn-outline flex items-center gap-2">
                <FaPlay size={10} /> Our Story
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-10 border-t border-white/10">
              {stats.map((stat, i) => (
                <div key={i}>
                  <p className="font-bebas text-4xl md:text-5xl gradient-text">{stat.value}</p>
                  <p className="text-gray-400 text-xs tracking-widest uppercase mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-[#94a3b8]" />
        </div>
      </section>

      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="/images/gym_interior.png"
          alt="FitBang gym interior"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-black" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <p className="text-[#94a3b8] text-xs tracking-[5px] uppercase font-semibold mb-3">
              World-Class Facilities
            </p>
            <h2 className="font-bebas text-4xl md:text-6xl text-white tracking-wide">
              STATE-OF-THE-ART EQUIPMENT
            </h2>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label="What We Offer"
            title="WORLD-CLASS FACILITIES"
            subtitle="Everything you need to achieve your fitness goals under one roof — equipped with the best technology and expert guidance."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={i}
                  className="card-glass p-7 group hover:shadow-lg hover:shadow-[#94a3b8]/10 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[#94a3b8]/10 border border-[#94a3b8]/20 rounded-sm flex items-center justify-center mb-5 group-hover:bg-[#94a3b8]/20 group-hover:border-[#94a3b8]/40 transition-all duration-300">
                    <Icon className="text-[#94a3b8] text-2xl" />
                  </div>
                  <h3 className="font-bebas text-xl tracking-widest text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle
                label="Why FitBang"
                title="THE TRAINING SYSTEM"
                subtitle="We do not just offer memberships. We offer transformation. Here is why thousands trust FitBang."
                center={false}
              />
              <ul className="space-y-4 mt-8">
                {whyUs.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-300">
                    <FaCheckCircle className="text-[#94a3b8] flex-shrink-0" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="btn-primary mt-10 inline-flex items-center gap-2">
                Discover Our Story <FaArrowRight size={12} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden rounded-sm group">
                <img
                  src="/images/trainer_raj.png"
                  alt="Trainer Raj Malhotra"
                  className="w-full h-56 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <p className="text-white font-semibold text-xs">Raj Malhotra</p>
                  <p className="text-[#94a3b8] text-xs">Strength Coach</p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-sm mt-8 group">
                <img
                  src="/images/trainer_priya.png"
                  alt="Trainer Priya Nair"
                  className="w-full h-56 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <p className="text-white font-semibold text-xs">Priya Nair</p>
                  <p className="text-[#94a3b8] text-xs">Yoga Coach</p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-sm group">
                <img
                  src="/images/trainer_aryan.png"
                  alt="Trainer Aryan Kapoor"
                  className="w-full h-56 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <p className="text-white font-semibold text-xs">Aryan Kapoor</p>
                  <p className="text-[#94a3b8] text-xs">HIIT Specialist</p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-sm mt-8 group">
                <img
                  src="/images/trainer_deepa.png"
                  alt="Trainer Deepa Sharma"
                  className="w-full h-56 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <p className="text-white font-semibold text-xs">Deepa Sharma</p>
                  <p className="text-[#94a3b8] text-xs">Nutritionist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label="Our Experts"
            title="MEET THE COACHES"
            subtitle="Our elite team of certified professionals brings decades of combined experience to guide your transformation."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainers.map((trainer, i) => (
              <div
                key={i}
                className="card-glass overflow-hidden group hover:-translate-y-3 transition-all duration-400 hover:shadow-xl hover:shadow-[#94a3b8]/20"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={trainer.img}
                    alt={trainer.name}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute top-3 right-3 bg-[#94a3b8] text-black text-xs font-semibold px-2 py-1 tracking-wider">
                    {trainer.exp}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bebas text-lg tracking-widest text-white">{trainer.name}</h3>
                  <p className="text-[#94a3b8] text-xs tracking-wider mt-1">{trainer.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/about" className="btn-outline inline-flex items-center gap-2">
              Meet All Trainers <FaArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {memberships.length > 0 && (
        <section className="section-padding bg-black">
          <div className="max-w-7xl mx-auto">
            <SectionTitle
              label="Pricing Plans"
              title="CHOOSE YOUR PLAN"
              subtitle="Flexible membership options for every goal and budget. No hidden fees, no long-term lock-ins."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {memberships.map((plan) => (
                <MembershipCard key={plan._id} plan={plan} />
              ))}
            </div>
          </div>
        </section>
      )}

      {reviews.length > 0 && (
        <section className="section-padding bg-[#050505]">
          <div className="max-w-7xl mx-auto">
            <SectionTitle
              label="Testimonials"
              title="WHAT MEMBERS SAY"
              subtitle="Real stories from real members who transformed their lives at FitBang."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <ReviewCard key={review._id} review={review} />
              ))}
            </div>
            <div className="text-center mt-10">
              <Link to="/reviews" className="btn-outline inline-flex items-center gap-2">
                Read All Reviews <FaArrowRight size={12} />
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <img
          src="/images/hero_athlete.png"
          alt="FitBang athlete"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
            <div className="max-w-xl">
              <p className="text-[#94a3b8] text-xs tracking-[5px] uppercase font-semibold mb-4">
                Transform Today
              </p>
              <h2 className="font-bebas text-5xl md:text-7xl text-white tracking-wide leading-tight mb-6">
                UNCOMPROMISING TRAINING STANDARDS
              </h2>
              <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed">
                Every champion was once someone who refused to give up. At FitBang, we give you everything you need to push past your limits.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/membership" className="btn-primary flex items-center gap-2">
                  Join Today <FaArrowRight size={12} />
                </Link>
                <Link to="/contact" className="btn-outline">
                  Talk to Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#334155] to-[#0f172a]" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="font-bebas text-5xl md:text-7xl text-white tracking-wide leading-tight mb-6">
            READY TO TRANSFORM YOUR BODY?
          </h2>
          <p className="text-white/80 text-lg mb-10">
            Join thousands of members who already made the decision that changed their lives. Your first step starts here.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/membership"
              className="bg-black text-white font-semibold px-10 py-4 tracking-widest uppercase text-sm hover:bg-white hover:text-black transition-all duration-300 rounded-sm"
            >
              View Plans
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white font-semibold px-10 py-4 tracking-widest uppercase text-sm hover:bg-white hover:text-black transition-all duration-300 rounded-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
