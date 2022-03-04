//Hamburger menu

const hamburger = document.getElementById("hamburger");
const navUL = document.getElementById("navbar");

hamburger.addEventListener("click", () => {
  navUL.classList.toggle("show");
});

navUL.addEventListener("click", () => {
  navUL.classList.remove("show");
});

// Reservation modal

const reservationBtn = document.getElementById("reservation-btn");
const reservationModal = document.getElementById("modal");
const backdropElement = document.getElementById("backdrop");
const reservationBtnExit = document.getElementById("exitModal");
const submitReservation = document.getElementById("submit-reservation");

reservationBtn.addEventListener("click", () => {
  reservationModal.style.display = "block";
  backdropElement.style.display = "block";
});

reservationBtnExit.addEventListener("click", () => {
  reservationModal.style.display = "none";
  backdropElement.style.display = "none";
});

backdropElement.addEventListener('click', () => {
  reservationModal.style.display = "none";
  backdropElement.style.display = "none";
})

// Gallery

let i = 0;
let images = [];
let imagesHeader = [];
let imagesParagraph = [];
const time = 6000;

images[0] = "images/slide-1.jpg";
images[1] = "images/slide-2.jpg";
images[2] = "images/slide-3.jpg";
images[3] = "images/slide-4.jpg";
images[4] = "images/slide-5.jpg";

imagesHeader[0] = "Lake";
imagesHeader[1] = "Chillout";
imagesHeader[2] = "Clear sky";
imagesHeader[3] = "Views";
imagesHeader[4] = "Comfort";

imagesParagraph[0] = "Suspendisse porta imperdiet arcu, eu efficitur";
imagesParagraph[1] = "Vivamus elit lorem, elementum id leo";
imagesParagraph[2] = "Integer ut iaculis tellus, sit amet";
imagesParagraph[3] = "Etiam nec eros non ligula vestibulum";
imagesParagraph[4] = "Donec eleifend purus sit amet dolor";

function changeImg() {
  document.getElementById("slide").src = images[i];
  document.getElementById("gallery-header").innerHTML = imagesHeader[i];
  document.getElementById("gallery-paragraph").innerHTML = imagesParagraph[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout(changeImg, time);
}

window.onload = changeImg();
