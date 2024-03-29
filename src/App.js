import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';

import Home from './components/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';
import NotFound from './components/notFound/NotFound';
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import ResetPassword from './components/ResetPassword';
import Dashboard from './components/dashboard/Dashboard';
import Delete from "./pages/DeleteReview";
import DeleteReview from './pages/DeleteReview';

function App() {

  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);


  const getMovies = async () =>{
    
    try
    {

      const response = await api.get("/api/v1/movies");

      setMovies(response.data);

    } 
    catch(err)
    {
      console.log(err);
    }
  }

  const getMovieData = async (movieId) => {
     
    try 
    {
        const response = await api.get(`/api/v1/movies/${movieId}`);

        const singleMovie = response.data;

        setMovie(singleMovie);
      console.log("from app")
      console.log(singleMovie.reviewIds)
        setReviews(singleMovie.reviewIds);
        

    } 
    catch (error) 
    {
      console.error(error);
    }

  }

  useEffect(() => {
    getMovies();
  },[])

  return (
    <div className="App">
      <Header/>

      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home movies={movies} />} ></Route>
            <Route path="/Login" element={<Login />} ></Route>
            <Route path="/Register" element={<Register />} ></Route>
            <Route path="/Dashboard" element={<Dashboard />} ></Route>
            <Route path="/Delete" element={<DeleteReview />} ></Route>
            <Route path="/Reset/Password" element={<ResetPassword />}></Route>
            <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
            <Route path="/Reviews/:movieId" element ={<Reviews getMovieData = {getMovieData} movie={movie} reviews ={reviews} setReviews = {setReviews} />}></Route>
            <Route path="*" element = {<NotFound/>}></Route>
          </Route>
      </Routes>

     

    </div>
  );
}

export default App;