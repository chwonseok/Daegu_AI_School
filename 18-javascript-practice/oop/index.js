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
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.fullName = function (hey) {
  console.log(`${this.firstName} ${this.lastName} ${hey}`);
};

const myself = new Person('wonseok', 'choi');
myself.fullName('hey');
