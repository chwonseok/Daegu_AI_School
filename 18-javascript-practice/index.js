// null and undefined
// console.log(null + 10)
// console.log(null + undefined)

// function
// function nameFunc(lastName, firstName) {
//   return lastName + '' + firstName;
// }

// const fullName = nameFunc;

// array
// const arr = [1, 2, 3, 4, [5, 6, 7, [8, 9]]];

// object
// const student = {
//   firstName: 'Wonseok',
//   lastName: 'Choi',
//   age: 32,
//   skills: ['html', 'css', 'JS', 'react'],
//   sum(a, b) {
//     return a + b;
//   },
// };

// Primitive type vs Reference type
// let str1 = 'a';
// let str2 = 'b';
// str2 = str1;
// str1 = 'c';
// console.log(str1, str2);

//////////////////////////////////////////////////////////////
// if, else if, else, ternary operator
// parseInt():
// 전역변수, 지역변수
// const globalV = 'global';
// if (true) {
//   const localV = 'local';

//   console.log(globalV);
//   console.log(localV);
// }

// console.log(globalV);
// console.log(localV);
// function a() {
//   const apple = 'apple';
// }

// function b() {
//   a();
//   console.log(apple);
// }
// b();

// lexical scoping
// let name = 'wonseok';
// function func1() {
//   console.log(name);
// }
// function func2() {
//   let name = 'choi';
//   func1();
// }
// func2();

// Hoisting
// 변수 호이스팅, 함수 호이스팅
// test1();
// function test1() {
//   console.log('this is test1');
// }
// test2();
// const test2 = function () {
//   console.log('this is test2');
// };
