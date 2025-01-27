const slider = document.querySelector(".slider");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const slides = Array.from(slider.querySelectorAll(".carousel-card-block3"));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener("click", () => {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  slide();
});

nextButton.addEventListener("click", () => {
  slideIndex = (slideIndex + 1) % slideCount;
  slide();
});

const slide = () => {
  const slideOffset = -slideIndex * 380;
  slider.style.transform = `translateX(${slideOffset}px)`;
};

slider.addEventListener("touchstart", () => {
  slideIndex = (slideIndex + 1) % slideCount;
  slide();
});
