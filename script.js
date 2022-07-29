const menuIcon = document.querySelector("#menu-icon");
const features = document.querySelector(".features");
const featuresMenu = document.querySelector("#features-menu");
const company = document.querySelector(".company");
const companyMenu = document.querySelector("#company-menu");
const navMenu = document.querySelector(".nav-bar");

const screenWidth = window.innerWidth;

features.addEventListener("click", function () {
  if (featuresMenu.style.display === "block") {
    featuresMenu.style.display = "none";
    features.innerHTML =
      'Features <img src="images/icon-arrow-down.svg" alt=""/>';
  } else {
    featuresMenu.style.display = "block";
    features.innerHTML =
      'Features <img src="images/icon-arrow-up.svg" alt=""/>';
  }
});

company.addEventListener("click", function () {
  if (companyMenu.style.display === "block") {
    companyMenu.style.display = "none";
    company.innerHTML =
      'Company <img src="images/icon-arrow-down.svg" alt=""/>';
  } else {
    companyMenu.style.display = "block";
    company.innerHTML = 'Company <img src="images/icon-arrow-up.svg" alt=""/>';
  }
});

menuIcon.addEventListener("click", function () {
  console.log(navMenu.style.float === "right");

  if (navMenu.style.right === "-100vw") {
    navMenu.style.right = "0";
    navMenu.style.display = "block";
    navMenu.style.transition = "right 0.5s";
    menuIcon.innerHTML = '<img src="images/icon-close-menu.svg" alt="" />';
  } else {
    navMenu.style.right = "-100vw";
    navMenu.style.display = "none";
    navMenu.style.transition = "right 0.5s";
    menuIcon.innerHTML = '<img src="images/icon-menu.svg" alt="" />';
  }
});

document.addEventListener("click", (e) => {
  if (
    navMenu.contains(e.target) &&
    !features.contains(e.target) &&
    !company.contains(e.target) &&
    document.body.contains(e.target)
  ) {
    navMenu.style.right = "-100vw";
    navMenu.style.display = "none";
    navMenu.style.transition = "right 0.5s";
    menuIcon.innerHTML = '<img src="images/icon-menu.svg" alt="" />';
  }
});