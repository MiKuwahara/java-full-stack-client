import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import {logout, reset} from "../../features/auth/authSlice";

const Header = () => {
    //const [user, setUser] = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.auth)

    /*
    useEffect(() => {
        const user = localStorage.getItem("user");

        setUser(user);
    }, []);
    

    function logout(){
        localStorage.removeItem("user");
        const user = localStorage.getItem("user");

        setUser(user);
        navigate("/")
    }
    */

    function login(){
        navigate("/Login")
    }

    function register(){
        navigate("/Register")
    }
    const onLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate("/");
    }
    

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/" style={{ "color": 'gold' }}>
                    <FontAwesomeIcon icon={faVideoSlash} />Gold
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/watchList">Watch List</NavLink>
                    </Nav>
                    {user? (
                        <Button variant="outline-info" onClick={onLogout}>Logout</Button>
                    ) : (
                        <>
                            <Button variant="outline-info" className="me-2" onClick={login}>Login</Button>
                            <Button variant="outline-info" onClick={register}>Register</Button>
                        </>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header