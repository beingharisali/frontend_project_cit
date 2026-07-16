import axios from "axios";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({
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
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/users/login`,
        user,
      );
      console.log(res);
      setUser({
        email: "",
        password: "",
      });
      toast.success("User logged in successfully");
      navigate("/products");
    } catch (error) {
      toast.error("Error in logged in");
    }
  }
  return (
    <div className="container">
      <h1 className="text-center">Login here</h1>
      <Form className="w-1/2 mx-auto" onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="johndoe@gmail.com"
            name="email"
            value={user.email}
            onChange={changeHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
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
          Don't have an account? Please <Link to="/sign-up">Create</Link>
        </p>
        <Button type="submit" variant="success">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
