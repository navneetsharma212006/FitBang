import { useEffect, useState } from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import ReviewCard from "../components/ReviewCard";
import API from "../utils/api";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState(0);

  useEffect(() => {
    API.get("/reviews")
      .then((res) => {
        setReviews(res.data.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load reviews. Please try again.");
        setLoading(false);
      });
  }, []);

  const avgRating =
    reviews.length > 0
      ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
      : "0.0";

  const filtered = filter === 0 ? reviews : reviews.filter((r) => r.rating === filter);

  return (
    <div className="bg-black pt-20">
      <section className="relative py-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-black" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#94a3b8]/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto text-center">
          <span className="text-[#94a3b8] font-semibold text-xs tracking-[4px] uppercase block mb-4">
            Testimonials
          </span>
          <h1 className="font-bebas text-6xl md:text-8xl text-white leading-none tracking-wide mb-6">
            REAL PEOPLE
            <span className="block gradient-text">REAL RESULTS</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Don't take our word for it. Hear directly from the members who walked through our doors and transformed their lives.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 bg-[#0a0a0a] border-y border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
          <div className="text-center">
            <p className="font-bebas text-8xl gradient-text">{avgRating}</p>
            <div className="flex justify-center gap-1 my-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar
                  key={i}
                  size={18}
                  className={i < Math.round(parseFloat(avgRating)) ? "text-[#94a3b8]" : "text-[#333]"}
                />
              ))}
            </div>
            <p className="text-gray-500 text-sm tracking-widest uppercase">Average Rating</p>
          </div>
          <div className="h-20 w-px bg-[#222] hidden md:block" />
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="font-bebas text-4xl text-white">{reviews.length}</p>
              <p className="text-gray-500 text-xs tracking-widest uppercase">Total Reviews</p>
            </div>
            <div>
              <p className="font-bebas text-4xl text-white">
                {reviews.filter((r) => r.rating === 5).length}
              </p>
              <p className="text-gray-500 text-xs tracking-widest uppercase">5-Star Reviews</p>
            </div>
            <div>
              <p className="font-bebas text-4xl text-white">98%</p>
              <p className="text-gray-500 text-xs tracking-widest uppercase">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-black">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label="Member Reviews"
            title="WHAT OUR FAMILY SAYS"
            subtitle="Every review is a story of transformation, dedication, and community."
          />

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[0, 5, 4, 3].map((star) => (
              <button
                key={star}
                onClick={() => setFilter(star)}
                className={`flex items-center gap-2 px-5 py-2.5 text-xs tracking-widest uppercase font-semibold transition-all duration-300 rounded-sm ${
                  filter === star
                    ? "bg-gradient-to-r from-white to-[#94a3b8] text-black"
                    : "border border-[#333] text-gray-400 hover:border-[#94a3b8] hover:text-white"
                }`}
              >
                {star === 0 ? (
                  "All Reviews"
                ) : (
                  <>
                    {star} <FaStar size={10} className="text-current" />
                  </>
                )}
              </button>
            ))}
          </div>

          {loading && (
            <div className="flex items-center justify-center py-20">
              <div className="w-10 h-10 border-2 border-[#94a3b8] border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {error && (
            <div className="text-center py-10">
              <p className="text-red-400 mb-4">{error}</p>
              <button onClick={() => window.location.reload()} className="btn-outline">
                Retry
              </button>
            </div>
          )}

          {!loading && !error && (
            <>
              {filtered.length === 0 ? (
                <p className="text-center text-gray-500 py-10">
                  No reviews found for this rating.
                </p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filtered.map((review) => (
                    <ReviewCard key={review._id} review={review} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-[#050505]">
        <div className="max-w-3xl mx-auto text-center">
          <FaQuoteLeft className="text-[#94a3b8]/30 text-6xl mx-auto mb-6" />
          <p className="font-bebas text-3xl md:text-4xl text-white tracking-wide leading-tight mb-6">
            FITBANG CHANGED MY PERSPECTIVE ON FITNESS. IT IS NOT JUST A GYM — IT IS A LIFESTYLE.
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-px bg-[#94a3b8]" />
            <span className="text-gray-500 text-sm tracking-widest uppercase">FitBang Member, 2023</span>
            <div className="w-10 h-px bg-[#94a3b8]" />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-black text-center">
        <h2 className="font-bebas text-5xl md:text-6xl text-white tracking-wide mb-4">
          WRITE YOUR OWN SUCCESS STORY
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          Join thousands of members and start your transformation today.
        </p>
        <Link to="/membership" className="btn-primary inline-flex items-center gap-2">
          View Membership Plans
        </Link>
      </section>
    </div>
  );
};

export default Reviews;
