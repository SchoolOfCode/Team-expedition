import express from "express";
import * as icebreaker from "../controllers/icebreakerController.js";

export const icebreakerRoutes = express.Router();

icebreakerRoutes.get("/conversation_starter", icebreaker.getIcebreaker);
