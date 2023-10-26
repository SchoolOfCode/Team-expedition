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

  // Error handling
  if (!response.ok) {
    console.error(`Status: ${response.status}`);
    return;
  }

  // Extracting the data and text from the json
  const data = await response.json();
  const text = data.starter_question;
  return text;
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

document
  .getElementById("iceBreakerButton")
  .addEventListener("click", function () {
    // Get the element with the id 'iceBreakerText'
    const iceBreakerText = document.getElementById("iceBreakerText");

    // Add a class to change the text color
    iceBreakerText.classList.add("colorChanged");
  });
