import { uid } from "./ui-helpers/helpers.js";
import { initUI } from "./ui-helpers/init.js";

// ---------- State ----------
export let state = {
  todos: [
    { id: uid(), text: "Lära mig ESM", done: false },
    { id: uid(), text: "Bryta ut utils till moduler", done: true },
  ],
};

document.addEventListener("DOMContentLoaded", initUI);
