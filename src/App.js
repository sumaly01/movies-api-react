import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";

import MainHeader from "./components/MainHeader";
import Welcome from "./components/Welcome";
import Aboutus from "./components/Aboutus";

const FEATURED_API =
  // "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc/&api_key=021d70cc33f1ac0e5e77dab17c489a5e&page=1";
  "https://api.themoviedb.org/3/movie/popular?api_key=021d70cc33f1ac0e5e77dab17c489a5e&language=en-US&page=1";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=021d70cc33f1ac0e5e77dab17c489a5e&query=";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [toggleWelcome, setToggleWelcome] = useState(true);

  const fetchMoviesHandler = async (api) => {
    const moviesResp = await fetch(api);
    const data = await moviesResp.json(); //parsing
    console.log(data.results);
    setMovies(data.results);
  };

  useEffect(() => {
    if (toggleWelcome) {
      fetchMoviesHandler(FEATURED_API);
    }
  }, [toggleWelcome]);

  const onClickHandler = () => {
    setToggleWelcome(true);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (searchTerm) {
      fetchMoviesHandler(SEARCH_API + searchTerm);
    }
    setToggleWelcome(false);
    setSearchTerm("");
  };

  const onChangeHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <React.Fragment>
      <MainHeader onClickHandler={onClickHandler} />
      <Route path="/" exact>
        <Welcome
          searchTerm={searchTerm}
          movies={movies}
          onSubmitHandler={onSubmitHandler}
          onChangeHandler={onChangeHandler}
        />
      </Route>
      <Route path="/aboutus">
        <Aboutus />
      </Route>
    </React.Fragment>
  );
};
export default App;
