import {Link, useNavigate} from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import {Paper} from "@mui/material";

function Hero({movies}){

    const navigate = useNavigate();

    return(
        <div className="movie-carousel-container">
            Welcome!!
            <Carousel>
                {
                    movies.data.map((movie) => (
                        
                            <Paper>
                                <div className="movie-card-container">
                                    <div className="movie-card">
                                        <div className="movie-detail">
                                            <div className="movie-poster">
                                                <img src={movie.poster} alt=""></img>
                                            </div>
                                            <div className="movie-title">
                                                <h4>{movie.title}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                        )
                    )
                }
            </Carousel>
        </div>
    );
};

export default Hero;