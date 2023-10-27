const weekSelector = document.getElementById("week-selector");
const questionBulk = document.getElementById("question-bulk");

weekSelector.addEventListener("change", async function (event) {
  const week = event.target.value;
  const response = await fetch(`http://localhost:4000/questions/${week}`);

  const questionJSON = await response.json();
  const question = questionJSON.data.question;

  questionBulk.innerHTML = question;
});
