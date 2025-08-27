import uuidv4 from "./node_modules/uuid/dist/esm-browser/v4.js";

const people = [{ name: "Anna" }, { name: "Björn" }, { name: "Celise" }];

console.log(people);

console.log(uuidv4());
console.log(uuidv4());
console.log(uuidv4());
console.log(uuidv4());
console.log(uuidv4());

const peopleWithIds = people.map((person) => ({
  ...person,
  id: uuidv4(),
}));

console.log(peopleWithIds);
// fdaf6966-486d-4b6e-9025-c08ea7cb230d
// [
// { name: 'Anna', id:
// 'ac220fbd-3647-4426-8384-9deddf9cf8ac' },
// { name: 'Björn', id:
// '2109fa06-5b5f-44ce-8ca4-4cab8e2e4556' },
// { name: 'Celise', id:
// '6cd11ac6-3d7c-4659-a089-d2a9a85a3eaa' }
// ]

/*
Demo: Använda npm
x Initiera projekt, npm init
x Installera ett paket, uuid
x Om git repo, lägg till .gitignore
x Använda paket
x Se hur det påverkar sidan (network)
*/
