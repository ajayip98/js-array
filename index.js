const numbers = [1, 2, 3, 4, 5, 4, 4, 6];
console.log(numbers.indexOf(2));
console.log(numbers.lastIndexOf(4));
console.log(numbers.splice(4, 'e', 't'));
console.log(numbers.indexOf(2) !== -1);

const courses = [
   { id: '1', name: 'b'},
   {id: '2', name:'a'}
];
const ab = courses.find(function(course) {
return course.name === 'b'
});
console.log(ab);
//arrow function
const arrFunc = courses.find(course => course.name === 'b');


//emptying an array;
// 1
let number = [2, 4, 6, 8];
number = [];
//2
number.length = 0;


//concat
let abc = [1, 2, 3];
let cde = [4, 5, 6];

const abcde = abc.concat(cde);
console.log(abcde);

//slice;
const slice = abc.slice(1, 3);
console.log(slice);

//easy way to combine arrays;
const combined = [...abc, 'sing', ...cde];
console.log(combined);

const copied = [...combined];

// for of;
for (number of numbers){
    console.log(number);
};

//forEach()
numbers.forEach((number, index) => console.log(index, number));

//join()

let num = [1, 8, 9, 0];
let joins = num.join(',');
console.log(joins);

//split();

let message = 'My name is Sarah';
let splits = message.split(' ');
console.log(splits);
//reverse();
let reverse = num.reverse();
console.log(reverse);


//sort();

let sort = num.sort();
console.log(sort);

// sort() in object;

const course = [
    { id: 1, name: 'Node.js'},
    { id: 2, name: 'JavaScript'}
];

course.sort(function(a, b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if(nameA < nameB) return -1;
    if(nameA > nameB) return 1;
    return 0
});
console.log(course);
