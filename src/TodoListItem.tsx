import React from "react";
import "./TodoListItem.css";

interface TodoListItemProps {
  todo: Todo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo }) => {
  return (
    <li>
      <label className={todo.complete ? "complete" : undefined}>
        <input type="checkbox" checked={todo.complete} />
        {todo.description}
      </label>
    </li>
  );
};
