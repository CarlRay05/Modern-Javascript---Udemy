// else if statements
// const password = 'p@ss';

// if(password.length >= 12){
//     console.log('that password is mighty strong');
// } else if (password.length >= 8) {
//     console.log('this password is long enough');
// } else {
//   console.log('password is not long enough!');
// }

//logical operators - OR || AND &&

// const password = 'p@ss';

// if(password.length >= 12 && password.includes('@')){
//     console.log('that password is mighty strong');
// } else if (password.length >= 8 || password.includes('@') && password.length >= 5){
//     console.log('this password is strong enough!');
// } else {
//   console.log('password is not strong enough');
// }


// logical NOT (!)

// let user = false;

// if (!user) {
//     console.log('you must be logged in to continue');
// }

// console.log(!true);
// console.log(!false);



// break and continue

// const scores = [50, 25, 0, 30, 100, 20, 10];

// for(let i = 0; i < scores.length; i++) {

//     if(scores[i] === 0) {
//         continue;
//     }

//     console.log('your scores: ', scores[i]);

//     if (scores[i] === 100) {
//         console.log('congrats, you got the top score!');
//         break;
//     }
// }


// switch statements

// const grade = 'F';

// switch (grade) {
//     case 'A':
//         console.log('you got an A! Good Job!');
//         break;
//     case 'B':
//         console.log('you got an B');
//         break;
//     case 'C':
//         console.log('you got an C');
//         break;
//     case 'D':
//         console.log('you got an D');
//         break;
//     case 'F':
//         console.log('you got an F');
//         break;

//     default:
//         console.log('not a valid grade');
// }


// variables & block scope

// let age = 30;

// if (true) {

// }


// function declaration

// function expression
// const speak = function () {
//     console.log('good day');
// };

// // greet();
// // greet();
// // greet();
// // greet();

// function greet() {
//     console.log('hello there');
// }

// arguments & parameters
// const speak = function (name, time) {
//     console.log(`good day ${name} ${time}`);
// };

// speak('mario', 'morning');


// const speak = function (time = 'night', name = 'luigi') {
//     console.log(`good ${time} ${name}`);
// };
// speak();
// speak('day', 'shaun');

// const speak = function (time = 'night', name = 'luigi') {
//     console.log(`good ${time}, ${name}`);
// };

// speak('day', 'carl');

// returing vaules
// const calArea = function (radius) {
// 	let area = 3.14 * radius**2;
// 	console.log(area);
// }

// calArea(5);

// const calcArea = function(radius){
// 	return 3.14 * radius**2;
// };

// const area = calcArea(5);
// console.log(area);

// const calcVol = function(area) {
// };

// calcVol(area);


// regular function
// const calcArea = function(radius){
// 	return 3.14 * radius**2;
// }

// arrow function
// const calcArea = (radius) => 3.14 * radius**2;

// const area = calcArea(5);
// console.log('area is:', area);


// practise arrow functions

// const greet = function(){
//   return 'hello, world';
// }

// const greet = () => 'hello, world';
// const result = greet();
// console.log(result);

// const bill = function(products, tax){
//   let total = 0;
//   for(let i = 0; i < products.length; i++){
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// }

// const bill = (products, tax) => {
// 	let total = 0;
//   	for(let i = 0; i < products.length; i++){
//     	total += products[i] + products[i] * tax;
//   	}
//   return total;
// };


// // console.log(greet());
// console.log(bill([10,15,30], 0.2));

// object literals
// const blogs = [
//   {title: 'Why mac and cheese rules', likes: 30},
//   {title: '10 things to make with Marmite', likes: 50}
// ];

// console.log(blogs);

// let user = {
//   name: 'crystal',
//   age: 30,
//   email: 'crystal@thenetninja.co.uk',
//   location: 'berlin',
//   blogs: [
//     {title: 'Why mac and cheese rules', likes: 30},
//     {title: '10 things to make with Marmite', likes: 50}
//   ],
//   login: function (){
//     console.log(('the user logged in'));
//   },
//   logout: function (){
//     console.log(('the user logged out'));
//   },
//   logBlogs: function(){
//     console.log('this user has written the following blogs:');
//     this.blogs.forEach(blog => {
//       console.log(blog.title, blog.likes);
//     })
//   }
// };

// user.logBlogs();
// console.log(this);



// Math Object
// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);

const area = 7.7;
console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

// random number
const random = Math.random();
console.log(random);

console.log(Math.round(random * 100));  //random # from 1-100
























