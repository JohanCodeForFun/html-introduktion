import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

// Tillåt endast anrop från en specifik origin (t.ex. http://127.0.0.1:5500)
app.use(
  cors({
    origin: "http://127.0.0.1:5503", // byt till där din index.html körs ifrån
  })
);

app.get("/api/data", (req, res) => {
  res.json({ message: "Hello from Express with RESTRICTED CORS!" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
