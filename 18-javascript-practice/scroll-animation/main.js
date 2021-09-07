const nav = document.querySelector('nav');

let oldVal = 0;

window.addEventListener('scroll', () => {
  const newVal =
    window.scrollY || //익스플로러 제외 모든 브라우저 지원
    window.pageYOffset || // 익스플로러 9이상만
    document.documentElement.scrollTop || // 익스플로러 8이하도 지원, but 크롬X
    document.body.scrollTop; // 크롬, 사파리, 오페라, 엣지 지원

  if (oldVal - newVal < 0) nav.classList.add('active');
  if (oldVal - newVal >= 0) nav.classList.remove('active');
  // console.log('Old', oldVal);
  // console.log('New', newVal);
  oldVal = newVal;
});
