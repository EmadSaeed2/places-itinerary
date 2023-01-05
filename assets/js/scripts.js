//Make the sliders work
//IMPROVE THIS CODE!
var sliderBudget = document.getElementById('budgetSlider');
var outputBudget = document.getElementById('budget');

outputBudget.innerHTML = sliderBudget.value;
sliderBudget.oninput = function (){
    outputBudget.innerHTML = this.value;
}

var sliderDays = document.getElementById('daysSlider');
var outputDays = document.getElementById('days');

outputDays.innerHTML = sliderDays.value;
sliderDays.oninput = function (){
    outputDays.innerHTML = this.value;
}

//SHOW THE SAVED ITINERARIES ON HOMEPAGE: BUTTONS



//ALLOW USER TO SEARCH FOR A CITY 
//INCLUDE THE GOOGLE PLACES API (AUTOCOMPLETE)



//LET THE USER CREATE THE ITINERARY: CITY, BUDGET & DAYS
// INCLUDE OPENAI API TO PROMPT THE REQUEST



//SAVE THE RESULTS TO LOCALSTORAGE



//GET IMAGES FROM PLACESAPI 



//SPLIT THE RESPONSE FROM OPENAI 



//BUILD THE ITINERARY



//HIDE THE MAIN FORM AND SHOW THE ITINERARY



//CREATE A NEW ITINERARY: DISPLAY FORM AND HIDE CURRENT ITINERARY. 

