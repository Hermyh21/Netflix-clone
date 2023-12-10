const API_KEY = "8a632e171976c6c6204023a9be320cbb";

// Define a common parameter for fetching recent movies released within the last year
const releaseYear = new Date().getFullYear() - 1; // Fetch movies released in the last year

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&primary_release_year=${releaseYear}`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&primary_release_year=${releaseYear}`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&primary_release_year=${releaseYear}`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&primary_release_year=${releaseYear}`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&primary_release_year=${releaseYear}`,
};

export default requests;
