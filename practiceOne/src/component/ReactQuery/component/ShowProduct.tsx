import { useQuery } from "@tanstack/react-query";
import Deleting from "./Deleting";
import { Data } from "../AppQuery";
import { Fetching } from "./Fetching";
function ShowProduct() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Product"],
    queryFn: Fetching,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;
  return (
    <div className="flex flex-wrap ">
      {data.map((item: Data) => (
        <div className="w-1/4  border p-2 m-1 border-black">
          <p>{item.count}</p>
          <p>{item.name}</p>
          <p>{item.title}</p>
          <p>{item.price}</p>
          <Deleting id={item.id} />
        </div>
      ))}
    </div>
  );
}

export default ShowProduct;
