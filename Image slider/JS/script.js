let currentIndex = 0;
let intervalId;
let isPlaying = true;

const slides = document.querySelector('.slider');
const totalSlides = document.querySelectorAll('.slide').length;

function showSlide(index) {
  currentIndex = (index + totalSlides) % totalSlides;
  const translateValue = -currentIndex * 100 + '%';
  slides.style.transform = 'translateX(' + translateValue + ')';
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function togglePlayPause() {
  isPlaying = !isPlaying;

  if (isPlaying) {
    intervalId = setInterval(nextSlide, 3000); // Change slide every 3 seconds
  } else {
    clearInterval(intervalId);
  }
}

// Start automatic sliding
togglePlayPause();
