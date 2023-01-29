"use client";
import { useState, useEffect } from "react";
import { Container, Flex, Heading } from "@chakra-ui/react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { todo } from "@/types/todo";
import { Config } from "@/contants";

const Todo = () => {
  const [todos, setTodos] = useState<todo[]>([]);

  useEffect(() => {
    getTodos().then((data) => {
      setTodos(data.todos);
    });
  }, []);

  const getTodos = async () => {
    const todo = await fetch(`${Config.dev}/todo/list`);
    return todo.json();
  };

  const handleAddTodo = async (name: string) => {
    await fetch(`${Config.dev}/todo/add`, {
      method: "POST",
      body: JSON.stringify({ name }),
    });
    const { todos } = await getTodos();
    setTodos(todos);
  };

  const handleUpdateTodo = async (id: string, isDone: boolean) => {
    await fetch(`${Config.dev}/todo/update`, {
      method: "POST",
      body: JSON.stringify({ id, isDone }),
    });
    const { todos } = await getTodos();
    setTodos(todos);
  };

  const handleDeleteTodo = async (id: string) => {
    await fetch(`${Config.dev}/todo/delete?id=${id}`, {
      method: "DELETE",
    });
    const { todos } = await getTodos();
    setTodos(todos);
  };

  return (
    <Container py={10}>
      <Flex alignItems={"center"} justify="center" direction={"column"}>
        <Heading size="lg">Todo App</Heading>
        <AddTodo handleAddTodo={handleAddTodo} />
        <TodoList
          todos={todos}
          handleDeleteTodo={handleDeleteTodo}
          handleUpdateTodo={handleUpdateTodo}
        />
      </Flex>
    </Container>
  );
};
export default Todo;
