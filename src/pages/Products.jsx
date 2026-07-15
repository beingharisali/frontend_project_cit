import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Products() {
  const [products, setProducts] = useState([]);
  async function fetchProducts() {
    const res = await axios.get(
      `${process.env.VITE_BACKEND_URL}/api/v1/products`,
    );
    console.log(res.data.data);
    setProducts(res.data.data);
  }
  const navigate = useNavigate();
  useEffect(() => {
    fetchProducts();
  }, []);
  async function deleteProduct(id) {
    const res = await axios.delete(
      `${process.env.VITE_BACKEND_URL}/api/v1/products/${id}`,
    );
    console.log(res);
    const newData = products.filter((meriProduct) => meriProduct._id !== id);
    setProducts(newData);
    toast.success("Product deleted successfully");
  }
  return (
    <div className="container">
      <div className="flex justify-between items-center">
        <h1>Products : {products.length}</h1>
        <Button onClick={() => navigate("/create")}>Create</Button>
      </div>
      <div className="products flex flex-wrap gap-4 mt-6">
        {products.map((meriProduct) => {
          return (
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{meriProduct.title}</Card.Title>
                <Card.Text>{meriProduct.description}</Card.Text>
                <Card.Text>{meriProduct.rating}</Card.Text>
                <Card.Text>{meriProduct.review}</Card.Text>
                <Button variant="primary">{meriProduct.price}</Button>
              </Card.Body>
              <Button
                className="m-3"
                variant="danger"
                onClick={() => deleteProduct(meriProduct._id)}
              >
                Remove
              </Button>
              <Button
                className="m-3"
                variant="secondary"
                onClick={() => navigate(`/products/${meriProduct._id}`)}
              >
                Edit
              </Button>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
