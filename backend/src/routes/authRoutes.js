const express = require("express");
const router = express.Router();
const { login } = require("../controllers/authController");

router.post("/login", login);

module.exports = router;

const { login, me } = require("../controllers/authController");
const { protect } = require("../middlewares/authMiddleware");

router.get("/me", protect, me);
/*
import express from "express";
import { login, me } from "../controllers/authController.js";

const router = express.Router();

router.post("/login", login);
router.get("/me", me);

export default router;*/
