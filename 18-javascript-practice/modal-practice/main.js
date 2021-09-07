const btn = document.querySelectorAll('.button');
const modal = document.querySelector('.modal-wrap');
const overlay = document.querySelector('.overlay');

btn.forEach((cur) =>
  cur.addEventListener('click', () => {
    modal.classList.toggle('active');
  })
);

function removeModal(e) {
  if (e.key === 'Escape') modal.classList.remove('active');
}

window.addEventListener('keydown', removeModal);
modal.addEventListener('click', (e) => {
  if (e.target.classList.contains('overlay')) modal.classList.remove('active');
});
