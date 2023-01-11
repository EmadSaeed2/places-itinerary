var itineraryObj = {
    id: 0,
    city: '',
    days: 5,
    budget: 50,
    itineraryText: '',
    imgOneUrl: '',
    imgTwoUrl: '',
    imgThreeUrl: '',
};

var itineraryPlan = document.querySelector("#itinerary-plan");

/* *************************************************************************** */
//GET THE INPUTS: BUDGET & DAYS
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
    console.log(itinerariesData);
    createSavedPlaceButton();
}

/* *************************************************************************** */
// UPDATE ITINERARIES DATA ON LOCAL-STORAGE
/* *************************************************************************** */
function updateLocalStorage() {
    itineraryObj.id = `${itineraryObj.city.replace(/\s/g, '')}-${itineraryObj.days}-${itineraryObj.budget}`;
    console.log(itineraryObj.id);
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
            "beforeend", `<button class="saved-place-button" id=${saved.id}>${saved.days} days in ${saved.city} on £${saved.budget}</button>`
        );
    }
}

/* *************************************************************************** */
// UPDATE ITINERARY OBJECT
/* *************************************************************************** */
function UpdateItineraryObj() {
    itineraryObj.city = autoCity;
    itineraryObj.imgOneUrl = `url('${photosArr[0].getUrl()}')`;
    itineraryObj.imgTwoUrl = `url('${photosArr[1].getUrl()}')`;
    itineraryObj.imgThreeUrl = `url('${photosArr[2].getUrl()}')`;
}

/* *************************************************************************** */
// GET DATA FROM OPEN-AI
/* *************************************************************************** */
function getDataFromOpenAI() {
    var API_KEY = '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';
    var API_URL = 'https://api.openai.com/v1/engines/text-davinci-002/completions';

    var prompt = `Give me a ${itineraryObj.days} days itinerary to visit ${itineraryObj.city} with £${itineraryObj.budget}. Don't include the departure as last day. Include a html <br> tag after each day. Wrap each day in a h4 tag and the day content in a p tag.`;
    // var prompt = `Give me a ${itineraryObj.days} days itinerary to visit ${itineraryObj.city} with £${itineraryObj.budget}. Don't include the departure as last day. Include html <h2> tags for the headers and html <p> tags for paragraphs`;

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
        .then(function (response) { return response.json() })
        .then(function (data) {
            itineraryObj.itineraryText = data.choices[0].text;
            console.log(data.choices[0].text);
        }).then(function () {
            updateItineraryTextUI()
            updateLocalStorage();
            createSavedPlaceButton();
        })
        .catch(function (error) {
            console.error(error);
        });
}

/* *************************************************************************** */
// DISPLAY AND UPDATE UI
/* *************************************************************************** */
var itineraryContainer = document.querySelector("#itinerary-container");
var formContainer = document.getElementById("inputContainer");

function displayItineraryUI() {
    itineraryContainer.classList.remove("hidden");
    formContainer.classList.add("hidden");
}

function displayInputsUI() {
    itineraryContainer.classList.add("hidden");
    formContainer.classList.remove("hidden");
}

function updateItineraryImagesUI() {
    var imageOne = document.querySelector("#img-one");
    imageOne.style.backgroundImage = itineraryObj.imgOneUrl;

    var imageTwo = document.querySelector("#img-two");
    imageTwo.style.backgroundImage = itineraryObj.imgTwoUrl;

    var imageThree = document.querySelector("#img-three");
    imageThree.style.backgroundImage = itineraryObj.imgThreeUrl;
}

function updateItineraryTextUI() {
    var itineraryCityHeader = document.querySelector("#itinerary-city");
    itineraryCityHeader.innerText = itineraryObj.city;

    document.querySelector('#wait').classList.add('hidden');

    itineraryPlan.innerHTML = `${itineraryObj.itineraryText}`;
}

/* *************************************************************************** */
// ON CREAT-ITINERARY-BUTTON CLICKED
/* *************************************************************************** */
var createItinerarBtn = document.querySelector("#submitBtn");
createItinerarBtn.addEventListener("click", function () {
    // Check if there is a city
    if (!autoCity) {
        // display error message
        document.querySelector(".error").classList.remove("hidden");
        console.log("invalid city input");
    } else {
        itineraryPlan.innerHTML = '';
        UpdateItineraryObj()
        displayItineraryUI();
        updateItineraryImagesUI();
        getDataFromOpenAI();
    }
});

/* *************************************************************************** */
// ON NEW-ITINERARY-BUTTON CLICKED
/* *************************************************************************** */
var newItineraryBtn = document.querySelector("#back");
newItineraryBtn.addEventListener("click", function () {
    displayInputsUI()
});

/* *************************************************************************** */
// ON SAVED-PLACE-BUTTON CLICKED
/* *************************************************************************** */
var savedPlaceBtns = document.querySelectorAll(".saved-place-button");
savedPlaceBtns.forEach(savedPlaceBtns => {
    savedPlaceBtns.addEventListener("click", function (e) {
        e.preventDefault();
        btnId = e.target.getAttribute("id");;
        console.log(btnId);
        var savedObj = itinerariesData.find(function (obj) {
            return obj.id === btnId;
        });
        console.log(savedObj);
        itineraryObj.city = savedObj.city;
        itineraryObj.days = savedObj.days;
        itineraryObj.budget = savedObj.budget;
        itineraryObj.itineraryText = savedObj.itineraryText;
        itineraryObj.imgOneUrl = savedObj.imgOneUrl;
        itineraryObj.imgTwoUrl = savedObj.imgTwoUrl;
        itineraryObj.imgThreeUrl = savedObj.imgThreeUrl;

        displayItineraryUI();
        updateItineraryImagesUI();
        updateItineraryTextUI();
    });
});