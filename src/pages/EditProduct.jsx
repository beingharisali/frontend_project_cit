import axios from "axios";
import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

function EditProduct() {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    rating: "",
    review: "",
  });
  const navigate = useNavigate();
  const params = useParams();
  function changeHandler(e) {
    const name = e.target.name;
    const value = e.target.value;
    setProduct({
      ...product,
      [name]: value,
    });
  }
  async function getSingleProduct() {
    const res = await axios.get(
      `${process.env.BACKEND_URL}/api/v1/products/${params.id}`,
    );
    console.log(res);
    setProduct(res.data.data);
  }
  useEffect(() => {
    getSingleProduct();
  }, []);
  async function submitHandler(e) {
    e.preventDefault();
    const res = await axios.patch(
      `${process.env.BACKEND_URL}/api/v1/products/${params.id}`,
      product,
    );
    console.log(res);
    setProduct({
      title: "",
      description: "",
      price: "",
      rating: "",
      review: "",
    });
    toast.success("Product updated successfully");
    navigate("/");
  }
  return (
    <div className="container">
      <h1 className="text-center">Edit Product</h1>
      <Form className="w-1/2 mx-auto" onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Product name"
            value={product.title}
            name="title"
            onChange={changeHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Product Description"
            value={product.description}
            name="description"
            onChange={changeHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Product Price"
            value={product.price}
            name="price"
            onChange={changeHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
          <Form.Label>Rating</Form.Label>
          <Form.Control
            type="number"
            placeholder="Product Rating"
            value={product.rating}
            name="rating"
            onChange={changeHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
          <Form.Label>Review</Form.Label>
          <Form.Control
            type="text"
            placeholder="Client Review"
            value={product.review}
            name="review"
            onChange={changeHandler}
          />
        </Form.Group>
        <Button type="submit" variant="success">
          Edit
        </Button>
      </Form>
    </div>
  );
}

export default EditProduct;
