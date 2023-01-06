var autocomplete;
var autoCity;
var placeInput = document.querySelector('.autocomplete');

function initAutocomplete() {
    autocomplete = new google.maps.places.Autocomplete(
        document.querySelector('.autocomplete'), {
        types: ['(cities)']
    });
    autocomplete.addListener('place_changed', onPlaceChanged);
}

function onPlaceChanged() {
    var placeData = autocomplete.getPlace();

    if (!placeData.geometry) { //validate the user input
        placeInput.placeholder = 'Please enter and select a city';
    } else {
        // console.log(placeData);
        document.querySelector('.error').classList.add('display-none');

        autoCity = document.querySelector('.autocomplete').value;
        var photosArr = placeData.photos;
        for (var photo of photosArr) {
            console.log(photo.getUrl());
        }
    }
}
