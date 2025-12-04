import axios from "axios";

// >==|> Base URLS and API_KEY <|==<
const TMDB_BASE_URL = "https://api.themoviedb.org/3";
export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const api_key = import.meta.env.VITE_TMDB_API_KEY;


const apiClient = axios.create({
  baseURL: TMDB_BASE_URL,
  params: {
    api_key,
  },
});

export default apiClient;
