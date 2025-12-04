import { useState } from "react";
import movieTrailer from "movie-trailer";
import useMovieList from "../../hooks/useMovieList";
import { IMAGE_BASE_URL } from "../../services/api-client";
import TrailerModal from "../Shared/TrailerModal";
import NoTrailerModal from "../Shared/NoTrailerModal";
import RowSkeleton from "../Shared/RowSkeleton";
import "./row.css";
import { getYoutubeVideoId } from "../../utils/helper";

function Row({ title, fetchUrl, isLargeRow }) {
  const { movies, isLoading, error } = useMovieList(fetchUrl);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [noTrailer, setNoTrailer] = useState(false);

  const handleClick = async (movie) => {
    setTrailerUrl("");
    setNoTrailer(false);

    const movieName = movie?.title || movie?.name || movie?.original_name;

    const response = await movieTrailer(movieName);
    console.log("res", response);

    const url = Array.isArray(response) ? response[0] : response;
    const videoId = getYoutubeVideoId(url || "");
    if (videoId) {
      setTrailerUrl(videoId);
    } else {
      setNoTrailer(true);
    }
  };

  const handleCloseModal = () => {
    setTrailerUrl("");
  };

  const handleCloseNoTrailer = () => {
    setNoTrailer(false);
  };

  if (isLoading) return <RowSkeleton isLargeRow={isLargeRow} />;

  if (error)
    return (
      <h2 className="row" style={{ color: "var(--color-red)" }}>
        Error loading {title}: {error}
      </h2>
    );


  return (
    <div className="row">
      <h1 className="rowtitle">{title}</h1>
      <div className="row-posters">
        {movies.map((movie) => (
          <img
            onClick={() => handleClick(movie)}
            key={movie.id}
            src={`${IMAGE_BASE_URL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name || movie.title}
            className={`row-poster ${isLargeRow ? "row-posterLarge" : ""}`}
          />
        ))}
      </div>

      <TrailerModal videoId={trailerUrl} onClose={handleCloseModal} />
      <NoTrailerModal isVisible={noTrailer} onClose={handleCloseNoTrailer} />
    </div>
  );
}

export default Row;
