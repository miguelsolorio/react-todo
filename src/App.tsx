import React from "react";
import { TodoListItem } from "./TodoListItem";

const todos: Array<Todo> = [
  { description: "frankness", complete: true },
  { description: "capitalism", complete: false },
  { description: "facial hair", complete: false },
  { description: "living in the woods", complete: false },
  { description: "rage", complete: false },
];

const App: React.FC = () => {
  return (
    <React.Fragment>
      <h1>Todo list of greatness</h1>
      <TodoListItem todo={todos[0]} />
      <TodoListItem todo={todos[1]} />
      <TodoListItem todo={todos[2]} />
      <TodoListItem todo={todos[3]} />
      <TodoListItem todo={todos[4]} />
    </React.Fragment>
  );
};

export default App;
