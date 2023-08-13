const btn_el = document.getElementById("btn");
const playBtn_el = document.getElementById("playBtn");
let image = document.querySelector("#bulbImg");
const decorateBtn_el = document.getElementById("decorateBtn");
const button_el = document.getElementById("cake");
function run() {
  changeBGColor("#FFDDCC");
  image.style.opacity = 0;
  playBtn_el.style.display = "block";
}
function changeBGColor(color) {
  document.body.style.background = color;
}

//this code plays music. RUNS FINE.
function playMusic() {
  var song = document.getElementById("music");
  song.play();
  decorateBtn_el.style.display = "block";
}

/*flying banner*/
const bannerImage_el = document.getElementById("bannerImage");
decorateBtn_el.addEventListener("click", function () {
  bannerImage_el.style.display = "block";
  bannerImage_el.classList.add("flying");
  setTimeout(() => {
    bannerImage_el.classList.remove("flying");
    bannerImage_el.classList.add("fixed");
  }, 5000);

  btn_el.style.display = "none";
  playBtn_el.style.display = "none";
  decorateBtn_el.style.display = "none";
  button_el.style.display = "none";

  setTimeout(() => {
    console.log("hi");
    // button_el.disabled = true;
    button_el.style.display = "block";
  }, 5000);
});
/*function animateBanner(){
    bannerImage_el.style.display = 'block';
    bannerImage_el.classList.add('flying');
    setTimeout(() => {
        bannerImage_el.classList.remove('flying');
        bannerImage_el.classList.add('fixed');
    }, 5000);
}
*/
/*Birthday Cake*/
const mycake_el = document.getElementById("cakeSVG");
button_el.addEventListener("click", function () {
  const contentDiv = document.getElementById("contentDiv");

  fetch("temp.html")
    .then((response) => response.text())
    .then((htmlContent) => {
      contentDiv.innerHTML = htmlContent;
      startButton.style.display = "block";
    })
    .catch((error) => {
      console.error("Error loading content:", error);
    });
});
/*Displaying the text*/
const startButton = document.querySelector(".msg");
const text = document.querySelector(".text");
const paragraphs = document.querySelectorAll(".text p");
let currentIndex = 0;

startButton.addEventListener("click", () => {
  if (currentIndex < paragraphs.length) {
    btn_el.style.display = "none";
    playBtn_el.style.display = "none";
    decorateBtn_el.style.display = "none";
    button_el.style.display = "none";
    text.style.display = "block";
    paragraphs[currentIndex].style.opacity = "1";
    paragraphs[currentIndex].style.pointerEvents = "auto"; // Enable interaction
    currentIndex++;
    startButton.style.display = "none";
  }
});
