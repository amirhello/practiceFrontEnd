import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Put } from "./Fetching";
const queryClient = useQueryClient();

import { useState } from "react";
function Updating({ id }: { id: number }) {
  let [name, setName] = useState<string>("");
  let [price, setPrice] = useState<number>(0);
  let [title, setTitle] = useState<string>("");
  let [count, setCount] = useState<number>(0);

  const mutationPut = useMutation({
    mutationFn: Put,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Product"] });
    },
  });
  function handelUpdata() {
    let obj = { price, title, name, count, id };
    mutationPut.mutate(obj);
  }

  return (
    <div>
      <form action="submit">
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
        />
        <input
          type="number"
          onChange={(e) => setCount(Number(e.target.value))}
          placeholder="count"
        />
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="title"
        />{" "}
        <input
          type="number"
          onChange={(e) => setPrice(Number(e.target.value))}
          placeholder="price"
        />
        <button onClick={() => handelUpdata()}></button>
      </form>
    </div>
  );
}

export default Updating;
