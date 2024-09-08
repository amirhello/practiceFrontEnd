import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Delete } from "./Fetching";

export default function Deleting({ id }: { id: number }) {
  const queryClient = useQueryClient();
  const mutationDelete = useMutation({
    mutationFn: Delete,
    onError: (error) => {
      console.error("Error deleting item:", error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Product"] });
    },
  });

  function handelDelete(id: number) {
    mutationDelete.mutate(id);
  }

  return (
    <div>
      <button onClick={() => handelDelete(id)}>Delete Product</button>
    </div>
  );
}
