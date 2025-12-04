import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useMovies = (endPoint, params) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(false);
        setError("");
        
        const response = await apiClient.get(endPoint, {params});
        setMovies(response.data.results);
      }
      catch(err) {
        const errorMessage = err?.response?.data?.message || err.message;
        console.log(errorMessage);
        setError(errorMessage);
      }
    };
    fetchMovies();
  }, [endPoint, params]);

  return {movies, isLoading, error}
}

export default useMovies;