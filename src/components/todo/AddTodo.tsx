"use client";
import { useState } from "react";
import { Input, Button, Flex, useToast } from "@chakra-ui/react";
import { addTodo } from "@/types/todo";

const AddTodo = ({ handleAddTodo }: addTodo) => {
  const toast = useToast();
  const [todo, setTodo] = useState("");

  const handleChange = (e: any) => {
    setTodo(e.target.value);
  };

  const handleClick = () => {
    if (!todo.trim()) {
      toast({
        title: "Name Required",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else {
      handleAddTodo(todo);
    }
  };

  return (
    <Flex py={10} gap={4}>
      <Input size="lg" onChange={handleChange} />
      <Button colorScheme={"messenger"} size="lg" onClick={handleClick}>
        Add
      </Button>
    </Flex>
  );
};
export default AddTodo;
