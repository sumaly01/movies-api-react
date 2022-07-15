import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 6) {
    return "orange";
  } else {
    return "red";
  }
};

const Movie = (props) => {
  return (
    <div className="movie">
      <img
        src={
          props.data.poster_path
            ? IMG_API + props.data.poster_path
            : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=859&q=80"
        }
        alt={props.data.title}
      />
      <div className="movie-info">
        <h3>{props.data.title}</h3>
        <span className={`tag ${setVoteClass(props.data.vote_average)}`}>
          {props.data.vote_average}
        </span>
      </div>
      <div className="movie-over">
        <h2>Overview:</h2>
        <p>{props.data.overview}</p>
      </div>
    </div>
  );
};

export default Movie;
