import axios from "axios";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  return (
    <div className="container">
      <h1 className="text-center">Create Account</h1>
      <Form className="w-1/2 mx-auto">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>First name</Form.Label>
          <Form.Control type="text" placeholder="John" name="firstName" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Doe" name="lastName" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="johndoe@gmail.com"
            name="email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="*********"
            name="password"
          />
        </Form.Group>
        <p>
          Already have an account? Please <Link to="/">Login</Link>
        </p>
        <Button type="submit" variant="success">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
