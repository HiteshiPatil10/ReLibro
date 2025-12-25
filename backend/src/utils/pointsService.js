const User = require("../models/User");
const PointsLedger = require("../models/PointsLedger");

exports.addPoints = async (userId, action, points) => {
  await PointsLedger.create({
    userId,
    action,
    points
  });

  await User.findByIdAndUpdate(userId, {
    $inc: { points }
  });
};

exports.deductPoints = async (userId, action, points) => {
  await PointsLedger.create({
    userId,
    action,
    points: -points
  });

  await User.findByIdAndUpdate(userId, {
    $inc: { points: -points }
  });
};
