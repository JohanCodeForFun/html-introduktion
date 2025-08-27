import { uid } from "./helpers.js";

export let state = {
  todos: [
    { id: uid(), text: "Lära mig ESM", done: false },
    { id: uid(), text: "Bryta ut utils till moduler", done: true },
  ],
};
