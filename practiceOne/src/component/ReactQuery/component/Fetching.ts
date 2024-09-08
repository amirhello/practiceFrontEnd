// --------------------------Fetching-------------------------------
export async function Fetching() {
  const response = await fetch("http://localhost:3000/items");
  console.log("fetch is runnig");
  if (!response.ok) {
    throw new Error("Error fetching data");
  }
  // console.log(response);
  const data = await response.json();
  // console.log(data.items);
  return data.items; // استخراج آرایه items
}

export async function Delete(id: number) {
  const response = await fetch(`http://localhost:3000/items/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete the item");
  }

  // اگر پاسخ دارای وضعیت 204 بود، نیازی به تجزیه JSON نیست
  if (response.status === 204) {
    return; // یا return null، بر اساس نیاز شما
  }

  // اگر پاسخ دارای محتوای JSON باشد، تجزیه آن را انجام دهید
  return response.json();
}
export async function Put({
  price,
  title,
  name,
  count,
  id,
}: {
  price: number;
  title: string;
  name: string;
  count: number;
  id: number;
}) {
  const updatedProduct = { price, title, name, count, id };
  const response = await fetch(`http://localhost:3000/items/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedProduct),
  });

  if (!response.ok) {
    throw new Error("Error updating data");
  }

  return response.json();
}

export async function Post({
  price,
  title,
  name,
  count,
  id,
}: {
  price: number;
  title: string;
  name: string;
  count: number;
  id: number;
}) {
  const newProduct = { price, title, name, count, id };
  const response = await fetch("http://localhost:3000/items", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newProduct),
  });

  if (!response.ok) {
    throw new Error("Error posting data");
  }

  return response.json();
}
