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
  return (
    <div className="wrapper">
      {/* hero  section*/}
      <Hero addMovieToDisplay={addMovieToDisplay} />
      {/* Display */}
      <Display movieList={movieList} />
    </div>
  );
}

export default App;
