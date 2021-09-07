const nav = document.querySelector('nav');

// // 일반적인 scroll 이벤트리스너
// let oldVal = 0;

// window.addEventListener('scroll', () => {
//   const newVal =
//     window.scrollY || //익스플로러 제외 모든 브라우저 지원
//     window.pageYOffset || // 익스플로러 9이상만
//     document.documentElement.scrollTop || // 익스플로러 8이하도 지원, but 크롬X
//     document.body.scrollTop; // 크롬, 사파리, 오페라, 엣지 지원

//   if (oldVal - newVal < 0) nav.classList.add('active');
//   if (oldVal - newVal >= 0) nav.classList.remove('active');
//   // console.log('Old', oldVal);
//   // console.log('New', newVal);
//   oldVal = newVal;
// });

// // 'wheel' event를 이용하는 scroll effect
// // 다만 이 'wheel' 이벤트는 firefox에서 작동하지 않기 때문에, 'DOMMouseScroll'이란 이벤트도 추가 사용할 수 있다.
window.addEventListener('DOMMouseScroll', mouseScrollEvent);
window.addEventListener('wheel', mouseScrollEvent);

function mouseScrollEvent(e) {
  const index = e.wheelDelta ? e.wheelDelta : -e.detail;
  // 만약 e.wheelDelta 값이 없을 수도 있어서 위처럼 작성

  if (index < 0) nav.classList.add('active');
  if (index > 0) nav.classList.remove('active');
}

// OR 아래의 조건식(파이어폭스 유저인지 판별하는 법)
// if (navigator.userAgent.indexOf('Firefox') === -1);
// window.addEventListener('wheel', mouseScrollEvent);
