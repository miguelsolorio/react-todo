type Todo = {
  title: string;
  description?: string,
  complete: boolean;
};

type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (newTodo: string) => void