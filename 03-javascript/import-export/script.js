/* =========================================
   app.js – omskriven till funktionsstil
   Allt i en fil, redo att delas upp i moduler.
========================================= */

// ---------- State ----------
let state = {
  todos: [
    { id: uid(), text: "Lära mig ESM", done: false },
    { id: uid(), text: "Bryta ut utils till moduler", done: true },
  ],
};

// ---------- Utils ----------
function add(a, b) {
  a = Number(a);
  b = Number(b);
  if (Number.isNaN(a) || Number.isNaN(b)) return NaN;
  return a + b;
}

function average(arr) {
  const nums = arr.map(Number).filter((n) => !Number.isNaN(n));
  return nums.length ? nums.reduce((s, n) => s + n, 0) / nums.length : NaN;
}

function capitalize(s) {
  if (!s) return "";
  return s[0].toUpperCase() + s.slice(1);
}

function slugify(s) {
  return String(s)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function formatPercent(value, total) {
  if (!total) return "0%";
  return Math.round((value / total) * 100) + "%";
}

// ---------- Services ----------
function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
function load(key, fallback = null) {
  const raw = localStorage.getItem(key);
  try {
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}
function clearStorage(key) {
  localStorage.removeItem(key);
}

// ---------- UI Helpers ----------
function renderTodos() {
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

function renderStateDump(note = "") {
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

// ---------- Init ----------
function initUI() {
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

// ---------- Helpers ----------
function qs(sel, root = document) {
  return root.querySelector(sel);
}
function uid() {
  return Math.random().toString(36).slice(2, 9);
}

// ---------- Starta appen ----------
document.addEventListener("DOMContentLoaded", initUI);
