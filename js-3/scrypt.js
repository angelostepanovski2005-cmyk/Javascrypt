const cities = [
  { name: "Skopje", population: 600000 },
  { name: "Athens", population: 3100000 },
  { name: "Amsterdam", population: 900000 },
  { name: "Ankara", population: 5300000 },
  { name: "Tokyo", population: 14000000 },
  { name: "Alexandria", population: 5200000 },
];

const sortedByPopulation = [...cities].sort(
  (a, b) => b.population - a.population,
);

const topThreeCities = sortedByPopulation.slice(0, 3);

const filteredCities = cities.filter(
  (city) => city.name.startsWith("A") && city.population > 1000000,
);

const averagePopulation =
  cities.reduce((sum, city) => sum + city.population, 0) / cities.length;

console.log("Подредени по популација:", sortedByPopulation);
console.log("Трите најнаселени:", topThreeCities);
console.log("Почнуваат на 'А' и над 1м жители:", filteredCities);
console.log("Просек на жители:", averagePopulation);
