import './Hero.css';
import {useState, useEffect} from "react";
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import {Link, useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';


const Hero = ({movies}) => {

    const [user, setUser] = useState();

    const navigate = useNavigate();

    function reviews(movieId)
    {
        navigate(`/Reviews/${movieId}`);
    }

    function login(){
        navigate("/Login")
    }


    // execute when program first run
    // this will get the "user" from local storage and 
    // put it in state user
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')));
    },[]);
    

    function isLogin(){
        // Get user rom localStorage
        const user = JSON.parse(localStorage.getItem('user'))
        setUser(user);
    }
    
  return (
    <div className ='movie-carousel-container'>
      <Carousel>
        {
            movies?.map((movie) =>{
                return(
                    <Paper key={movie.imdbId}>
                        <div className = 'movie-card-container'>
                            <div className="movie-card" style={{"--img": `url(${movie.backdrops[0]})`}}>
                                <div className="movie-detail">
                                    <div className="movie-poster">
                                        <img src={movie.poster} alt="" />
                                    </div>
                                    <div className="movie-title">
                                        <h4>{movie.title}</h4>
                                    </div>
                                    <div className="movie-buttons-container">
                                        <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                            <div className="play-button-icon-container">
                                                <FontAwesomeIcon className="play-button-icon"
                                                    icon = {faCirclePlay}
                                                />
                                            </div>
                                        </Link>
                                        
                                        {/*if user exists (already login),
                                        they will be able to post a review on a movie,
                else will be rerouted to login page to login (or register) */}
                                        { user? (
                                             <div className="movie-review-button-container">
                                             <Button variant ="info" onClick={() => reviews(movie.imdbId)} >Reviews</Button>
                                         </div>
                                        ):(
                                            <div className="movie-review-button-container">
                                            <Button variant ="info" onClick={() => login()} >Reviews</Button>
                                            </div>
                                        )

                                        }
                                       
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Paper>
                )
            })
        }
      </Carousel>
    </div>
  )
}

export default Hero