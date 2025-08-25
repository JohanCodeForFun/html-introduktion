async function getData() {
  try {
    const res = await fetch("http://localhost:3000/api/data"); // annan origin
    const data = await res.json();
    document.getElementById("output").textContent = JSON.stringify(
      data,
      null,
      2
    );
  } catch (err) {
    console.error("Error:", err);
  }
}
