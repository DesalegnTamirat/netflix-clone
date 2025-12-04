import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useMovieList = (endPoint) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // >==> Abort controller for clean up
    const controller = new AbortController();

    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        setError("");

        const response = await apiClient.get(endPoint, {
          signal: controller.signal,
        });

        setMovies(response.data.results || []);
      } catch (err) {
        if (err.name === "CanceledError") return; 

        const errorMessage = err?.response?.data?.status_message || err.message;
        console.error("Fetch error for endpoint:", endPoint, errorMessage);
        setError("Failed to load movies. Please check your network.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();

    // ---> Cleanup function to abort 
    return () => controller.abort();
  }, [endPoint]);

  
  return { movies, isLoading, error };
};

export default useMovieList;
