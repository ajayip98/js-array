// const numbers = [1, 2, 3, 4, 5, 4, 4, 6];
// console.log(numbers.indexOf(2));
// console.log(numbers.lastIndexOf(4));
// console.log(numbers.splice(4, "e", "t"));
// console.log(numbers.indexOf(2) !== -1);

// const courses = [
//   { id: "1", name: "b" },
//   { id: "2", name: "a" },
// ];
// const ab = courses.find(function (course) {
//   return course.name === "b";
// });
// console.log(ab);
// //arrow function
// const arrFunc = courses.find((course) => course.name === "b");

// //emptying an array;
// // 1
// let number = [2, 4, 6, 8];
// number = [];
// //2
// number.length = 0;

// //concat
// let abc = [1, 2, 3];
// let cde = [4, 5, 6];

// const abcde = abc.concat(cde);
// console.log(abcde);

// //slice;
// const slice = abc.slice(1, 3);
// console.log(slice);

// //easy way to combine arrays;
// const combined = [...abc, "sing", ...cde];
// console.log(combined);

// const copied = [...combined];

// // for of;
// for (number of numbers) {
//   console.log(number);
// }

// //forEach()
// numbers.forEach((number, index) => console.log(index, number));

// //join()

// let num = [1, 8, 9, 0];
// let joins = num.join(",");
// console.log(joins);

// //split();

// let message = "My name is Sarah";
// let splits = message.split(" ");
// console.log(splits);
// //reverse();
// let reverse = num.reverse();
// console.log(reverse);

// //sort();

// let sort = num.sort();
// console.log(sort);

// // sort() in object;

// const course = [
//   { id: 1, name: "Node.js" },
//   { id: 2, name: "JavaScript" },
// ];

// course.sort(function (a, b) {
//   const nameA = a.name.toUpperCase();
//   const nameB = b.name.toUpperCase();

//   if (nameA < nameB) return -1;
//   if (nameA > nameB) return 1;
//   return 0;
// });
// console.log(course);

// //Ex. Array from range
// function arrayFromRange(min, max) {
//   const output = [];
//   for (let i = min; i <= max; i++) output.push(i);
//   return output;
// }
// const numbs = arrayFromRange(-13, 7);
// console.log(numbs);

//Ex. Includes;

// function includes(array, searchElement) {
//   for (let numbr of array) if (numbr === searchElement) return true;
//   return false;
// }
// const arrr = includes([1, 3, 5, 8], 9);
// console.log(arrr);

//Ex. Except

// function except(array, excluded) {
//   const output = [];
//   for (let element of array)
//     if (!excluded.includes(element)) output.push(element);
//   return output;
// }
// const numbers = [1, 3, 5, 6, 8];
// const outp = except(numbers, [1, 6]);
// console.log(outp);

//Exercise Count Occurrence

// function countOccurrence(array, searchElement) {
//   let countt = 0;
//   for (let element of array) if (element === searchElement) countt++;
//   return countt;
// }
// const numbers = [1, 2, 3, 4, 1];
// const count = countOccurrence(numbers, -1);
// console.log(count);

// function countOccurrence(array, searchElement) {
//   return array.reduce((accumulator, current) => {
//     const occurrence = current === searchElement ? 1 : 0;
//     console.log(accumulator, current, searchElement);
//     return accumulator + occurrence;
//   }, 0);
// }

//Ex. Getmax

// const numbers = [1, 2, 3, 4];
// const max = getMax([1, 2, 3, 8]);
// console.log(max);

// function getMax(array) {
//   if (array.length === 0) return undefined;
//   let max = array[0];

//   for (let i = 1; i < array.length; i++) if (array[i] > max) max = array[i];
//   return max;
// }
// function getMax(array) {
//   if (array.length === 0) return undefined;
//   return array.reduce((a, b) => (a > b ? a : b));
// }

//Wx. movies;
const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 },
];

const titles = movies
  .filter((m) => m.year === 2018 && m.rating >= 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map((m) => m.title);

console.log(titles);
