// 🌸 Flower Cursor Setup
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');

const flower = document.createElement('img');
flower.src = 'assets/icons/flower-cursor.svg';
flower.alt = 'Flower Cursor';
flower.style.width = '100%';
flower.style.height = '100%';
flower.style.objectFit = 'contain';
flower.style.display = 'block';

cursor.appendChild(flower);
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
  cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
});

// Optional: Slight scaling on hover targets
const interactiveEls = document.querySelectorAll('button, a, .clickable');

interactiveEls.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform += ' scale(1.4)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = cursor.style.transform.replace(' scale(1.4)', '');
  });
});

// ✨ Easter Egg Reveal Logic
const hiddenTrigger = document.getElementById('easter-trigger');
const easterEgg = document.getElementById('easter-egg');

if (hiddenTrigger && easterEgg) {
  hiddenTrigger.addEventListener('click', () => {
    easterEgg.style.display = 'block';
    easterEgg.scrollIntoView({ behavior: 'smooth' });
  });
}

// 🌿 Carousel Logic (Final Fixed)
let currentTestimonial = 0;
const testimonials = document.querySelectorAll(".testimonial");
const leftBtn = document.querySelector(".carousel-btn.left");
const rightBtn = document.querySelector(".carousel-btn.right");

function showTestimonial(index) {
  testimonials.forEach(t => t.classList.remove("active"));
  testimonials[index].classList.add("active");
}

function nextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
}

function prevTestimonial() {
  currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentTestimonial);
}

// ✅ Auto-rotate
setInterval(nextTestimonial, 6000);

// ✅ Manual controls (only if buttons exist on the page)
if (leftBtn && rightBtn) {
  leftBtn.addEventListener("click", prevTestimonial);
  rightBtn.addEventListener("click", nextTestimonial);
}
