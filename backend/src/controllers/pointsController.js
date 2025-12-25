const { addPoints } = require("../utils/pointsService");
const rules = require("../utils/pointsRules");

exports.rateApp = async (req, res) => {
  await addPoints(req.user.id, "APP_RATING", rules.APP_RATING);
  res.json({ message: "Points added for rating" });
};

exports.shareApp = async (req, res) => {
  await addPoints(req.user.id, "SHARE_APP", rules.SHARE_APP);
  res.json({ message: "Points added for sharing" });
};
