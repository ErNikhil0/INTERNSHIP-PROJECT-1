// Cursor Highlight Effect on Header Image
const hoverMask = document.querySelector('.hover-mask');

document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  hoverMask.style.background = `radial-gradient(circle at ${mouseX}px ${mouseY}px, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.8) 20%)`;
});
