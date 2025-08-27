import { qs, uid } from "./helpers.js";
import { renderTodos, renderStateDump } from "./ui-helpers.js";
import { add, average } from "../utils/mathUtils.js";
import { slugify, capitalize } from "../utils/utils.js";
import { load, save } from "../services/services.js";

export let state = {
  todos: [
    { id: uid(), text: "Lära mig ESM", done: false },
    { id: uid(), text: "Bryta ut utils till moduler", done: true },
  ],
};

export function initUI() {
  // Todo
  qs("#todo-add").addEventListener("click", () => {
    const text = qs("#todo-input").value.trim();
    if (!text) return;
    state.todos.push({ id: uid(), text, done: false });
    qs("#todo-input").value = "";
    renderTodos();
  });
  qs("#todo-filter").addEventListener("input", renderTodos);
  qs("#todo-clear").addEventListener("click", () => {
    state.todos = [];
    renderTodos();
  });
  // Calc
  qs("#calc-sum").addEventListener("click", () => {
    const out = add(qs("#num-a").value, qs("#num-b").value);
    qs("#calc-out").textContent = `Summa: ${out}`;
  });
  qs("#calc-avg").addEventListener("click", () => {
    const out = average([qs("#num-a").value, qs("#num-b").value]);
    qs("#calc-out").textContent = `Medel: ${out}`;
  });

  // String utils
  qs("#slugify-btn").addEventListener("click", () => {
    qs("#str-out").textContent = slugify(qs("#str-in").value);
  });
  qs("#capitalize-btn").addEventListener("click", () => {
    qs("#str-out").textContent = capitalize(qs("#str-in").value);
  });

  // Storage
  qs("#dump-state").addEventListener("click", () => renderStateDump());
  qs("#save-state").addEventListener("click", () => {
    save("appState", state);
    renderStateDump("Sparat ✅");
  });
  qs("#load-state").addEventListener("click", () => {
    const loaded = load("appState");
    if (loaded) state = loaded;
    renderTodos();
    renderStateDump("Laddat ✅");
  });

  // Init
  renderTodos();
  renderStateDump();
}
