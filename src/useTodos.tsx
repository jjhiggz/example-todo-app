import { useQuery } from "@tanstack/react-query";
import { z } from "zod";

const todoSchema = z.object({
  id: z.number(),
  title: z.string(),
  content: z.string(),
});

const fetchTodos = () => {
  return fetch("http://localhost:3000/todos")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Could not fetch Todos");
      }
      return response.json();
    })
    .then(z.array(todoSchema).parse);
};

export const useTodos = () => {
  const query = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  return {
    query,
  };
};
