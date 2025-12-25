const express = require("express");
const router = express.Router();

const { login, me } = require("../controllers/authController");
const { protect } = require("../middlewares/authMiddleware");

// login route
router.post("/login", login);

// get current user
router.get("/me", protect, me);

module.exports = router;

/*
import express from "express";
import { login, me } from "../controllers/authController.js";

const router = express.Router();

router.post("/login", login);
router.get("/me", me);

export default router;*/
