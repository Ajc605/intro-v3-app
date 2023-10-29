"use client";
import { useTransition } from "react";
import { completeTodo } from "@/utils/actions";

const Todo = ({ todo }) => {
  const [isPending, startTransitions] = useTransition();
  return (
    <div
      className={`border border-white cursor-pointer ${
        todo.compeleted ? "line-through text-grey" : ""
      }`}
      onClick={() => startTransitions(() => completeTodo(todo.id))}
    >
      {todo.content}
    </div>
  );
};

export default Todo;
