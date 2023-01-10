var autocomplete;
var autoCity;
var photosArr;
var placeInput = document.querySelector(".autocomplete");
var placeName;

function initAutocomplete() {
  autocomplete = new google.maps.places.Autocomplete(
    document.querySelector(".autocomplete"),
    {
      types: ["(cities)"],
    }
  );
  autocomplete.addListener("place_changed", onPlaceChanged);
}

function onPlaceChanged() {
  var placeData = autocomplete.getPlace();

  if (!placeData.geometry) {
    //validate the user input
    placeInput.placeholder = "Please enter and select a city";
  } else {
    // console.log(placeData);
    document.querySelector(".error").classList.add("hidden");

    autoCity = document.querySelector(".autocomplete").value;
    photosArr = placeData.photos;
    placeName = placeData.formatted_address;
  }
}
