const btns = document.querySelectorAll('button');

btns.forEach((btn) => {
  btn.addEventListener('click', (cur) => {
    const detail = cur.target.nextElementSibling;

    cur.target.classList.toggle('active');

    // detail.scrollHeight: 해당 element의 height 값

    if (cur.target.classList.contains('active')) {
      detail.style.maxHeight = `${detail.scrollHeight}px`;
    } else {
      detail.style.maxHeight = '0';
    }
  });
});
