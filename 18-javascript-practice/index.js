// null and undefined
// console.log(null + 10)
// console.log(null + undefined)

// function
function nameFunc(lastName, firstName) {
  return lastName + '' + firstName;
}

const fullName = nameFunc;

// array
const arr = [1, 2, 3, 4, [5, 6, 7, [8, 9]]];

// object
const student = {
  firstName: 'Wonseok',
  lastName: 'Choi',
  age: 32,
  skills: ['html', 'css', 'JS', 'react'],
  sum(a, b) {
    return a + b;
  },
};

// Primitive type vs Reference type
// let str1 = 'a';
// let str2 = 'b';
// str2 = str1;
// str1 = 'c';
// console.log(str1, str2);

//
