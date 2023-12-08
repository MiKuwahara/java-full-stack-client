import "../login/Login.css";
import {useState} from 'react'
import {Link} from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Register() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const {name, email, password, password2} = formData;
  
  return (
      <div className="login-form">
        <div className="login-body">
         
          <label className="title">Register</label>

          <form>
          <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={name}
                placeholder="Enter name"
                onChange={()=>{}}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                value={email}
                placeholder="Enter email"
                onChange={()=>{}}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                placeholder="Enter password"
                onChange={() => {}}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password2">Confirm Password</label>
              <input
                type="password2"
                className="form-control"
                id="password2"
                name="password2"
                value={password2}
                placeholder="Confirm password"
                onChange={() => {}}
              />
            </div>
            

           
            <div className="form-group form-group-btn">
              <Button variant="outline-info">Register</Button>
            </div>

            <div className="form-group form-group-p">
              <p>Already have an account? <Link to="/Login">Sign In</Link></p>
            </div>
          
          </form>
        </div>
      </div>
    );
}
export default Register