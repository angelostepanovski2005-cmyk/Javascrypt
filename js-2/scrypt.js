const book = {
  title: "1984",
  author: "George Orwell",
  year: 1949,
  genre: "Dystopian"
};

const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  color: "Blue",
  horsepower: 203
};

const student = {
  firstName: "Ana",
  lastName: "Petrova",
  age: 21,
  indexNumber: "12345",
  faculty: "Computer Science"
};

function printObject(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`${key}: ${obj[key]}`);
    }
  }
  console.log("-------------------");
}

console.log("Секој втор непарен број од 1 до 100:");
for (let i = 1; i <= 100; i += 4) {
  console.log(i);
}

console.log("Сите непарни броеви од 1 до 50:");
for (let i = 1; i <= 50; i += 2) {
  console.log(i);
}

const cities = ["Скопје", "Белград", "Атина", "Софија", "Тирана"];

const countries = [
  "Македонија",
  "Србија",
  "Грција",
  "Бугарија",
  "Албанија",
  "Италија",
  "Германија",
  "Франција",
  "Шпанија",
  "Португалија"
];

console.log("Градови:");
for (let i = 0; i < cities.length; i++) {
  console.log(cities[i]);
}

console.log("Држави:");
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i]);
}

const objects = [book, car, student];
console.log("Детали за објектите:");
for (let i = 0; i < objects.length; i++) {
  printObject(objects[i]);
}