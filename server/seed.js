require("dotenv").config();
const mongoose = require("mongoose");
const Membership = require("./models/Membership");
const Review = require("./models/Review");

const memberships = [
  {
    name: "Basic",
    price: 999,
    duration: "per month",
    badge: "",
    isPopular: false,
    features: [
      "Access to gym floor",
      "Cardio equipment",
      "Locker room access",
      "2 group classes/month",
      "Fitness assessment",
    ],
  },
  {
    name: "Standard",
    price: 1999,
    duration: "per month",
    badge: "Most Popular",
    isPopular: true,
    features: [
      "Everything in Basic",
      "Unlimited group classes",
      "1 personal training session/month",
      "Nutrition consultation",
      "Access to sauna",
      "Guest pass (2/month)",
    ],
  },
  {
    name: "Premium",
    price: 3499,
    duration: "per month",
    badge: "Best Value",
    isPopular: false,
    features: [
      "Everything in Standard",
      "4 personal training sessions/month",
      "Custom meal plan",
      "Priority booking",
      "Exclusive member events",
      "Unlimited guest passes",
      "24/7 access",
    ],
  },
];

const reviews = [
  {
    name: "Arjun Sharma",
    rating: 5,
    role: "Premium Member",
    comment:
      "FitBang completely transformed my lifestyle. The trainers are world-class and the equipment is top-notch. Lost 18kg in 6 months!",
    avatar: "",
  },
  {
    name: "Priya Mehta",
    rating: 5,
    role: "Standard Member",
    comment:
      "The best gym I have ever been to. The atmosphere is electric and the community keeps you motivated every single day. Highly recommended!",
    avatar: "",
  },
  {
    name: "Rohan Verma",
    rating: 4,
    role: "Basic Member",
    comment:
      "Great facilities and friendly staff. The group classes are amazing. Upgraded to Standard after the first month because I wanted more.",
    avatar: "",
  },
  {
    name: "Sneha Kapoor",
    rating: 5,
    role: "Premium Member",
    comment:
      "Investing in the Premium plan was the best decision of my life. Personal training sessions are incredibly effective. Results visible in just 3 months.",
    avatar: "",
  },
  {
    name: "Vikram Singh",
    rating: 5,
    role: "Standard Member",
    comment:
      "FitBang is not just a gym, it is a community. The energy here is unmatched. My strength has doubled since I joined 8 months ago.",
    avatar: "",
  },
  {
    name: "Anjali Patel",
    rating: 4,
    role: "Basic Member",
    comment:
      "Affordable pricing with premium quality equipment. The cardio section alone is worth the membership. Very clean and well-maintained facility.",
    avatar: "",
  },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB for seeding...");

    await Membership.deleteMany({});
    await Review.deleteMany({});
    console.log("Cleared existing data");

    await Membership.insertMany(memberships);
    console.log("Memberships seeded successfully");

    await Review.insertMany(reviews);
    console.log("Reviews seeded successfully");

    console.log("Database seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Seeding error:", error);
    process.exit(1);
  }
};

seedDB();
