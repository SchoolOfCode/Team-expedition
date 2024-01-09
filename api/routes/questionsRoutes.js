import express from "express";
import * as questions from "../controllers/questionsController.js";

export const questionsRoutes = express.Router();

questionsRoutes.get("/:week", questions.getQuestions);
