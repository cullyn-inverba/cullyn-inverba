// Values and variables
console.log("Values and variables ↓");
const country = "United States";
const continent = "North America";
let population = 328 * 10 ** 6;
console.log(country, continent, population);
console.log("----------");

// Data types
console.log("Data types ↓");
const isIsland = false;
let language;

console.log(typeof isIsland, isIsland);
console.log(typeof population, population);
console.log(typeof country, country);
console.log(typeof language, language);
console.log("----------");

// let, const, and var
language = "english";
// country = "Italy"; <- TypeError assignment to const

// Basic operators
console.log("Basic operators ↓");
console.log((population / 2).toExponential());
console.log(population + 1);
let finlandPop = 6 * 10 ** 6;
console.log(finlandPop >= population);
let averagePop = 33 * 10 ** 6;
console.log(averagePop >= population);
const description = `${country} is in ${continent}, and its ${population.toExponential()} people speak ${language}`;
console.log(description);
console.log("----------");

// Coding challenge 1
console.log("Coding challenge 1 ↓");

function BMI(m, h) {
  return m / h ** 2;
}

let [markHeight, markMass] = [1.77, 74];
let [johnHeight, johnMass] = [1.8, 70];

console.log(BMI(markMass, markHeight));
console.log(BMI(johnMass, johnHeight));

let [markBMI, johnBMI] = [BMI(markMass, markHeight), BMI(johnMass, johnHeight)];

[markHeight, markMass] = [1.69, 78];
[johnHeight, johnMass] = [1.95, 92];

let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

[markHeight, markMass] = [1.88, 95];
[johnHeight, johnMass] = [1.75, 85];

markBMI, (johnBMI = BMI(markMass, markHeight)), BMI(johnMass, johnHeight);

markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

console.log("----------");

// if / else statements

console.log("----------");
