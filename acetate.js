// Crear overlay
let overlay = document.createElement('div');
Object.assign(overlay.style, {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
  zIndex: '0'
});
document.body.appendChild(overlay);

let img = document.createElement('img');
img.src = 'https://www.airhistory.net/photos/0312080.jpg
';
Object.assign(img.style, {
  width: '600px',
  height: '600px',
  position: 'absolute',
  top: '150px',
  left: '150px',
  cursor: 'grab',
  userSelect: 'none',
  opacity: '0.3',     
  pointerEvents: 'none'
});
overlay.appendChild(img);

let dragging = false, offsetX = 0, offsetY = 0;

img.addEventListener('mousedown', e => {
  dragging = true;
  offsetX = e.clientX - img.getBoundingClientRect().left;
  offsetY = e.clientY - img.getBoundingClientRect().top;
  img.style.pointerEvents = 'auto';
});

document.addEventListener('mousemove', e => {
  if (!dragging) return;
  img.style.left = (e.clientX - offsetX) + 'px';
  img.style.top = (e.clientY - offsetY) + 'px';
});

document.addEventListener('mouseup', () => {
  dragging = false;
  img.style.pointerEvents = 'none';
});

