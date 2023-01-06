//Make the sliders work
//IMPROVE THIS CODE!
var sliderBudget = document.getElementById('budgetSlider');
var outputBudget = document.getElementById('budget');

outputBudget.innerHTML = sliderBudget.value;
sliderBudget.oninput = function () {
    outputBudget.innerHTML = this.value;
    budget = this.value;
}

var sliderDays = document.getElementById('daysSlider');
var outputDays = document.getElementById('days');

outputDays.innerHTML = sliderDays.value;
sliderDays.oninput = function () {
    outputDays.innerHTML = this.value;
    days = this.value;
}

//SHOW THE SAVED ITINERARIES ON HOMEPAGE: BUTTONS



//ALLOW USER TO SEARCH FOR A CITY 
//INCLUDE THE GOOGLE PLACES API (AUTOCOMPLETE)



//GET THE INPUTS: CITY, BUDGET & DAYS
var submit = document.querySelector('#submitBtn');
var city = document.querySelector('.place-input');
var cityName = '';

submit.addEventListener('click', function(){
    var cityName = city.value;
    console.log(`Give me a ${days} days itinerary to visit ${cityName} with £${budget}`);
})


// INCLUDE OPENAI API TO PROMPT THE REQUEST



//SAVE THE RESULTS TO LOCALSTORAGE



//GET IMAGES FROM PLACESAPI 



//SPLIT THE RESPONSE FROM OPENAI 



//BUILD THE ITINERARY



//HIDE THE MAIN FORM AND SHOW THE ITINERARY



//CREATE A NEW ITINERARY: DISPLAY FORM AND HIDE CURRENT ITINERARY. 

