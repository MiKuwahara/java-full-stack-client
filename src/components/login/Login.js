import "./Login.css";
import React from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Login() {
  return (
    <div className="login-form">
      <div className="login-body">
      <h2 className="title">Login</h2>
      <Form>
        <Form.Group className="mb-3" >
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email"></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password"></Form.Control>
        </Form.Group>

        <p>Forgot password?</p>

        <Button variant="outline-info" onClick={() => { }}>Login</Button>

        <p>Don't have an account? Sign Up</p>
      </Form>
      </div>
    </div>
  )
}

export default Login