import css from "./HomePage.module.css";
import { useEffect, useState } from "react";
import { fetchTopRatedMovies } from "../../Movie-api";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";

export default function HomePage() {
  const [ratedMovies, setRatedMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getTopRatedMovies() {
      try {
        setIsError(false);
        setIsLoading(true);
        const movies = await fetchTopRatedMovies();
        setRatedMovies(movies);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getTopRatedMovies();
  }, []);

  return (
    <div>
      <h1 className={css.title}>Trending today</h1>

      {isLoading && <div><Loader/></div>}
      {isError && <div>Something went wrong. Please, try again.</div>}

      {ratedMovies && <MovieList movies={ratedMovies} />}
    </div>
  );
}