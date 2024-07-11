import React, { useState, useEffect } from 'react';
import Card from './Card';

const Display = ({ movieList, handleMovieFunc }) => {
  // console.log(movieList);
  const [displayList, setDisplayList] = useState([]);

  useEffect(() => {
    setDisplayList(movieList);
  }, [movieList]);

  const handleFilter = (types) => {
    // alert(types);
    if (types === 'all') {
      return setDisplayList(movieList);
    }
    const filteredMovie = movieList.filter((movie) => movie.types === types);
    setDisplayList(filteredMovie);
  };

  return (
    <div className="container  mt-5 ">
      <div className="bg-dark p-3 rounded">
        <div className="row">
          <div className="col">
            <div className="btn-group" role="group" aria-label="Basic example">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleFilter('all')}
              >
                All
              </button>
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => handleFilter('drama')}
              >
                Drama
              </button>
              <button
                type="button"
                className="btn btn-info"
                onClick={() => handleFilter('action')}
              >
                Action
              </button>
            </div>
            <div className="mt-3 text-light">
              {displayList.length} movies listed
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col d-flex justify-content-around gap-2 flex-wrap">
            {displayList.map((item, i) => (
              <div key={i} className="">
                <Card searchMovie={item} deleteMovie={handleMovieFunc} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
