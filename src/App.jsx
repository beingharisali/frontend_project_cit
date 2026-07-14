import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import CreateProduct from "./pages/Create";
import EditProduct from "./pages/EditProduct";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/create" element={<CreateProduct />} />
        <Route path="/products/:id" element={<EditProduct />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
