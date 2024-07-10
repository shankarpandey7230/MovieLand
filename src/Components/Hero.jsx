import React, { useEffect, useState } from 'react';
import Card from './Card';
import { fetchFromAPI } from '../utils/axios';
import { randomChar } from '../utils/random';

const Hero = () => {
  const [searchMovie, setSearchMovie] = useState({});
  const [bgImg, setBgImg] = useState('');

  useEffect(() => {
    fetchMovies(randomChar());
  }, []);

  const fetchMovies = async (str) => {
    const movie = await fetchFromAPI(str);
    // console.log(movie);
    setSearchMovie(movie);
    setBgImg(movie.Poster);
  };
  const movieStyle = {
    backgroundImage: `url(${bgImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '60vh',
  };
  return (
    <div>
      <nav className="py-3 text-primary fixed-top">
        <h2 className="container">MovieLand</h2>
      </nav>
      <div
        className="hero d-flex justify-content-center align-items-center text-white "
        style={movieStyle}
      >
        <div className="hero-content">
          <div className="form-center">
            <div className="text-center">
              <h1>Search for your movies</h1>
              <p>Know more about your movie of choice.....</p>
            </div>
          </div>
          <div className="input-group my-5">
            <input
              type="text"
              className="form-control"
              placeholder="search for your movies"
              aria-label="Movies name"
              aria-describedby="button-addon2"
            />
            <button
              className="btn  btn-danger"
              type="button"
              id="button-addon2"
            >
              Submit
            </button>
          </div>
          <div className="movie-card-display`">
            <Card searchMovie={searchMovie} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
