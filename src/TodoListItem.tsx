import React from "react";
import "./TodoListItem.css";

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleTodo,
}) => {
  return (
    <li>
      <label className={todo.complete ? "complete" : undefined}>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => toggleTodo(todo)}
        />
        <div className="text">
          <span className="title">{todo.title}</span>
          <span className="description">{todo.description}</span>
        </div>
      </label>
    </li>
  );
};
