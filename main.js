document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const slides = document.querySelectorAll(".carousel-images img");
  const totalSlides = slides.length;
  const dots = document.querySelectorAll(".carousel-indicators .dot");

  document.querySelector(".prev").addEventListener("click", function () {
    moveToSlide(currentIndex - 1);
  });

  document.querySelector(".next").addEventListener("click", function () {
    moveToSlide(currentIndex + 1);
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", function () {
      moveToSlide(parseInt(this.getAttribute("data-slide")));
    });
  });

  function moveToSlide(index) {
    slides[currentIndex].classList.remove("active-slide");
    dots[currentIndex].classList.remove("active");

    if (index < 0) {
      index = totalSlides - 1;
    } else if (index >= totalSlides) {
      index = 0;
    }

    slides[index].classList.add("active-slide");
    dots[index].classList.add("active");
    currentIndex = index;
  }

  slides[currentIndex].classList.add("active-slide");
  dots[currentIndex].classList.add("active");
});
