const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const h1tag = document.getElementsByTagName('h1');

// console.log(h1)
// console.log(h1tag)

h1.textContent = "<h3>Uppdaterad HTML!</h3>"

p.innerHTML = "<h4>Lorem, <em>ipsum dolor sit amet</em> consectetur adipisicing elit.</h4>";

h1.addEventListener("click", () => {
    console.log("click")
})

p.addEventListener("click", updateBody)

function updateBody() {
    document.querySelector('body').classList.toggle('green')
}

function toggleBtn() {
    document.querySelector('section').classList.toggle('display')
    console.log("klickade på knappen")
}

const btn = document.querySelector('button');
btn.addEventListener('click', toggleBtn)

const number = 1_000_000_000;

console.log(number, 1000000000)
