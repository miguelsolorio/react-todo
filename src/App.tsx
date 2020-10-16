import React, { useState } from "react";
import { AddTodoForm } from "./AddTodoForm";
import { TodoList } from "./TodoList";
import "./App.css";
import head from "./swanson.png";

const initialTodos: Array<Todo> = [
  { title: "frankness", description: "cut the B.S.", complete: true },
  {
    title: "capitalism",
    description: "God's way of determining who is smart, and who is poor.",
    complete: false,
  },
  {
    title: "facial hair",
    description: "Full, thick and square.",
    complete: false,
  },
  {
    title: "living in the woods",
    description: "Live off the land.",
    complete: false,
  },
  {
    title: "rage",
    description: "One rage every three months is premitted.",
    complete: false,
  },
  {
    title: "crying",
    description: "Acceptable at funerals and the Grand Canyon.",
    complete: false,
  },
  {
    title: "friends",
    description: "One to three is sufficient.",
    complete: false,
  },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodoAction: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          description: todo.description,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== "" &&
      setTodos([
        ...todos,
        { title: newTodo, description: "false", complete: false },
      ]);
  };

  return (
    <React.Fragment>
      <div id="container">
        <img id="head" src={head} alt="Ron Swanson's head" />
        <h1>Swanson List of Greatness</h1>
        <TodoList todos={todos} toggleTodo={toggleTodoAction} />
        <AddTodoForm addTodo={addTodo}></AddTodoForm>
      </div>
    </React.Fragment>
  );
};

export default App;
