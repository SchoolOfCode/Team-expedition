import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { icebreakerRoutes } from "./routes/icebreakerRoutes.js";
import { questionsRoutes } from "./routes/questionsRoutes.js";

dotenv.config();

export const app = express();

const PORT = 4000;

app.use(express.json());
// Enable CORS for all routes
app.use(cors());

// For the icebreaker connection
app.use("/icebreaker", icebreakerRoutes);

//For retrieving questions from the Postgres database
app.use("/questions", questionsRoutes);

app.listen(PORT, function () {
  console.log(`Server is now listening on http://localhost:${PORT}`);
});
