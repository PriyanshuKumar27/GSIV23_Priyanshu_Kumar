import React from "react";
import "./Card.css";

const Card = ({ poster_path, title, rating, overview }) => {
  return (
    <div className="card">
      <div className="card-image">
        <div className="wrapper">
          <img
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`}
          />
        </div>
      </div>
      <div className="card-content">
        <div>{title}</div>
        <div>{`Rating ${rating}`}</div>
        <div>{overview}</div>
      </div>
    </div>
  );
};

export default Card;
