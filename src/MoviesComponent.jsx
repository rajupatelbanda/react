import { useState, useEffect } from "react";
import axios from "axios";

const MoviesComponent = () => {
  const [movies, setMovies] = useState([]);

  // Using Axios
  const fetchMoviesWithAxios = () => {
    axios
      .get("https://dummyapi.online/api/movies")
      .then((response) => setMovies(response.data))
      .catch((error) => console.error("Error:", error));
  };

  useEffect(() => {
    fetchMoviesWithAxios(); // or fetchMoviesWithAxios();
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.movie}</li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesComponent;
