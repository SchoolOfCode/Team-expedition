// Function to display data
async function getAndDisplayIceBreaker() {
  const iceBreaker = await retrieveIceBreaker();
  displayIceBreaker(iceBreaker);
}

// Function to asynchronously retrieve data from API
async function retrieveIceBreaker() {
  const response = await fetch(
    "http://localhost:4000/icebreaker/conversation_starter",
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  if (response.ok) {
    const icebreakerData = await response.json();
    const icebreakerText = icebreakerData.starter_question;
    return icebreakerText;
  } else {
    console.log("Error: " + response.status);
  }
}

// Function to update the DOM with the provided data
function displayIceBreaker(iceBreaker) {
  const element = document.getElementById("iceBreakerText");
  element.textContent = iceBreaker;
}

// Retrieves the conversation starter button
const iceBreakerButton = document.getElementById("iceBreakerButton");

// Sets up a click event listener to fetch and display a new icebreaker upon clicking the button
iceBreakerButton.addEventListener("click", getAndDisplayIceBreaker);
