const body = document.querySelector("body");
const overlay = document.querySelector("background-img-overlay");
const toggle = document.querySelector("#dark-mode-toggle");

// This function is to toggle the dark mode on and off
function toggleDarkMode() {
  if (body.classList.contains("light-mode")) {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    document.documentElement.style.setProperty("--bg-color", "#121212");
    document.documentElement.style.setProperty("--text-color", "#f3f3f3");
    document.documentElement.style.setProperty(
      "--gradient",
      "linear-gradient(#12121288, #121212)"
    );
    document.documentElement.style.setProperty("--input", "#343434");
    toggle.setAttribute("fill", "#f3f3f3");
    localStorage.setItem("darkMode", "enabled");
  } else {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    document.documentElement.style.setProperty("--bg-color", "#f3f3f3");
    document.documentElement.style.setProperty("--text-color", "#121212");
    document.documentElement.style.setProperty(
      "--gradient",
      "linear-gradient(#f3f3f366, #f3f3f3)"
    );
    document.documentElement.style.setProperty("--input", "#fff");
    toggle.setAttribute("fill", "#121212");

    // update the preference in local storage to disabled
    localStorage.setItem("darkMode", "disabled");
  }
}

// Get the user preference from local storage
const userPreference = localStorage.getItem("darkMode");

// If the preference is "enabled", toggle the dark mode
if (userPreference === "enabled") {
  toggleDarkMode();
}
