const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

// فعال کردن CORS برای همه درخواست‌ها
app.use(cors());

// Middleware برای پارس کردن داده‌های JSON
app.use(express.json());

// داده‌های نمونه برای تست
let items = [
  {
    id: 1,
    price: 29.99,
    title: "Wireless Headphones",
    name: "Headphone X",
    count: 50,
  },
  {
    id: 2,
    price: 49.99,
    title: "Bluetooth Speaker",
    name: "Speaker Y",
    count: 30,
  },
  {
    id: 3,
    price: 19.99,
    title: "USB Charging Cable",
    name: "Cable Z",
    count: 100,
  },
  { id: 4, price: 99.99, title: "Smartwatch", name: "Watch A", count: 20 },
  { id: 5, price: 39.99, title: "Laptop Stand", name: "Stand B", count: 15 },
  { id: 6, price: 89.99, title: "Gaming Mouse", name: "Mouse C", count: 25 },
  { id: 7, price: 129.99, title: "4K Monitor", name: "Monitor D", count: 12 },
  { id: 8, price: 14.99, title: "Mouse Pad", name: "Pad E", count: 75 },
  { id: 9, price: 24.99, title: "Keyboard", name: "Keyboard F", count: 40 },
  {
    id: 10,
    price: 59.99,
    title: "External Hard Drive",
    name: "Drive G",
    count: 18,
  },
  { id: 11, price: 9.99, title: "Phone Case", name: "Case H", count: 60 },
  {
    id: 12,
    price: 14.99,
    title: "Screen Protector",
    name: "Protector I",
    count: 80,
  },
  {
    id: 13,
    price: 79.99,
    title: "Portable Charger",
    name: "Charger J",
    count: 22,
  },
  { id: 14, price: 39.99, title: "Desk Lamp", name: "Lamp K", count: 28 },
  { id: 15, price: 49.99, title: "Smart Home Hub", name: "Hub L", count: 14 },
  { id: 16, price: 89.99, title: "Action Camera", name: "Camera M", count: 10 },
  { id: 17, price: 29.99, title: "VR Headset", name: "Headset N", count: 35 },
  {
    id: 18,
    price: 69.99,
    title: "Wireless Router",
    name: "Router O",
    count: 20,
  },
  { id: 19, price: 59.99, title: "Smart Plug", name: "Plug P", count: 45 },
  {
    id: 20,
    price: 99.99,
    title: "Bluetooth Earbuds",
    name: "Earbuds Q",
    count: 16,
  },
];

// GET - دریافت همه آیتم‌ها
app.get("/items", (req, res) => {
  res.json({ items });
});

// GET - دریافت یک آیتم خاص
app.get("/items/:id", (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id));
  if (item) {
    res.json(item);
  } else {
    res.status(404).send("Item not found");
  }
});

// POST - ایجاد یک آیتم جدید
app.post("/items", (req, res) => {
  const newItem = {
    id: items.length + 1,
    ...req.body,
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

// PUT - بروزرسانی یک آیتم
app.put("/items/:id", (req, res) => {
  const index = items.findIndex((i) => i.id === parseInt(req.params.id));
  if (index !== -1) {
    items[index] = { id: parseInt(req.params.id), ...req.body };
    res.json(items[index]);
  } else {
    res.status(404).send("Item not found");
  }
});

// DELETE - حذف یک آیتم
app.delete("/items/:id", (req, res) => {
  console.log("Deleting item with id:", req.params.id); // اضافه کردن برای بررسی
  items = items.filter((i) => i.id !== parseInt(req.params.id));
  res.status(204).send();
});

// شروع به کار سرور
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
