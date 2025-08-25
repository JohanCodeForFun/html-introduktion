const updatePageForm = document.getElementById("updatePageForm");
// const userInput = document.querySelector("#userInput");
const userInput = updatePageForm
  ? updatePageForm.querySelector("#userInput")
  : null;

updatePageForm.addEventListener("submit", (event) => {
  // förhindrar full page reload
  event.preventDefault();

  console.log("log form:", updatePageForm.elements, event);

  const { userInput } = updatePageForm.elements;

  console.log("log user input:", userInput.value);

  updateHTML(userInput.value);
});

function updateHTML(input) {
  const userOutputSection = document.getElementById("userOutput");

  // återställ user output html varje gång funktion körs
  userOutputSection.innerHTML = "";

  const paragraph = document.createElement("p");
  paragraph.innerHTML = input;

  userOutputSection.appendChild(paragraph);

  console.log("log input in updateHTML:", input);
}

/* 
Example XSS
Prova följande:
<script>alert("hello")</script>
<img src=x onerror=alert("hello")>
<img src="invalid.jpg" onerror="fetch('https://fakestoreapi.com/products/1').then(r=>r.json()).then(data=>alert(data.title)).catch(e=>console.error(e))">
*/

// Example detection
// Detects <script>, <iframe>, <object>, <embed>, inline event handlers (on...), and javascript: URLs
const xssPattern =
  /<\s*\/?\s*(script|iframe|object|embed)\b|on\w+\s*=|javascript:/i;

function isUnsafe(input) {
  return xssPattern.test(input);
}

// usage
if (isUnsafe(userInput)) {
  // reject input or sanitize/escape before inserting into the DOM
  console.warn("Potential XSS detected — input rejected");
} else {
  // safe to proceed (or still escape before injecting)
}
