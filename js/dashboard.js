const track = document.getElementById('track');
const slides = Array.from(track.children);
const dotsWrap = document.getElementById('dots');
let index = 0;
let interval;

slides.forEach((_, i) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goTo(i));
  dotsWrap.appendChild(dot);
});

function goTo(i) {
  index = i;
  update();
}
function update() {
  track.style.transform = `translateX(-${index * 100}%)`;
  dotsWrap.querySelectorAll('.dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}
function nextSlide() {
  index = (index + 1) % slides.length;
  update();
}
function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  update();
}
document.getElementById('next').addEventListener('click', nextSlide);
document.getElementById('prev').addEventListener('click', prevSlide);

function startAuto() { interval = setInterval(nextSlide, 3000); }
function stopAuto() { clearInterval(interval); }

startAuto();
document.getElementById('carousel').addEventListener('mouseenter', stopAuto);
document.getElementById('carousel').addEventListener('mouseleave', startAuto);
