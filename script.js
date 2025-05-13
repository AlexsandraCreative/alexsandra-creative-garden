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
