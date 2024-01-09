import { getQuestionsByWeek } from "../models/questionsModel.js";

// function that excutes when the /questions endpoint gets hit
export async function getQuestions(req, res) {
  const week = req.params.week;
  const questions = await getQuestionsByWeek(week);
  if (!questions) {
    return res
      .status(404)
      .json({ status: "fail", data: { msg: "Question not found" } });
  }
  res.status(200).json({ status: "Success", data: questions });
}
