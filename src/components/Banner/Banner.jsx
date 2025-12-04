import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import requests from "../../utils/requests";
import "./banner.css";

function Banner() {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await apiClient.get(requests.fetchNetflixOriginals);
        const movies = res.data.results;
        const i = Math.floor(Math.random() * movies.length);
        setMovie(movies[i]);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchMovies();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-buttons">
          <button className="banner-button play">Play</button>
          <button className="banner-button">My List</button>
        </div>
        <h1 className="banner-description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner-fadeBottom" />
    </div>
  );
}

export default Banner;