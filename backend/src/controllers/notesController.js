const Note = require("../models/Note");
const User = require("../models/User");
const { deductPoints } = require("../utils/pointsService");

exports.uploadNote = async (req, res) => {
  const { title, subject, price, fileUrl } = req.body;

  const note = await Note.create({
    title,
    subject,
    price,
    fileUrl,
    uploadedBy: req.user.id
  });

  res.json({ message: "Note uploaded", note });
};

exports.getNotes = async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
};

exports.buyNote = async (req, res) => {
  const note = await Note.findById(req.params.id);
  const user = await User.findById(req.user.id);

  if (!note) return res.status(404).json({ message: "Note not found" });

  // Check if already bought
  if (note.buyers.includes(user._id)) {
    return res.status(400).json({ message: "Already purchased" });
  }

  // Deduct points if available
  if (user.points > 0) {
    await deductPoints(user._id, "NOTES_PURCHASE", Math.min(user.points, note.price));
  }

  note.buyers.push(user._id);
  await note.save();

  res.json({ message: "Note purchased", fileUrl: note.fileUrl });
};
