const { url } = require("inspector");

var savedInputs = JSON.parse(localStorage.getItem("places"));

if (!savedInputs) {
  savedInputs = [];
}

generateSavedInputs(savedInputs);

var tectalicOpenai = require("@tectalic/openai")["default"];

var openAiItinerary;

var itineraryPlan = document.querySelector("#itinerary-plan");

var userInput = {
  city: '',
  days: '',
  budget: ''
};


//Get the itinerary from OpenAi

async function getCompletion() {
  try {
    const response = await tectalicOpenai(
      "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"
    ).completions.create({
      model: "text-davinci-002",
      prompt: openAiPrompt,
      max_tokens: 2000,
      //   finish_reason: 'stop'
    });

    openAiItinerary = response.data.choices[0].text.trim();
    itineraryPlan.insertAdjacentHTML("afterend", `<p >${openAiItinerary}</p>`);
  } catch (error) {
    console.error(error);
  }
}

//Make the sliders work
//IMPROVE THIS CODE!
var sliderBudget = document.getElementById("budgetSlider");
var outputBudget = document.getElementById("budget");
var days = 5;
var budget = 50;

outputBudget.innerHTML = sliderBudget.value;
sliderBudget.oninput = function () {
  outputBudget.innerHTML = this.value;
  budget = this.value;
};

var sliderDays = document.getElementById("daysSlider");
var outputDays = document.getElementById("days");

outputDays.innerHTML = sliderDays.value;
sliderDays.oninput = function (e) {
  outputDays.innerHTML = e.target.value;
  days = e.target.value;
};

//GET THE INPUTS: CITY, BUDGET & DAYS
var submit = document.querySelector("#submitBtn");
var openAiPrompt = "";

function getUserInput(){
    userInput.city = autoCity,
    userInput.days = days,
    userInput.budget = budget,
}

function updateLocalStorage(){
  
}


function updateItineraryUI(userInput){


  savedInputs.unshift(userInput);

  if (savedInputs.length > 5) {
    savedInputs.pop();
  }

  generateSavedInputs(savedInputs);


  var itineraryContainer = document.querySelector("#itinerary-container");
  itineraryContainer.classList.remove("hidden");

  var formContainer = document.getElementById("inputContainer");
  formContainer.classList.add("hidden");

  openAiPrompt = `Give me a ${userInput.days} days itinerary to visit ${userInput.city} with £${userInput.budget}. Don't include the departure as last day. Include a html <br> tag after each day. Wrap each day in a h4 tag and the day content in a p tag.`;
  console.log(openAiPrompt);
  getCompletion();

  document.querySelector("#itinerary-city").innerText = placeName;

  var imageOne = document.querySelector("#img-one");
  imageOne.style.backgroundImage = `url('${photosArr[0].getUrl()}')`;

  var imageTwo = document.querySelector("#img-two");
  imageTwo.style.backgroundImage = `url('${photosArr[1].getUrl()}')`;

  var imageThree = document.querySelector("#img-three");
  imageThree.style.backgroundImage = `url('${photosArr[2].getUrl()}')`;

  var backButton = document.querySelector("#back");
  backButton.addEventListener("click", function () {
    itineraryContainer.classList.add("hidden");
    formContainer.classList.remove("hidden");
  });
}

submit.addEventListener("click", function () {
  if (!autoCity) {
    document.querySelector(".error").classList.remove("hidden");

    console.log("invalid input");
  } else {
    getUserInput()
    updateItineraryUI(userInput);
  }
});

// INCLUDE OPENAI API TO PROMPT THE REQUEST

//SAVE THE RESULTS TO LOCALSTORAGE

//GET IMAGES FROM PLACESAPI

//SPLIT THE RESPONSE FROM OPENAI

//BUILD THE ITINERARY

//HIDE THE MAIN FORM AND SHOW THE ITINERARY

//CREATE A NEW ITINERARY: DISPLAY FORM AND HIDE CURRENT ITINERARY.

function handleClick() {}

function generateSavedInputs(savedInputs) {
  var savedInputContainer = document.querySelector("#saved-inputs");

  savedInputContainer.innerHTML = "";

  for (var saved of savedInputs) {
    savedInputContainer.insertAdjacentHTML(
      "beforeend",
      `
    <button onclick='handleClick()' class="saved-place-button">${saved.days} days in ${saved.city} on £${saved.budget}</button>
    `
    );
  }

  // <button class="saved-place-button">6 days in Paris on £500</button>
}
