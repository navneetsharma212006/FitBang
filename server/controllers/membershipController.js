const Membership = require("../models/Membership");

const getMemberships = async (req, res) => {
  try {
    const memberships = await Membership.find().sort({ price: 1 });
    res.status(200).json({ success: true, data: memberships });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = { getMemberships };
