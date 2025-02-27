import TodoItem from "./TodoItem";
import { useContext } from "react";
import { TodoContext } from "./TodoContext";

function TodoList() {
    const { todos } = useContext(TodoContext);

  return (
    <div>
      {todos.map(elem => (
        <TodoItem
          key={elem.id}
          id={elem.id}
          title={elem.title}
          completed={elem.completed}
        />
      ))}
    </div>
  );
}

export default TodoList;