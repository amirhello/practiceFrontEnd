import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ShowProduct from "./component/ShowProduct";
export interface Data {
  count: number;
  id: number;
  name: string;
  price: number;
  title: string;
}

function AppQuery() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <ShowProduct />
        {/* <NewProduct idNumber={data.length} /> */}
      </div>
    </QueryClientProvider>
  );
}

export default AppQuery;

// useEffect(() => {
//   async function fetchData() {
//     try {
//       const response = await fetch("http://localhost:3000/items");
//       if (!response.ok) {
//         throw new Error("Error fetching data");
//       }
//       const data = await response.json();
//       console.log(data.items[0]);
//     } catch (error: any) {
//     } finally {
//       console.log(false);
//     }
//   }

//   fetchData();
// });
