"use client";
import {
  VStack,
  HStack,
  StackDivider,
  Text,
  Button,
  Checkbox,
  Flex,
} from "@chakra-ui/react";
import { todoList } from "@/types/todo";

const TodoList = ({ todos, handleDeleteTodo, handleUpdateTodo }: todoList) => {
  const deleteClick = (id: string) => {
    handleDeleteTodo(id);
  };

  const updateTodo = (id: string, isDone: boolean) => {
    handleUpdateTodo(id, isDone);
  };

  return (
    <VStack
      divider={<StackDivider />}
      borderColor="gray.100"
      borderWidth="2px"
      p="5"
      borderRadius="lg"
      w="100%"
      alignItems="stretch"
    >
      {todos?.map((todo) => (
        <HStack key={todo.id} spacing={8} w="100%">
          <Checkbox
            checked={todo.isDone}
            onChange={(e) => updateTodo(todo.id, e.target.checked)}
          />
          <Text>{todo.name}</Text>
          <Flex flex={1} justify={"end"}>
            <Button onClick={() => deleteClick(todo.id)}>Delete</Button>
          </Flex>
        </HStack>
      ))}
    </VStack>
  );
};
export default TodoList;
