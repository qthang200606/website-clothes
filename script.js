const carousel = document.querySelector('.carousel');
let scrollAmount = 0;
const scrollStep = 320; // khoảng cách mỗi lần scroll

document.querySelector('.next').addEventListener('click', () => {
  if (scrollAmount < carousel.scrollWidth - carousel.clientWidth) {
    scrollAmount += scrollStep;
    carousel.style.transform = `translateX(-${scrollAmount}px)`;
  }
});

document.querySelector('.prev').addEventListener('click', () => {
  if (scrollAmount > 0) {
    scrollAmount -= scrollStep;
    carousel.style.transform = `translateX(-${scrollAmount}px)`;
  }
});
