const body = document.querySelector("body");
const overlay = document.querySelector("background-img-overlay");
const toggleContainer = document.querySelector(".icon");
const toggle = document.querySelector("#dark-mode-toggle");

// Check if the user has a saved preference in localStorage
const userPreference = localStorage.getItem("darkMode");

if (userPreference === "enabled") {
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
} else {
}

toggleContainer.addEventListener("click", () => {
  if (body.classList.contains("light-mode")) {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");

    // Save the preference to localStorage
    localStorage.setItem("darkMode", "enabled");

    // Update the CSS variables with the new values for dark mode
    document.documentElement.style.setProperty("--bg-color", "#121212");
    document.documentElement.style.setProperty("--text-color", "#f3f3f3");
    document.documentElement.style.setProperty(
      "--gradient",
      "linear-gradient(#12121288, #121212)"
    );
    document.documentElement.style.setProperty("--input", "#343434");
    toggle.setAttribute("fill", "#f3f3f3");
  } else {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");

    // Save the preference to localStorage
    localStorage.setItem("darkMode", "disabled");

    // Update the CSS variables with the original values for light mode
    document.documentElement.style.setProperty("--bg-color", "#f3f3f3");
    document.documentElement.style.setProperty("--text-color", "#121212");
    document.documentElement.style.setProperty(
      "--gradient",
      "linear-gradient(#f3f3f388, #f3f3f3)"
    );
    document.documentElement.style.setProperty("--input", "#fff");

    toggle.setAttribute("fill", "#121212");
  }
});
