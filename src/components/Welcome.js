import React from "react";
import Movie from "./Movie";

const Welcome = (props) => {
  return (
    <React.Fragment>
      <div className="search-div">
        <form onSubmit={props.onSubmitHandler}>
          <input
            className="search"
            type="search"
            placeholder="Search..."
            value={props.searchTerm}
            onChange={props.onChangeHandler}
          />
        </form>
      </div>
      <div className="movie-container">
        {props.movies.length > 0 &&
          props.movies.map((movie) => <Movie key={movie.id} data={movie} />)}
      </div>
    </React.Fragment>
  );
};

export default Welcome;
