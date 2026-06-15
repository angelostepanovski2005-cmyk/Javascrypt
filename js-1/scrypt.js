let temperature = 25;
if (temperature > 30) {
  console.log("It's hot outside!");
} else {
  console.log("The weather is pleasant.");
}

let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

let age = 20;
let hasLicense = true;
if (age >= 18) {
  if (hasLicense) {
    console.log("You are allowed to drive.");
  } else {
    console.log("You need a license to drive.");
  }
} else {
  console.log("You are too young to drive.");
}

let isRaining = true;
let isCold = false;
if (isRaining && isCold) {
  console.log("Wear a warm raincoat.");
} else if (isRaining && !isCold) {
  console.log("Take an umbrella.");
} else if (!isRaining && isCold) {
  console.log("Wear a jacket.");
} else {
  console.log("Enjoy the nice weather!");
}

let time = 14;
let greeting = time < 12 ? "Good morning!" : "Good afternoon!";
console.log(greeting);

let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}
console.log(`Day ${day} is ${dayName}`);

let x = 15;
let y = 3;

if (x % y === 0) {
  console.log(`${x} is divisible by ${y}`);
} else {
  console.log(`${x} is NOT divisible by ${y}`);
}

let number = 7;

if (number % 2 === 0) {
  console.log(`${number} is even`);
} else {
  console.log(`${number} is odd`);
}

let a = 12;
let b = 4;

let sum = a + b;
let difference = a - b;
let product = a * b;

console.log(`Sum: ${a} + ${b} = ${sum}`);
console.log(`Difference: ${a} - ${b} = ${difference}`);
console.log(`Product: ${a} * ${b} = ${product}`);

function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice"));

function calculate(a, b) {
  return {
    sum: a + b,
    difference: a - b,
    product: a * b,
  };
}
let results = calculate(20, 5);
console.log("Function results:", results);

function isDivisible(dividend, divisor) {
  return dividend % divisor === 0;
}
console.log("Is 10 divisible by 2?", isDivisible(10, 2));
console.log("Is 10 divisible by 3?", isDivisible(10, 3));