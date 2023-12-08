import "./Login.css";
import {useState} from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Login() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const {email, password} = formData;
  
  return (
      <div className="login-form">
        <div className="login-body">
         
          <label className="title">Login</label>

          <form>
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

            <div className="form-group form-group-p">
              <p>Forgot password?</p>
            </div>
            <div className="form-group form-group-btn">
              <Button variant="outline-info">Login</Button>
            </div>

            <div className="form-group form-group-p">
              <p>Don't have an account? Sign Up</p>
            </div>
          
          </form>
        </div>
      </div>
    );
}
export default Login