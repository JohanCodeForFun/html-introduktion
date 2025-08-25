// DEMO: Funktioner & Objekt
// x Skapa greeting funktion
// • Skapa funktion för addition
// • Skapa en array som innehåller objekt med 3 properties.
// Exempelvis people (array) som innehåller:
// • person där varje person har:
// • förnamn,
// • ålder,
// • Flera fritidsintressen (array)

function greetings(input = "gäst", isAdmin) {
    if (isAdmin === true) {
        return "Välkommen Admin, " + input + ".";
    }

    return "Välkommen, " + input + ".";
}


const arrayNumbers = [900, 700, 500, 200, 100n, 0]

console.log(arrayNumbers)


console.log(greetings("Kalle Anka", undefined))

function mathAdd(num1, num2 = 100) {
    return num1 + num2
}

// console.log(mathAdd(10))

const peopleList = [
    {name: "Lisa", hobby: "Skateboarding", location: "Stockholm"},
    {name: "Lisa", hobby: "Skateboarding", location: "Stockholm"},
    {name: "Lisa", hobby: "Skateboarding", location: "Stockholm"},
    {name: "Lisa", hobby: "Skateboarding", location: "Stockholm"},
    {name: "Lisa", hobby: "Skateboarding", location: "Stockholm"},
    {name: "Lisa", hobby: "Skateboarding", location: "Stockholm"},
    {name: "Lisa", hobby: "Skateboarding", location: "Stockholm"}
]




// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 

function greet(name) {
    return "Hej, " + name + "!";
}

// console.log(greet("Kalle Anka"))


function add(num1, num2) {
    return num1 + num2
}

// console.log(add(1, 2))


const numberValues = [1, 2]

function addNumbers(numbers) {
    return numbers[0] + numbers[1]
}


// console.log(addNumbers(numberValues))


function logger(value) {
    console.log(value)
}

// logger(addNumbers(numberValues))
// logger(add(2,3))