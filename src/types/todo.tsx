export type todo = {
  id: "string";
  name: "string";
  isDone: boolean;
};

export type todoList = {
  todos: Array<todo>;
  handleUpdateTodo: (id: string, isDone: boolean) => void;
  handleDeleteTodo: (id: string) => void;
};

export type addTodo = {
  handleAddTodo: (name: string) => void;
};
