// add.js
function add(a, b) {
  return a + b;
}
module.exports = add;

// greet.js
function greet(name) {
  return `Hello ${name}!`;
}
module.exports = greet;

// isAdult.js
function isAdult(age) {
  return age > 18;
}
module.exports = isAdult;

// getFruits.js
function getFruits() {
  return ["Apple", "Banana", "Orange"];
}
module.exports = getFruits;

// addFruit.js
function addFruit(fruits, fruit) {
  fruits.push(fruit);
  return fruits;
}
module.exports = addFruit;

// removeFruit.js
function removeFruit(fruits, fruit) {
  const index = fruits.indexOf(fruit);
  if (index > -1) {
    fruits.splice(index, 1);
  }
  return fruits;
}
module.exports = removeFruit;

// todayDate.js
function todayDate() {
  return new Date().toDateString();
}
module.exports = todayDate;

// isEven.js
function isEven(number) {
  return number % 2 === 0;
}
module.exports = isEven;

// toUpperCase.js
function toUpperCase(text) {
  return text.toUpperCase();
}
module.exports = toUpperCase;

// stringLength.js
function stringLength(text) {
  return text.length;
}
module.exports = stringLength;

// maxNumber.js
function maxNumber(numbers) {
  return Math.max(...numbers);
}
module.exports = maxNumber;

// minNumber.js
function minNumber(numbers) {
  return Math.min(...numbers);
}
module.exports = minNumber;

// uniqueValues.js
function uniqueValues(arr) {
  return [...new Set(arr)];
}
module.exports = uniqueValues;

// sortArray.js
function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}
module.exports = sortArray;

// containsSubstring.js
function containsSubstring(str, substr) {
  return str.includes(substr);
}
module.exports = containsSubstring;

// greaterThan.js
function greaterThan(arr, value) {
  return arr.filter((number) => number > value);
}
module.exports = greaterThan;

// lessThan.js
function lessThan(arr, value) {
  return arr.filter((number) => number < value);
}
module.exports = lessThan;

// between.js
function between(arr, min, max) {
  return arr.filter((number) => number > min && number < max);
}
module.exports = between;

// squares.js
function squares(arr) {
  return arr.map((number) => number * number);
}
module.exports = squares;

// multiplyBy.js
function multiplyBy(arr, value) {
  return arr.map((number) => number * value);
}
module.exports = multiplyBy;