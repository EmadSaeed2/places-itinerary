var autocomplete;
var autoCity;

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
        document.querySelector('.autocomplete').placeholder = 'Please enter and select a city';
        console.log('invalid input')
    } else {
        // console.log(placeData);
        autoCity = document.querySelector('.autocomplete').value;

        var photosArr = placeData.photos;
        for (var photo of photosArr) {
            console.log(photo.getUrl());
        }
    }
}
