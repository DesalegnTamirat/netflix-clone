import { useEffect, useState } from "react";
import requests from "../utils/requests";
import useMovieList from "./useMovieList";

const useBannerMovie = () => {
  const [movie, setMovie] = useState(null);
  const { movies, isLoading, error } = useMovieList(
    requests.fetchNetflixOriginals
  );

  useEffect(() => {
    const fetchRandomMovie = async () => {
      const randomIndex = Math.floor(Math.random() * movies.length);
      setMovie(movies[randomIndex]);
    };
    fetchRandomMovie();
  }, [movies]);
  
  return { movie, isLoading, error };
};

export default useBannerMovie;
