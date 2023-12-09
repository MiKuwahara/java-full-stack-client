import "../login/Login.css";
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/axiosConfig"
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Register() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
    });

    const { name, email, password, password2 } = formData;

    const navigate = useNavigate();

    const onChange = (e) => {

        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        // Check both passwords are equal for confirmation
        if (password != password2){
            alert("Passwords do not match");
        }else {
            const userData = {
                name,
                email,
                password,
            }

            const API_URL = "/api/v1/users/signup";

            try {
                const response = await api.post(API_URL, userData);

                if (response.data) {
                    localStorage.setItem("user", JSON.stringify(response.data))
                }
                console.log(response.data)
                return response.data
            } catch (error) {
                console.error(error);
            }


        }
    }

        return (
            <div className="login-form">
                <div className="login-body">

                    <label className="title">Register</label>

                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={name}
                                placeholder="Enter name"
                                onChange={onChange}
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
                                onChange={onChange}
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
                                onChange={onChange}
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
                                onChange={onChange}
                            />
                        </div>



                        <div className="form-group form-group-btn">
                            <Button variant="outline-info" onClick={onSubmit}>Register</Button>
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