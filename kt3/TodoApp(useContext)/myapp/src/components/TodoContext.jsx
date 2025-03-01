import { createContext } from "react";

export const TodoContext = createContext({
    todos: [],
    setTodos: () => {},
    addTodo: () => {},
    changeTodos: () => {},
    deleteTodoByid: () => {}
  });