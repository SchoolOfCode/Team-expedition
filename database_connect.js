import express from "express";
import cors from "cors";
import { icebreakerRoutes } from "./routes/icebreakerRoutes.js";
​
export const app = express();
​
app.use(express.json());
// Enable CORS for all routes
app.use(cors());
​
// import { topicsRoutes } from "./routes/topicsRoutes.js";
​
app.use("/icebreaker", icebreakerRoutes);
//app.use("/topics", topicsRoutes);
​
app.get("/questions/id", async function (req, res) {
 const id = req.params.id;
 const questions = await getQuestionById(id);
​
 if (!questions) {
    return res
    .status(404)
    .json ({ status: "fail", data: { msg: "Questions not found"}});
​
 }
 res.status(200).json({status: "Success", data: questions});
​
});