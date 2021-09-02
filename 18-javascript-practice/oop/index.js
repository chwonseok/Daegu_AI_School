//// Class ************************************
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;

//   this.fullName = function (hey) {
//     console.log(`${this.firstName} ${this.lastName} ${hey}`);
//   };
// }

// const myself = new Person('wonseok', 'choi');
// myself.fullName('ya');

//// Prototype ************************************
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// Person.prototype.fullName = function (hey) {
//   console.log(`${this.firstName} ${this.lastName} ${hey}`);
// };

// const myself = new Person('wonseok', 'choi');
// myself.fullName('hey');

// const arr = [10, 20, 30, 40];
// let index = 0;

// function tips() {
//   const current = index % arr.length;
//   // console.log(current);
//   console.log(arr[current]);
//   index++;

//   setTimeout(() => {
//     tips();
//   }, 1000);
// }

// tips();
const txtEl = document.querySelector('.txt');
const bikes = ['bianchi', 'trek', 'canyon', 's-works'];
const colors = ['red', 'orange', 'green', 'blue', 'navy', 'purple'];

function Typewriter(txtElement, bikes) {
  this.txtElement = txtElement;
  this.bikes = bikes;

  this.txt = '';
  this.bikeIndex = 0;
  this.isDeleting = false;

  this.type();
}

Typewriter.prototype.type = function () {
  const current = this.bikeIndex % this.bikes.length;
  const fullTxt = this.bikes[current];

  const clrNum = Math.floor(Math.random() * colors.length);

  // 한 글자씩 줄어드는 이펙트
  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    this.txtElement.style.color = colors[clrNum];
  }

  // 한 글자씩 늘어나는 이펙트
  if (!this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    this.txtElement.style.color = colors[clrNum];
  }
  this.txtElement.textContent = this.txt;

  // 글자 완성 되었을 때, 글자가 모두 삭제되었을 때
  if (!this.isDeleting && this.txt === fullTxt) this.isDeleting = true;
  if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.bikeIndex++;
  }

  setTimeout(() => {
    this.type();
  }, 200);
};

new Typewriter(txtEl, bikes);
