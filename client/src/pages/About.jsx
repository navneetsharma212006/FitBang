import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaTrophy,
  FaUsers,
  FaHeartbeat,
} from "react-icons/fa";
import { GiMuscleUp, GiWeightLiftingUp } from "react-icons/gi";
import { MdFitnessCenter, MdStar } from "react-icons/md";
import SectionTitle from "../components/SectionTitle";

const timeline = [
  {
    year: "2012",
    title: "The Beginning",
    desc: "FitBang was founded with a simple mission: make elite fitness accessible to everyone in New Delhi.",
  },
  {
    year: "2015",
    title: "First Expansion",
    desc: "Doubled our space and introduced certified personal training programs, attracting over 1000 members.",
  },
  {
    year: "2018",
    title: "Award Recognition",
    desc: "Named 'Best Gym in NCR' for the first time. Launched our signature nutrition consultation service.",
  },
  {
    year: "2021",
    title: "Digital & Recovery",
    desc: "Launched app-based class booking, introduced the Recovery Suite — sauna, steam, and massage therapy.",
  },
  {
    year: "2024",
    title: "National Champions",
    desc: "5000+ active members. Won the National Fitness Business Award. Launched 24/7 premium access.",
  },
];

const values = [
  {
    icon: GiWeightLiftingUp,
    title: "Strength First",
    desc: "We believe physical strength builds mental resilience. Everything we do supports this philosophy.",
  },
  {
    icon: FaUsers,
    title: "Community Driven",
    desc: "FitBang is a family. We grow together, push each other, and celebrate every milestone as one.",
  },
  {
    icon: FaHeartbeat,
    title: "Holistic Wellness",
    desc: "True fitness goes beyond the gym floor. We integrate nutrition, recovery, and mental health.",
  },
  {
    icon: MdStar,
    title: "Excellence Always",
    desc: "From cleanliness to coaching quality — we refuse to settle for anything less than the best.",
  },
];

const trainers = [
  {
    name: "Raj Malhotra",
    role: "Head of Strength & Conditioning",
    exp: "4 yrs",
    certs: "NSCA-CSCS, ACE Certified",
    bio: "Former national-level powerlifter. Raj has helped over 300 clients reach competition-ready physiques.",
    img: "/images/trainer_raj.png",
  },
  {
    name: "Priya Nair",
    role: "Yoga & Flexibility Coach",
    exp: "4 yrs",
    certs: "RYT-500, Mobility Specialist",
    bio: "Priya blends traditional yoga with modern movement science to help members restore and build flexibility.",
    img: "/images/trainer_priya.png",
  },
  {
    name: "Aryan Kapoor",
    role: "HIIT & Functional Fitness",
    exp: "5 yrs",
    certs: "CrossFit L2, NASM CPT",
    bio: "Aryan's high-intensity sessions are legendary. He specializes in athletic performance and fat loss.",
    img: "/images/trainer_aryan.png",
  },
  {
    name: "Deepa Sharma",
    role: "Nutrition & Wellness Expert",
    exp: "3 yrs",
    certs: "RD, Sports Nutrition Certified",
    bio: "Deepa crafts science-backed nutrition plans that complement every training style and lifestyle.",
    img: "/images/trainer_deepa.png",
  },
];

const achievements = [
  { icon: FaTrophy, value: "5+", label: "National Awards" },
  { icon: FaUsers, value: "5000+", label: "Happy Members" },
  { icon: GiMuscleUp, value: "50+", label: "Expert Trainers" },
  { icon: MdFitnessCenter, value: "200+", label: "Monthly Classes" },
];

