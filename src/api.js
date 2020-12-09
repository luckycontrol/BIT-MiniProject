import axios from "axios";

const api = axios.create({
  baseURL: "http://ec2-52-15-114-254.us-east-2.compute.amazonaws.com",
});

export const movieApi = {
  getMovieList: () => api.get("/movie/list"),
  RegisterMovie: (id) => api.get(`/movie/register/${id}`),
  UnregisterMovie: (id) => api.get(`/movie/unregister/${id}`),
  getFavoriteMovies: () => api.get("/movie/favorite"),
};
