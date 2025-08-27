/* =========================================
   app.js – omskriven till funktionsstil
   Allt i en fil, redo att delas upp i moduler.
========================================= */

import { add, average } from "./utils/mathUtils.js";
import { capitalize, slugify, formatPercent } from "./utils/utils.js";
import { save, load, clearStorage } from "./services/services.js";
import { renderTodos, renderStateDump } from "./ui-helpers/ui-helpers.js";
import { qs, uid } from "./ui-helpers/helpers.js";
import { initUI } from "./ui-helpers/init.js";

// ---------- State ----------
export let state = {
  todos: [
    { id: uid(), text: "Lära mig ESM", done: false },
    { id: uid(), text: "Bryta ut utils till moduler", done: true },
  ],
};

document.addEventListener("DOMContentLoaded", initUI);
