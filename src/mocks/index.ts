import { createUid } from "../utils";
import { NormalizedTodos } from "../types";


export const getMockTodos = (strings: string[]) => {
  const todos: NormalizedTodos = {};
  strings.forEach((str, index) => {
    const uid = createUid();
    todos[uid] = {
      id: uid,
      text: str,
      completed: false
    };
  });
  return todos;
};
