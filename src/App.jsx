import { useState } from 'react';

import './App.css';
import Hero from './Components/Hero';
import Display from './Components/Display';

function App() {
  const [movieList, setMovieList] = useState([]);
  const addMovieToDisplay = (movie) => {
    // check for duplicate movies

    const tempMovies = movieList.filter((item) => item.imdbID !== movie.imdbID);
    setMovieList([...tempMovies, movie]);
  };
  const handleMovieFunc = (imdbID) => {
    // alert(imdbID);
    confirm('Are you sure you want to delete this movie') &&
      setMovieList(movieList.filter((movie) => movie.imdbID !== imdbID));
  };
  return (
    <div className="wrapper">
      {/* hero  section*/}
      <Hero addMovieToDisplay={addMovieToDisplay} />
      {/* Display */}
      <Display movieList={movieList} handleMovieFunc={handleMovieFunc} />
    </div>
  );
}

export default App;
