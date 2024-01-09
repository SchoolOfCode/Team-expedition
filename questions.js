import { API_URL } from "./constants.js";

const weekSelector = document.getElementById("week-selector");
const questionBulk = document.getElementById("question-bulk");

weekSelector.addEventListener("change", async function (event) {
  const week = event.target.value;
  const response = await fetch(`${API_URL}/questions/${week}`);

  const questionJSON = await response.json();
  const question = questionJSON.data.question;

  questionBulk.innerHTML = question;
});
