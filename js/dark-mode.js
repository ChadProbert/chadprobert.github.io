// DARK MODE FUNCTIONALITY

// selecting all the sections that will be changed when the dark mode toggle is switched on
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;
const socialIcons = document.querySelectorAll(".socialIcon");
const avatar = document.querySelector(".avatar");
const darkModeLabel = document.querySelector("#dark-mode-label");
const headings = document.querySelectorAll(" .contactMeHeading, .projectsHeading");
const card = document.querySelectorAll(".card");
const repoLink = document.querySelectorAll(".repoLink");
const h1 = document.querySelector("h1");

// handles the dark-mode class assignment
const applyDarkModeStyles = () => {
  body.classList.add("dark-mode");
  headings.forEach((heading) => heading.classList.add("dark-mode"));
  [avatar, darkModeLabel, darkModeToggle].forEach((el) => el.classList.add("dark-mode"));
  socialIcons.forEach((socialIcon) => socialIcon.classList.add("dark-mode"));
  card.forEach((card) => card.classList.add("dark-mode"));
  repoLink.forEach((repoLink) => repoLink.classList.add("dark-mode"));
  h1.classList.add("dark-mode");
};

// handles the dark-mode class removal
const removeDarkModeStyles = () => {
  body.classList.remove("dark-mode");
  headings.forEach((heading) => heading.classList.remove("dark-mode"));
  [avatar, darkModeLabel, darkModeToggle].forEach((el) => el.classList.remove("dark-mode"));
  socialIcons.forEach((socialIcon) => socialIcon.classList.remove("dark-mode"));
  card.forEach((card) => card.classList.remove("dark-mode"));
  repoLink.forEach((repoLink) => repoLink.classList.remove("dark-mode"));
  h1.classList.remove("dark-mode");
};

// handles the dark mode toggling functionality
const toggleDarkMode = () => {
  const darkModeEnabled = darkModeToggle.checked;
  /* saved the dark/light mode state in the sessionStorage so that when the user navigates to another page, 
  the selection state is remembered */
  sessionStorage.setItem("darkMode", darkModeEnabled ? "enabled" : "disabled");
  if (darkModeEnabled) {
    applyDarkModeStyles();
  } else {
    removeDarkModeStyles();
  }
};

darkModeToggle.addEventListener("change", toggleDarkMode);

// handles the dark mode initialization
const initializeDarkMode = () => {
  if (sessionStorage.getItem("darkMode") === "enabled") {
    darkModeToggle.checked = true;
    applyDarkModeStyles();
  } else {
    darkModeToggle.checked = false;
  }
};

initializeDarkMode();

/* references:
https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp
*/