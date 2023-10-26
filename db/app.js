import express from "express";
import cors from "cors";
import { icebreakerRoutes } from "../routes/icebreakerRoutes.js";


export const app = express();

app.use(express.json());
// Enable CORS for all routes
app.use(cors());

// import { topicsRoutes } from "./routes/topicsRoutes.js";

// For the icebreaker connection
app.use("/icebreaker", icebreakerRoutes);
//app.use("/topics", topicsRoutes);


export async function getQuestionsById(id) {

    const queryText = "SELECT * FROM questions WHERE id = $1";
    const result = await pool.query(question, [id]);
    return result.rows[0] || null;

  }

//For retrieving questions from the Postgres database
app.get("/question/id", async function (req, res) {
    const id = req.params.id;
    const questions = await getQuestionsById(id);
    if (!questions) {
      return res
      .status(404)
      .json ({ status: "fail", data: { msg: "Question not found"}});
    }
    res.status(200).json({status: "Success", data: questions});
  });