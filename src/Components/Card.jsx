import React from 'react';

const Card = () => {
  const Poster = 'https://www.omdbapi.com/src/poster.jpg';
  return (
    <div className="container">
      <div className="row movie-card-item border rounded text-dark p-3">
        <div className="col-md">
          <img src={Poster} alt="" />
        </div>
        <div className="col-md">
          <h3>Movie Name</h3>
          <p>Rating</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <div className="d-flex justify-content-between">
            <button className="btn btn-warning">Drama</button>
            <button className="btn btn-info">Action</button>
          </div>
          <div className="d-grid mt-3">
            <button className=" btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