const About = () => {
  return (
    <div className="bg-black pt-20">
      <section className="relative py-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/gym_interior.png"
            alt="FitBang gym interior"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-[#94a3b8] font-semibold text-xs tracking-[4px] uppercase block mb-4">
              Our Story
            </span>
            <h1 className="font-bebas text-6xl md:text-8xl text-white leading-none tracking-wide mb-6">
              THE STANDARD OF
              <span className="block gradient-text">FITNESS</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Founded in 2012, FitBang has grown from a local gym into New Delhi's most respected fitness destination. Our story is built on sweat, dedication, and an uncompromising commitment to your results.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 bg-[#0a0a0a] border-y border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-white to-[#94a3b8] rounded-sm flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-black text-2xl" />
                </div>
                <p className="font-bebas text-4xl gradient-text">{item.value}</p>
                <p className="text-gray-500 text-xs tracking-widest uppercase mt-1">{item.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section-padding bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-glass p-10 hover:border-[#94a3b8]/50 transition-all duration-300">
              <div className="w-12 h-12 bg-[#94a3b8] rounded-sm flex items-center justify-center mb-6">
                <FaArrowRight className="text-black text-xl" />
              </div>
              <h2 className="font-bebas text-3xl tracking-widest text-white mb-4">Our Mission</h2>
              <div className="w-10 h-0.5 bg-gradient-to-r from-white to-[#94a3b8] mb-5" />
              <p className="text-gray-400 leading-relaxed">
                To empower every individual who walks through our doors with the knowledge, tools, and community they need to reach peak physical and mental performance — regardless of where they start.
              </p>
            </div>
            <div className="card-glass p-10 hover:border-[#94a3b8]/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-white to-[#94a3b8] rounded-sm flex items-center justify-center mb-6">
                <MdStar className="text-black text-xl" />
              </div>
              <h2 className="font-bebas text-3xl tracking-widest text-white mb-4">Our Vision</h2>
              <div className="w-10 h-0.5 bg-gradient-to-r from-white to-[#94a3b8] mb-5" />
              <p className="text-gray-400 leading-relaxed">
                To be India's most trusted fitness brand — where cutting-edge science, compassionate coaching, and relentless community spirit create transformations that last a lifetime.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label="Core Values"
            title="WHAT DRIVES US"
            subtitle="Our values are not just words on a wall. They are the principles that guide every decision we make."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <div
                  key={i}
                  className="card-glass p-7 group hover:border-[#94a3b8]/50 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[#94a3b8]/10 border border-[#94a3b8]/20 rounded-sm flex items-center justify-center mb-5 group-hover:bg-[#94a3b8]/20 transition-all duration-300">
                    <Icon className="text-[#94a3b8] text-xl" />
                  </div>
                  <h3 className="font-bebas text-xl tracking-widest text-white mb-3">{val.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-black">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label="Our Journey"
            title="THE FITBANG STORY"
            subtitle="Over a decade of growth, wins, and relentless pursuit of excellence."
          />
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#94a3b8] via-[#94a3b8]/30 to-transparent hidden sm:block" />

            <div className="space-y-10">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-6 md:gap-0 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`hidden md:flex md:w-1/2 ${i % 2 === 0 ? "justify-end pr-12" : "justify-start pl-12"}`}>
                    <div className="card-glass p-6 max-w-sm hover:border-[#94a3b8]/50 transition-all duration-300">
                      <span className="font-bebas text-3xl gradient-text block mb-2">{item.year}</span>
                      <h4 className="font-bebas text-xl tracking-widest text-white mb-2">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>

                  <div className="relative z-10 hidden md:flex items-center justify-center">
                    <div className="w-4 h-4 bg-gradient-to-br from-white to-[#94a3b8] rounded-full shadow-lg shadow-[#94a3b8]/20" />
                  </div>

                  <div className="md:hidden card-glass p-6 w-full hover:border-[#94a3b8]/50 transition-all duration-300">
                    <span className="font-bebas text-3xl gradient-text block mb-2">{item.year}</span>
                    <h4 className="font-bebas text-xl tracking-widest text-white mb-2">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>

                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label="The Team"
            title="OUR EXPERT COACHES"
            subtitle="Internationally certified, passionately committed. Meet the professionals who will guide your transformation."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                  <div className="absolute top-3 right-3 bg-[#94a3b8] text-black text-xs font-semibold px-2 py-1 tracking-wider">
                    {trainer.exp}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bebas text-lg tracking-widest text-white">{trainer.name}</h3>
                  <p className="text-[#94a3b8] text-xs tracking-wider mt-1 mb-2">{trainer.role}</p>
                  <p className="text-gray-600 text-xs mb-3">{trainer.certs}</p>
                  <p className="text-gray-400 text-xs leading-relaxed">{trainer.bio}</p>
                  <div className="mt-4 pt-4 border-t border-[#222] flex items-center gap-2">
                    <FaCheckCircle className="text-[#94a3b8]" size={12} />
                    <span className="text-gray-500 text-xs">{trainer.exp} Experience</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-black text-center">
        <p className="text-[#94a3b8] text-xs tracking-[4px] uppercase font-semibold mb-4">Ready to Begin?</p>
        <h2 className="font-bebas text-5xl md:text-6xl text-white tracking-wide mb-6">
          YOUR STORY STARTS HERE
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-10">
          Join the FitBang family and become part of a movement that is changing lives every single day.
        </p>
        <Link to="/membership" className="btn-primary inline-flex items-center gap-2">
          Explore Memberships <FaArrowRight size={12} />
        </Link>
      </section>
    </div>
  );
};

export default About;
