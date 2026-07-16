import axios from "axios";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  function changeHandler(e) {
    const name = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  }
  async function submitHandler(e) {
    e.preventDefault();
    const res = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/v1/users/sign-up`,
      user,
    );
    console.log(res);
    setUser({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
    toast.success("User registered successfully");
    navigate("/products");
  }
  return (
    <div className="container">
      <h1 className="text-center">Create Account</h1>
      <Form className="w-1/2 mx-auto" onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>First name</Form.Label>
          <Form.Control
            type="text"
            placeholder="John"
            name="firstName"
            value={user.firstName}
            onChange={changeHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Doe"
            name="lastName"
            value={user.lastName}
            onChange={changeHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="johndoe@gmail.com"
            name="email"
            value={user.email}
            onChange={changeHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="*********"
            name="password"
            value={user.password}
            onChange={changeHandler}
          />
        </Form.Group>
        <p>
          Already have an account? Please <Link to="/">Login</Link>
        </p>
        <Button type="submit" variant="success">
          Register
        </Button>
      </Form>
    </div>
  );
}

export default Register;
