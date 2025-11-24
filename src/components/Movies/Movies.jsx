import useMovies from "../../hooks/useMovies";
import "./movies.css";

function Movies() {
  const { movies, isLoading, error } = useMovies("discover/movie");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const base_img_url = "https://image.tmdb.org/t/p/original";

  return (
    <div className="row">
      <h1>Trending movies</h1>
      <div className="row-posters">
        {movies?.map((movie, index) => (
          <img
            key={index}
            src={`${base_img_url}${movie.backdrop_path}`}
            alt={movie.name}
            className="row-poster"
          />
        ))}
      </div>
    </div>
  );
}

export default Movies;
