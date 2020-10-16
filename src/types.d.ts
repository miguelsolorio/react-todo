type Todo = {
  description: string;
  complete: boolean;
};

type ToggleTodo = (selectedTodo: Todo) => void;