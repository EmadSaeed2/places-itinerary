var city;
var photosArr;
var autocomplete;
function initAutocomplete() {
    autocomplete = new google.maps.places.Autocomplete(
        document.querySelector('.autocomplete'), {
        types: ['(cities)']
    });
    autocomplete.addListener('place_changed', onPlaceChanged);
}


