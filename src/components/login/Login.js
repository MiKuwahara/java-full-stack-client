import "./Login.css";
import { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/axiosConfig"
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { login, reset } from "../../features/auth/authSlice";


function Login() {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { email, password } = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {user, isLoading, isError, isSuccess, message} = useSelector(
        (state) => state.auth
    )

    useEffect(() => {
        if(isError){
            toast.error(message);
        }

        if(isSuccess || user){
            navigate("/Dashboard")
        }

        dispatch(reset());

    }, [user, isError, isSuccess, message, navigate, dispatch]);

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            email,
            password,
        }

        dispatch(login(userData));
        /*
        const API_URL = "/api/v1/users/login";

        try {
            const response = await api.post(API_URL, userData);

            if (response.data) {
                localStorage.setItem("user", JSON.stringify(response.data))
            }
            console.log(response.data)
            navigate("/Dashboard");
            //return response.data

        } catch (error) {
            console.error(error);
        }
        */
    };

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

                    <div className="form-group form-group-p">
                        <p><Link to="/Reset/Password">Forgot password?</Link></p>
                    </div>
                    <div className="form-group form-group-btn">
                        <Button variant="outline-info" onClick={onSubmit}>Login</Button>
                    </div>

                    <div className="form-group form-group-p">
                        <p>Don't have an account? <Link to="/Register">Sign Up</Link></p>
                    </div>

                </form>
            </div>
        </div>
    );
}
export default Login