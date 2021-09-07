const main = document.querySelector('.main');
const back = document.querySelector('.back');

const windowX = window.innerWidth;
const windowY = window.innerHeight;

main.addEventListener('mousemove', (e) => {
  const x = e.pageX;
  const y = e.pageY;

  const moveX = (windowX / 2 - x) * 0.1;
  const moveY = (windowX / 2 - y) * 0.1;

  back.style.transform = `translate(${moveX}px, ${moveY}px)`;
});
