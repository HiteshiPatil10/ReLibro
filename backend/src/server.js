const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Relibro backend running 🚀");
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected ✅"))
  .catch(err => console.log("DB error ❌", err));

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

const testRoutes = require("./routes/testRoutes");
app.use("/api/test", testRoutes);

const pointsRoutes = require("./routes/pointsRoutes");
app.use("/api/points", pointsRoutes);

const bookRoutes = require("./routes/bookRoutes");
app.use("/api/books", bookRoutes);

const notesRoutes = require("./routes/notesRoutes");
app.use("/api/notes", notesRoutes);

const wholesalerRoutes = require("./routes/wholesalerRoutes");
app.use("/api/wholesaler", wholesalerRoutes);
