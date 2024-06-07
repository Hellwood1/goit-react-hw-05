import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNjc1Mzc2M2RlYjIxOGU3YjNmZWNmZWVhMGY0YWY5OSIsInN1YiI6IjY2NWY1MmMwNGU0ZmE2YjQ1NTdkNTlmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6ZRfN5zWvKcCVjEYUXs4VEux6YMJ_kbyvOsw0ss6kG4";

export const fetchTopRatedMovies = async () => {
  const res = await axios.get(`/movie/popular`);
  return res.data.results;
};

export const fetchMovieDetails = async (id) => {
  const res = await axios.get(`/movie/${id}`);
  return res.data;
};

export const fetchMovieCast = async (id) => {
  const res = await axios.get(`/movie/${id}/credits`);
  return res.data.cast;
};

export const fetchMovieReviews = async (id) => {
  const res = await axios.get(`/movie/${id}/reviews`);
  return res.data.results;
};

export const fetchMoviesByQuery = async (query) => {
  const res = await axios.get(`/search/movie?query=${query}`);
  return res.data.results;
};