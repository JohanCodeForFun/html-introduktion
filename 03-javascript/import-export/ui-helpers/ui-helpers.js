import { state } from "./init.js";
import { qs } from "./helpers.js";
import { formatPercent } from "../utils/utils.js";

export function renderTodos() {
  const list = qs("#todo-list");
  list.innerHTML = "";
  const filter = qs("#todo-filter").value.toLowerCase();

  const items = state.todos.filter((t) =>
    t.text.toLowerCase().includes(filter)
  );
  items.forEach((t) => {
    const li = document.createElement("li");
    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.checked = t.done;
    cb.addEventListener("change", () => {
      t.done = cb.checked;
      renderTodos();
    });

    const span = document.createElement("span");
    span.textContent = t.text;
    if (t.done) span.style.textDecoration = "line-through";

    const del = document.createElement("button");
    del.textContent = "Ta bort";
    del.addEventListener("click", () => {
      state.todos = state.todos.filter((x) => x.id !== t.id);
      renderTodos();
    });

    li.append(cb, span, del);
    list.append(li);
  });

  // Stats
  const done = state.todos.filter((t) => t.done).length;
  const total = state.todos.length;
  qs("#todo-stats").textContent = `Klart: ${done}/${total} (${formatPercent(
    done,
    total
  )})`;
}

export function renderStateDump(note = "") {
  const dump = {
    ...state,
    meta: {
      count: state.todos.length,
      time: new Date().toLocaleTimeString("sv-SE"),
    },
  };
  qs("#state-out").textContent =
    (note ? `// ${note}\n` : "") + JSON.stringify(dump, null, 2);
}
