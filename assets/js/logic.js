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