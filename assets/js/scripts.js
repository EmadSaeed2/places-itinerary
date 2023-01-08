//Make the sliders work
//IMPROVE THIS CODE!
var sliderBudget = document.getElementById('budgetSlider');
var outputBudget = document.getElementById('budget');
var days = 5;
var budget = 50;

outputBudget.innerHTML = sliderBudget.value;
sliderBudget.oninput = function () {
    outputBudget.innerHTML = this.value;
    budget = this.value;
}

var sliderDays = document.getElementById('daysSlider');
var outputDays = document.getElementById('days');

outputDays.innerHTML = sliderDays.value;
sliderDays.oninput = function (e) {
    outputDays.innerHTML = e.target.value;
    days = e.target.value;
}

//SHOW THE SAVED ITINERARIES ON HOMEPAGE: BUTTONS



//ALLOW USER TO SEARCH FOR A CITY 
//INCLUDE THE GOOGLE PLACES API (AUTOCOMPLETE)



//GET THE INPUTS: CITY, BUDGET & DAYS
var submit = document.querySelector('#submitBtn');
var openAiPrompt = '';

submit.addEventListener('click', function () {
    if (!autoCity) {
        document.querySelector('.error').classList.remove('display-none');

        console.log('invalid input')
    } else {

        var userInput = {
            city: autoCity,
            days: days,
            budget: budget,
        };

        openAiPrompt = `Give me a ${userInput.days} days itinerary to visit ${userInput.city} with £${userInput.budget}`
        console.log(openAiPrompt);
        getCompletion();

    }
})

// INCLUDE OPENAI API TO PROMPT THE REQUEST







//SAVE THE RESULTS TO LOCALSTORAGE



//GET IMAGES FROM PLACESAPI 



//SPLIT THE RESPONSE FROM OPENAI 



//BUILD THE ITINERARY



//HIDE THE MAIN FORM AND SHOW THE ITINERARY



//CREATE A NEW ITINERARY: DISPLAY FORM AND HIDE CURRENT ITINERARY. 

