export function initSlider() {
  const cardsContainer = document.querySelector(".cards-container_block4");
  const cards = document.querySelectorAll(".card_block4");
  const btnNext = document.querySelector(".next");
  const btnPrev = document.querySelector(".prev");
  const cardWidth = cards[0].offsetWidth;
  let currentPosition = 0;

  btnNext.addEventListener("click", () => {
    currentPosition -= cardWidth;
    if (currentPosition < -cardWidth * (cards.length - 3)) {
      currentPosition = 0;
    }
    cardsContainer.style.transform = `translateX(${currentPosition}px)`;
  });

  btnPrev.addEventListener("click", () => {
    currentPosition += cardWidth;
    if (currentPosition > 0) {
      currentPosition = -cardWidth * (cards.length - 3);
    }
    cardsContainer.style.transform = `translateX(${currentPosition}px)`;
  });
}
