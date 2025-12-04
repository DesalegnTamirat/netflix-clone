import requests from "./requests";

export const NAV_LINKS = [
  "Home",
  "TV Shows",
  "Movies",
  "Latest",
  "My List",
  "Browse by Languages",
];

export const MOVIE_ROWS = [
  {
    title: "NETFLIX ORIGINALS",
    fetchUrl: requests.fetchNetflixOriginals,
    isLargeRow: true,
  },
  { title: "Trending Now", fetchUrl: requests.fetchTrending },
  { title: "Top Rated", fetchUrl: requests.fetchTopRatedMovies },
  { title: "Action Movies", fetchUrl: requests.fetchActionMovies },
  { title: "Comedy Movies", fetchUrl: requests.fetchComedyMovies },
  { title: "Horror Movies", fetchUrl: requests.fetchHorrorMovies },
  { title: "Romance Movies", fetchUrl: requests.fetchRomanceMovies },
  { title: "TV Shows", fetchUrl: requests.fetchTvShow },
  { title: "Documentaries", fetchUrl: requests.fetchDocumentaries },
];

export const FOOTER_LINKS = [
  ["Audio Description", "Help Center", "Gift Cards", "Media Center"],
  ["Investor Relations", "Jobs", "Terms of Use", "Privacy"],
  ["Legal Notice", "Cookie Preferences", "Corporate Information", "Contact Us"],
];