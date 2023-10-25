import express from "express";

export const app = express();
const PORT = 4000;

app.use(express.json());

import { icebreakerRoutes } from "./routes/icebreakerRoutes.js";
// import { topicsRoutes } from "./routes/topicsRoutes.js";

app.use("/icebreaker", icebreakerRoutes);
//app.use("/topics", topicsRoutes);
