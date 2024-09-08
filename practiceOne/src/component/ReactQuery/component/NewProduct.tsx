import { useState } from "react";
import { Post } from "./Fetching";
import { useMutation, useQueryClient } from "@tanstack/react-query";
const queryClient = useQueryClient();

function NewProduct({ idNumber }: { idNumber: number }) {
  let [name, setName] = useState<string>("");
  let [price, setPrice] = useState<number>(0);
  let [title, setTitle] = useState<string>("");
  let [count, setCount] = useState<number>(0);
  const mutationPut = useMutation({
    mutationFn: Post,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Product"] });
    },
  });
  function handelPost() {
    let id = idNumber;
    let obj = { price, title, name, count, id };
    mutationPut.mutate(obj);
  }
  if (mutationPut.isError) {
    return <>You have some erorr in creat new Product {mutationPut.error}</>;
  }
  if (mutationPut.isPending) {
    return <>...</>;
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
        <button onClick={() => handelPost()}>creat a new product</button>
      </form>
    </div>
  );
}

export default NewProduct;
