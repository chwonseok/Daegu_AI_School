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

// iteration
// While iteration
// let num = 1;
// while (num < 10) {
//   console.log(2 * num);
//   num++;
// }
// console.log('end'); // while iteration이 종료된 후 해당 code가 실행됨.

// do ~ while
// let i = 5;
// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// for loop
// for (let i = 1; i < 10; i++) {
//   console.log(i * 2);
// }

// for (let i = 1; i < 3; i++) {
//   for (let j = 1; j < 2; j++) {
//     console.log(i, j, i * j);
//   }
// }

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// const arr = ['a', 'b', 'c'];
// arr.pop('a');
// console.log(arr);
// arr.forEach((i, z) => {
//   console.log(i, z);
// });

// arr.map((i) => {
//   console.log(i);
// });
