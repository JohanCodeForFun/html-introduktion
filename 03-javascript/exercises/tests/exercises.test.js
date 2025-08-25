// add.test.js
const add = require("../solutions/add");

test("add 1 + 2 to get 3", () => {
  expect(add(1, 2)).toBe(3);
});

// greet.test.js
const greet = require("../solutions/greet");

test('greet "Anna" to get "Hello Anna!"', () => {
  expect(greet("Anna")).toBe("Hello Anna!");
});

// isAdult.test.js
const isAdult = require("../solutions/isAdult");

test("isAdult 20 to get true", () => {
  expect(isAdult(20)).toBe(true);
});

test("isAdult 18 to get false", () => {
  expect(isAdult(18)).toBe(false);
});

// getFruits.test.js
const getThreeFruits = require("../solutions/getThreeFruits");

test("getThreeFruits returns an array with three fruits", () => {
  const fruits = ["Apple", "Banana", "Orange", "Kiwi"];
  
  expect(getThreeFruits(fruits)).toEqual(["Apple", "Banana", "Orange"]);
});

// addFruit.test.js
const addFruit = require("../solutions/addFruit");

test("addFruit adds a fruit to the array", () => {
  const list = ["Apple", "Banana"];

  expect(addFruit(list, "Orange")).toEqual([
    "Apple",
    "Banana",
    "Orange",
  ]);
});

// removeFruit.test.js
// const removeFruit = require("../solutions/removeFruit");

test.skip("removeFruit removes a fruit from the array", () => {
  expect(removeFruit(["Apple", "Banana", "Orange"], "Banana")).toEqual([
    "Apple",
    "Orange",
  ]);
});

// todayDate.test.js
// const todayDate = require("../solutions/todayDate");

test.skip("todayDate returns today's date", () => {
  const today = new Date().toDateString();
  expect(todayDate()).toBe(today);
});

// isEven.test.js
// const isEven = require("../solutions/isEven");

test.skip("isEven 4 to get true", () => {
  expect(isEven(4)).toBe(true);
});

test.skip("isEven 5 to get false", () => {
  expect(isEven(5)).toBe(false);
});

// toUpperCase.test.js
// const toUpperCase = require("../solutions/toUpperCase");

test.skip('toUpperCase "hello" to get "HELLO"', () => {
  expect(toUpperCase("hello")).toBe("HELLO");
});

// stringLength.test.js
// const stringLength = require("../solutions/stringLength");

test.skip('stringLength "hello" to get 5', () => {
  expect(stringLength("hello")).toBe(5);
});

// maxNumber.test.js
// const maxNumber = require("../solutions/maxNumber");

test.skip("maxNumber [1, 2, 3] to get 3", () => {
  expect(maxNumber([1, 2, 3])).toBe(3);
});

// minNumber.test.js
// const minNumber = require("../solutions/minNumber");

test.skip("minNumber [1, 2, 3] to get 1", () => {
  expect(minNumber([1, 2, 3])).toBe(1);
});

// uniqueValues.test.js
// const uniqueValues = require("../solutions/uniqueValues");

test.skip("uniqueValues [1, 2, 2, 3] to get [1, 2, 3]", () => {
  expect(uniqueValues([1, 2, 2, 3])).toEqual([1, 2, 3]);
});

// sortArray.test.js
// const sortArray = require("../solutions/sortArray");

test.skip("sortArray [3, 1, 2] to get [1, 2, 3]", () => {
  expect(sortArray([3, 1, 2])).toEqual([1, 2, 3]);
});

// containsSubstring.test.js
// const containsSubstring = require("../solutions/containsSubstring");

test.skip('containsSubstring "hello world" and "world" to get true', () => {
  expect(containsSubstring("hello world", "world")).toBe(true);
});

test.skip('containsSubstring "hello world" and "goodbye" to get false', () => {
  expect(containsSubstring("hello world", "goodbye")).toBe(false);
});

// greaterThan.test.js
// const greaterThan = require("../solutions/greaterThan");

test.skip("greaterThan [1, 2, 3, 4] and 2 to get [3, 4]", () => {
  expect(greaterThan([1, 2, 3, 4], 2)).toEqual([3, 4]);
});

// lessThan.test.js
// const lessThan = require("../solutions/lessThan");

test.skip("lessThan [1, 2, 3, 4] and 3 to get [1, 2]", () => {
  expect(lessThan([1, 2, 3, 4], 3)).toEqual([1, 2]);
});

// between.test.js
// const between = require("../solutions/between");

test.skip("between [1, 2, 3, 4, 5] and 2, 4 to get [3]", () => {
  expect(between([1, 2, 3, 4, 5], 2, 4)).toEqual([3]);
});

// squares.test.js
// const squares = require("../solutions/squares");

test.skip("squares [1, 2, 3] to get [1, 4, 9]", () => {
  expect(squares([1, 2, 3])).toEqual([1, 4, 9]);
});

// multiplyBy.test.js
// const multiplyBy = require("../solutions/multiplyBy");

test.skip("multiplyBy [1, 2, 3] and 2 to get [2, 4, 6]", () => {
  expect(multiplyBy([1, 2, 3], 2)).toEqual([2, 4, 6]);
});