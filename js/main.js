var myFullpage = new fullpage("#root", {
  anchors: ["home", "about-us", "contact-us"],
  slidesNavigation: true,
  navigation: true,
  navigationPosition: "right",
});

new Typed(".omega-title", {
  strings: ["Omega Agency"],
  showCursor: false,
  typeSpeed: 50,
});

new Typed(".omega-description", {
  strings: ["Under Construction"],
  typeSpeed: 50,
  showCursor: false,
});

new Typed(".about-description", {
  strings: [
    `We are best Bussiness Services agency in Egypt We are OMEGA and we are the biggest agency of advertising in egypt. Please checkour studio for more information, and <a href="#contact">contact page</a> to hiring a jobs.`,
  ],
  typeSpeed: 20,
  showCursor: false,
});

$("#nav a").click(() => {
  $(".navbar-toggler").click();
});

const iconMode = $(".toggle-mode i");
let mode = localStorage.getItem("mode") || "dark";
localStorage.setItem("mode", mode);

changeMode(mode);
iconMode.click(() => {
  mode = mode == "dark" ? "light" : "dark";
  localStorage.setItem("mode", mode);
  changeMode(mode);
});

function changeMode(mode) {
  if (mode == "dark") {
    iconMode.removeClass("fa-sun").addClass("fa-moon");
    $(".main-style").attr("href", "./css/main.css");
  } else {
    iconMode.removeClass("fa-moon").addClass("fa-sun");
    $(".main-style").attr("href", "./css/main-light.css");
  }
}
