import React, { useEffect, useState } from "react";
import MovieListPresenter from "./MovieListPresenter";
import { movieApi } from "../../api";

const MovieListContainer = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);

    const getMovieList = async () => {
      const {
        data: { result: result },
      } = await movieApi.getMovieList();
      setMovies(result);
    };

    try {
      getMovieList();
    } catch (error) {
      setError("영화정보를 찾을 수 없습니다.");
    } finally {
      setLoading(false);
    }
  }, []);

  const insertFavoriteMovie = (e) => {
    e.preventDefault();
    movieApi.RegisterMovie(e.target.name);
    alert("선택하신 영화가 선호영화목록에 추가되었습니다.");
  };

  return (
    <MovieListPresenter
      movies={movies}
      loading={loading}
      error={error}
      action={insertFavoriteMovie}
    />
  );
};

export default MovieListContainer;
