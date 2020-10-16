import React, { ChangeEvent, FormEvent, useState } from "react";

interface AddTodoFormProps {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  const enableButton = () => {
    if (!newTodo) {
      return true;
    }
  };

  return (
    <form>
      <input type="text" value={newTodo} onChange={handleChange} />
      <button type="submit" onClick={handleSubmit} disabled={enableButton()}>
        Add Todo
      </button>
    </form>
  );
};
