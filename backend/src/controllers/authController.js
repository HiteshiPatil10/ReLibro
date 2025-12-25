const User = require("../models/User");
const jwt = require("jsonwebtoken");

// LOGIN / REGISTER (phone based)
exports.login = async (req, res) => {
  try {
    const { phone, role } = req.body;

    if (!phone) {
      return res.status(400).json({ message: "Phone required" });
    }

    let user = await User.findOne({ phone });

    if (!user) {
      user = await User.create({
        phone,
        role: role || "USER"
      });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      message: "Login successful",
      token,
      user
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.me = async (req, res) => {
  const user = await User.findById(req.user.id);
  res.json({ points: user.points, role: user.role });
};
