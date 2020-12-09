import React, { useCallback, useEffect, useState } from "react";
import MovieFavoritePresenter from "./MovieFavoritePresenter";
import { movieApi } from "../../api";

export default () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getFavoriteMovieList = async () => {
      const {
        data: { result: result },
      } = await movieApi.getFavoriteMovies();
      setFavoriteMovies(result);
    };

    try {
      setLoading(true);
      getFavoriteMovieList();
    } catch (error) {
      setError("좋아하시는 영화를 찾는 도중 에러가 발생했어요.");
    } finally {
      setLoading(false);
    }
  }, []);

  const UpdateFavoriteMovieList = useCallback(
    (e) => {
      movieApi.UnregisterMovie(e.target.name);

      const newFavoriteMovies = favoriteMovies.filter(
        (movie) => movie._id !== e.target.name
      );
      setFavoriteMovies(newFavoriteMovies);
    },
    [favoriteMovies]
  );

  const removeFavorite = (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      UpdateFavoriteMovieList(e);
    } catch (error) {
      setError("선택하신 영화를 삭제하지 못했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <MovieFavoritePresenter
      favoriteMovies={favoriteMovies}
      loading={loading}
      error={error}
      action={removeFavorite}
    />
  );
};
