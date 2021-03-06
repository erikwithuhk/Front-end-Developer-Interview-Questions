// Coding Questions:

// What is the value of `foo`?
// const foo = 10 + '20';

const foo = 10 + '20';

const answer1 = null;

console.log(`answer1 === foo: ${answer1 === foo}`, );

// Question: How would you make this work?
// add(2, 5); // 7
// add(2)(5); // 7

console.log(`add(2, 5) === 7: ${add(2, 5) === 7}`);
console.log(`add(2)(5) === 7: ${add(2)(5) === 7}`);

// Question: What value is returned from the following statement?
// "i'm a lasagna hog".split("").reverse().join("");

const answer3 = null;
console.log(`answer3 === 'i\'m a lasagna hog'.split('').reverse().join(''): ${answer3 === 'i\'m a lasagna hog'.split('').reverse().join('')}`);

// Question: What is the value of `window.foo`?
// ( window.foo || ( window.foo = "bar" ) );

const answer4 = null;
console.log(`answer4 === ( global.foo || ( global.foo = 'bar' ) ): ${answer4 === ( global.foo || ( global.foo = 'bar' ) )}`);

// Question: What is the outcome of the two alerts below?
// var foo = "Hello";
// (function() {
//   var bar = " World";
//   alert(foo + bar);
// })();
// alert(foo + bar);

// Answer:

// Question: What is the value of `foo2.length`?

const foo2 = [];
foo2.push(1);
foo2.push(2);

const answer6 = null;
console.log(`answer6 === foo2.length: ${answer6 === foo2.length}`);

// Question: What is the value of `foo3.x`?

let foo3 = {n: 1};
const bar = foo3;
foo3.x = foo3 = {n: 2};

const answer7 = null;
console.log(`answer7 === foo3.x: ${answer7 === foo3.x}`);

// Question: What does the following code print?
// console.log('one');
// setTimeout(function() {
//   console.log('two');
// }, 0);
// console.log('three');

// Answer:
