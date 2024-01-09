//import
import { promises as fs } from "node:fs";
import path from "node:path";

// Declare json file to a variable, convoStarters is hard coded in models
const filePath = path.resolve(process.cwd(), "./models/convoStarters.json");

// Function to generate random number between 1 - 20 (Stretch goal: make number relative to number of responses)
export async function getIcebreaker(req, res) {
  const icebreakerJSON = await fs.readFile(filePath, "utf-8");
  const icebreaker = JSON.parse(icebreakerJSON);
  const randomNumber = Math.floor(Math.random() * 20);
  return res.status(200).send(icebreaker[randomNumber]);
}
