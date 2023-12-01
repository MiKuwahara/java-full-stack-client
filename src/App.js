import './App.css';
import api from "./api/axiosConfig.js";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout.js"
import Home from "./components/Home.js"
import Header from "./components/header/Header.js"

function App() {

    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        try {
            const response = await api.get("/api/v1/movies");

            console.log(response.data);
            console.log("Hello");

            setMovies(response);

        } catch (error) {
            console.log(error);
        }
    };

    // Execute when the App component first loads
    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home movies={movies}/>}></Route>
                </Route>
            </Routes>

        </div>
    );
}

export default App;
