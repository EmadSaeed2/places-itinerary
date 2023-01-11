var itineraryObj = {
    city: '',
    days: 5,
    budget: 50,
    itineraryText: '',
    imgOneUrl: '',
    imgTwoUrl: '',
    imgThreeUrl: '',
};

/* *************************************************************************** */
//GET THE INPUTS: CITY, BUDGET & DAYS
/* *************************************************************************** */
var sliderBudget = document.getElementById("budgetSlider");
var outputBudget = document.getElementById("budget");
var sliderDays = document.getElementById("daysSlider");
var outputDays = document.getElementById("days");

outputBudget.innerHTML = sliderBudget.value;
sliderBudget.oninput = function () {
    outputBudget.innerHTML = this.value;
    itineraryObj.budget = this.value;
};

outputDays.innerHTML = sliderDays.value;
sliderDays.oninput = function (e) {
    outputDays.innerHTML = e.target.value;
    itineraryObj.days = e.target.value;
};

/* *************************************************************************** */
// GET ITINERARIES DATA FROM LOCAL-STORAGE
/* *************************************************************************** */
var itinerariesData = [];
if (!localStorage.getItem("itinerariesData")) {
    localStorage.setItem("itinerariesData", JSON.stringify(itinerariesData));
} else {
    itinerariesData = JSON.parse(localStorage.getItem("itinerariesData"));
    console.log(itinerariesData)
}

/* *************************************************************************** */
// UPDATE ITINERARIES DATA ON LOCAL-STORAGE
/* *************************************************************************** */
function updateLocalStorage() {
    itinerariesData.unshift(itineraryObj);
    if (itinerariesData.length > 5) {
        itinerariesData.pop();
    }
    localStorage.setItem("itinerariesData", JSON.stringify(itinerariesData));
}

/* *************************************************************************** */
// CREATE SAVED-PLACE-BUTTON
/* *************************************************************************** */
function createSavedPlaceButton() {
    var savedInputContainer = document.querySelector("#saved-inputs");
    savedInputContainer.innerHTML = "";
    for (var saved of itinerariesData) {
        savedInputContainer.insertAdjacentHTML(
            "beforeend", `<button class="saved-place-button">${saved.days} days in ${saved.city} on £${saved.budget}</button>`
        );
    }
}

/* *************************************************************************** */
// GET DATA FROM OPEN-AI
/* *************************************************************************** */
function getDataFromOpenAI() {
    var API_KEY = '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';
    var API_URL = 'https://api.openai.com/v1/engines/text-davinci-002/completions';

    var prompt = `Give me a ${itineraryObj.days} days itinerary to visit ${itineraryObj.city} with £${itineraryObj.budget}. Don't include the departure as last day. Include a html <br> tag after each day. Wrap each day in a h4 tag and the day content in a p tag.`;

    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            prompt: prompt,
            temperature: 0.5,
            max_tokens: 4000,
        })
    };

    fetch(API_URL, options)
        .then(response => response.json())
        .then(data => {
            itineraryObj.itineraryText = data.choices[0].text;
            console.log(data.choices[0].text);
        }).then(function () {
            updateItineraryTextUI()
            updateLocalStorage();
            createSavedPlaceButton();
        })
        .catch(error => {
            console.error(error);
        });
}