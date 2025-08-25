// JavaScript-övningar för nybörjare

// Del 1: Grundläggande övningar

// 1. Skriv ut en hälsning
// Skriv ett program som skriver ut "Hej världen!" till konsolen.
console.log("Hej världen!");

// 2. Skapa en variabel och tilldela ett värde
// Skapa en variabel `namn` och tilldela den ditt namn. Skriv ut variabeln till konsolen.
let firstName = "Anna";
console.log(namn);

// 3. Använd en if-sats
// Skapa en variabel `ålder`. Om åldern är över 18, skriv ut "Du är vuxen".
let age = 20;
if (ålder > 18) {
  console.log("Du är vuxen");
}

// 4. For-loop som räknar till 10
// Skriv en for-loop som skriver ut siffrorna 1 till 10.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 5. Skapa en funktion
// Skapa en funktion `hälsa` som tar ett namn som argument och skriver ut en hälsning.
function hälsa(namn) {
  console.log("Hej " + namn + "!");
}
hälsa("Anna");

// 6. Arbeta med arrayer
// Skapa en array med tre frukter och skriv ut den första frukten.
let frukter = ["Äpple", "Banan", "Apelsin"];
console.log(frukter[0]);

// 7. Array-loop
// Skriv ut alla frukter i arrayen från föregående övning med en for-loop.
for (let i = 0; i < frukter.length; i++) {
  console.log(frukter[i]);
}

// 8. Skapa ett objekt
// Skapa ett objekt `person` med egenskaperna `namn` och `ålder`. Skriv ut personens namn.
let person = {
  namn: "Anna",
  ålder: 25,
};
console.log(person.namn);

// 9. Ändra ett objekt
// Ändra personens ålder till 30 och skriv ut den nya åldern.
person.ålder = 30;
console.log(person.ålder);

// 10. While-loop
// Skriv en while-loop som räknar upp till 5.
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// 11. Multiplikation
// Skapa en funktion som multiplicerar två tal och returnerar resultatet.
function multiplicera(a, b) {
  return a * b;
}
console.log(multiplicera(3, 4));

// 12. Modulus operator
// Skriv ett program som skriver ut resten när 10 delas med 3.
console.log(10 % 3);

// 13. Strängkonkatenering
// Skriv ett program som kombinerar två strängar och skriver ut resultatet.
let str1 = "Hej";
let str2 = "Världen";
console.log(str1 + " " + str2);

// 14. Jämförelseoperatorer
// Skriv ett program som jämför två nummer och skriver ut om de är lika.
let num1 = 5;
let num2 = 5;
if (num1 === num2) {
  console.log("De är lika");
}

// 15. Switch-sats
// Skriv ett program som använder en switch-sats för att kontrollera värdet av en variabel och skriva ut en motsvarande text.
let dag = 3;
switch (dag) {
  case 1:
    console.log("Måndag");
    break;
  case 2:
    console.log("Tisdag");
    break;
  case 3:
    console.log("Onsdag");
    break;
  default:
    console.log("Okänd dag");
}

// 16. Boolean värde
// Skapa en variabel med ett boolean värde och använd en if-sats för att kontrollera det.
let ärSant = true;
if (ärSant) {
  console.log("Det är sant");
}

// 17. Arbeta med funktioner
// Skapa en funktion som returnerar summan av två tal.
function summa(a, b) {
  return a + b;
}
console.log(summa(5, 7));

// 18. Arbeta med datum
// Skapa ett program som skriver ut dagens datum.
let idag = new Date();
console.log(idag);

// 19. Array-metoder
// Använd metoden `push` för att lägga till ett nytt element i frukt-arrayen och skriv ut den nya arrayen.
frukter.push("Kiwi");
console.log(frukter);

// 20. Objekt-metoder
// Skapa ett objekt med en metod som skriver ut ett meddelande.
let bil = {
  modell: "Volvo",
  starta: function () {
    console.log("Bilen startar");
  },
};
bil.starta();

// Del 2: Felsök övningar

// 1. Syntaxfel: Variabeldeklaration
// Rätta felet i följande kod.
let firstName2 = "Anna";
console.log(firstName2);

// 2. Saknade klamrar
// Fixera den felaktiga if-satsen.
let ålder = 20;
if (ålder > 18) {
  console.log("Du är vuxen");
}

// 3. Odefinierad variabel
// Vad saknas i koden nedan?
let namn = "Anna";
console.log(namn);

// 4. Felaktig funktion
// Korrigera syntaxfelet i följande kod.
function hälsa(namn) {
  console.log("Hej " + namn);
}

// 5. Avslutande semikolon saknas
// Lägg till de saknade semikolonen i följande kod.
let x = 5;
let y = 10;
console.log(x + y);

// 6. Fel i array-index
// Fixa indexfelet i följande kod.
let frukter2 = ["Äpple", "Banan", "Apelsin"];
console.log(frukter[2]);

// 7. Felaktig for-loop
// Rätta felet i följande for-loop.
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// 8. Felaktigt objekt
// Rätta objektsyntaxen.
let bil2 = {
  modell: "Volvo",
  år: 2020,
};

// 9. Strängfel
// Vad saknas i följande kod?
let meddelande = "Hej Världen";
console.log(meddelande);

// 10. Jämförelseoperator
// Rätta felet i följande kod.
let a = 5;
let b = 10;
if (a === b) {
  console.log("De är lika");
}