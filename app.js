import express from "express";
import cors from "cors";
import { icebreakerRoutes } from "./routes/icebreakerRoutes.js";

export const app = express();

app.use(express.json());
// Enable CORS for all routes
app.use(cors());

// import { topicsRoutes } from "./routes/topicsRoutes.js";

app.use("/icebreaker", icebreakerRoutes);
//app.use("/topics", topicsRoutes);
