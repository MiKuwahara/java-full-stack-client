import { Link, useNavigate } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import './Hero.css';

function Hero({ movies }) {

    const navigate = useNavigate();

    console.log(movies.data);

    return (
        <div className="movie-carousel-container">
            <Carousel>
                {
                    movies.data?.map((movie) => (

                        <Paper key={movie.imdbId}>
                            <div className='movie-card-container'>
                                <div className="movie-card" style={{ "--img": `url(${movie.backdrops[0]})` }}>
                                    <div className="movie-detail">
                                        <div className="movie-poster">
                                            <img src={movie.poster} alt="" />
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