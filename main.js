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
    // Hide the current slide
    slides[currentIndex].classList.remove("active-slide");
    dots[currentIndex].classList.remove("active");

    // Loop the index
    if (index < 0) {
      index = totalSlides - 1;
    } else if (index >= totalSlides) {
      index = 0;
    }

    // Show the new slide
    slides[index].classList.add("active-slide");
    dots[index].classList.add("active");

    // Update the current index
    currentIndex = index;
  }

  // Initialize the carousel with the first slide visible
  slides[currentIndex].classList.add("active-slide");
  dots[currentIndex].classList.add("active");
});
