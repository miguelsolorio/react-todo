import React, { useState } from "react";
import { AddTodoForm } from "./AddTodoForm";
import { TodoList } from "./TodoList";

const initialTodos: Array<Todo> = [
  { description: "frankness", complete: true },
  { description: "capitalism", complete: false },
  { description: "facial hair", complete: false },
  { description: "living in the woods", complete: false },
  { description: "rage", complete: false },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodoAction: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { description: newTodo, complete: false }]);
  };

  return (
    <React.Fragment>
      <h1>Todo list of greatness</h1>
      <TodoList todos={todos} toggleTodo={toggleTodoAction} />
      <AddTodoForm addTodo={addTodo}></AddTodoForm>
    </React.Fragment>
  );
};

export default App;
