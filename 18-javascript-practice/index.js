/* hex code
  form: # + 6자리의 random number or alphabet;
  number: 0 ~ 9
  alphabet: a ~ f
*/

const btn1 = document.getElementById('btn1');
const hex = document.getElementById('hex');
const body = document.querySelector('body');

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

function changeColor() {
  let color = '#';
  for (let i = 1; i < 7; i++) {
    num = Math.floor(Math.random() * arr.length);
    val = arr[num];
    color += val;
  }

  hex.textContent = color;
  body.style.backgroundColor = color;
}

btn1.addEventListener('click', changeColor);

/*** quote generator ***/
const quotation = document.getElementById('quotation');
const writer = document.querySelector('.author');
const btn2 = document.getElementById('btn2');

const quotes = [
  {
    quote: '“Be yourself; everyone else is already taken.”',
    author: 'Oscar Wilde',
  },
  {
    quote:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    author: 'Albert Einstein',
  },
  {
    quote: '“So many books, so little time.”',
    author: 'Frank Zappa',
  },
  {
    quote: '“A room without books is like a body without a soul.”',
    author: 'Marcus Tullius Ceicero',
  },
  {
    quote: '“You only live once, but if you do it right, once is enough.”',
    author: 'Mae West',
  },
  {
    quote: '“Life is what happens to us while we are making other plans.”',
    author: 'Allen Saunders',
  },
];

function generateQuote() {
  const random = Math.floor(Math.random() * quotes.length);

  quotation.textContent = quotes[random].quote;
  writer.textContent = '-  ' + quotes[random].author;
}

btn2.addEventListener('click', generateQuote);
