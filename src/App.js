import './App.css';
import api from "./api/axiosConfig.js";
import { useState, useEffect } from "react";

function App() {

    const [movies, setMovies] = useState();

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

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div className="App">

        </div>
    );
}

export default App;
