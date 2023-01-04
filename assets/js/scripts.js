//Make the sliders work
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