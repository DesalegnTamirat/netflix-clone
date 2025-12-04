// >==> Represents a single Movie object from the TMDB API
const Movie = {
  id: 0,
  title: "", 
  name: "", 
  original_name: "", 
  overview: "",
  backdrop_path: "", 
  poster_path: "", 
  release_date: "",
  vote_average: 0,
};


const MovieResponse = {
  page: 1,
  results: [Movie],
  total_pages: 1,
  total_results: 1,
};
