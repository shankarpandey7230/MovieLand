import React from 'react';

const Card = ({ searchMovie, deleteMovie, handleListAdd }) => {
  const { Poster, Title, imdbRating, Plot, types, imdbID } = searchMovie;
  console.log(searchMovie);
  //   const Poster = 'https://www.omdbapi.com/src/poster.jpg';
  return (
    <div className="container">
      <div className="row movie-card-item border rounded text-dark p-3">
        <div className="col-md">
          <img src={Poster} alt="" />
        </div>
        <div className="col-md">
          <h3>{Title}</h3>
          <p>Rating:{imdbRating}</p>
          <p>{Plot?.slice(0, 50)}...</p>
          {!types && (
            <div className="d-flex justify-content-between gap-2">
              <button
                className="btn btn-warning flex-grow-1"
                onClick={() => handleListAdd('drama')}
              >
                Drama
              </button>
              <button
                className="btn btn-info flex-grow-1"
                onClick={() => handleListAdd('action')}
              >
                Action
              </button>
            </div>
          )}

          <div className="d-grid mt-3">
            <button
              onClick={() => deleteMovie(imdbID)}
              className=" btn btn-danger"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
