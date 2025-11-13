
document.addEventListener("DOMContentLoaded", () => {

    const yearEl = document.getElementById("year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    const facebook = document.getElementById("facebookLink");
    const youtube = document.getElementById("youtubeLink");
    const instagram = document.getElementById("instagramLink");

    if (facebook) facebook.href = "https://facebook.com/softech";
    if (youtube) youtube.href = "https://youtube.com/";
    if (instagram) instagram.href = "https://instagram.com/";


    const footerLogo = document.getElementById("footerLogo");
    if (footerLogo) {
        footerLogo.src = "/static/media/wl_client_images/706049b7ca764c199e7eae8a198b7da2.jpeg";
    }

});


let currentSlide = 0;
const slides = document.querySelectorAll(".banner-slider .slide");

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 4000);

showSlide(currentSlide);



const slider = document.querySelector(".exam-slider");

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;

  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; 
  slider.scrollLeft = scrollLeft - walk;
});




let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");
let index = 0;

function showSlide(i) {
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slides[i].classList.add("active");
  dots[i].classList.add("active");
}

function nextSlide() {
  index++;
  if (index >= slides.length) index = 0;
  showSlide(index);
}

let auto = setInterval(nextSlide, 4000);

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    showSlide(index);
    clearInterval(auto);
  });
});

const courseSlider = document.querySelector(".course-slider");


let isDown = false;
let startX;
let scrollLeft;

courseSlider.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - courseSlider.offsetLeft;
  scrollLeft = courseSlider.scrollLeft;
});


courseSlider.addEventListener("mouseleave", () => (isDown = false));
courseSlider.addEventListener("mouseup", () => (isDown = false));


courseSlider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - courseSlider.offsetLeft;
  const walk = (x - startX) * 2;
  courseSlider.scrollLeft = scrollLeft - walk;
});


let autoSlide2 = setInterval(() => {
  courseSlider.scrollLeft += 2;

  
  if (
    courseSlider.scrollLeft + courseSlider.clientWidth >=
    courseSlider.scrollWidth
  ) {
    courseSlider.scrollLeft = 0;
  }
}, 20);


courseSlider.addEventListener("mouseover", () => clearInterval(autoSlide2));
courseSlider.addEventListener("mouseout", () => {
  autoSlide2 = setInterval(() => {
    courseSlider.scrollLeft += 2;
    if (
      courseSlider.scrollLeft + courseSlider.clientWidth >=
      courseSlider.scrollWidth
    ) {
      courseSlider.scrollLeft = 0;
    }
  }, 20);
});

let slide = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");
let index = 0;

function showSlide(i) {
  slide.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slide[i].classList.add("active");
  dots[i].classList.add("active");
}

function nextSlide() {
  index++;
  if (index >= slides.length) index = 0;
  showSlide(index);
}

let auto = setInterval(nextSlide, 4000);

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    showSlide(index);
    clearInterval(auto); 
  });
});
document.getElementById("year").innerText = new Date().getFullYear();
document.getElementById("languageSelect").addEventListener("change", function () {
  console.log("Language changed to:", this.value);
});
