import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div`
  margin: 15px;
`;

const MovieFavoritePresenter = ({ favoriteMovies, loading, error, action }) => {
  return (
    <>
      <Helmet>
        <title>NFLIX | 선호영화내역</title>
      </Helmet>
      {loading ? (
        <Loader />
      ) : (
        favoriteMovies &&
        favoriteMovies.length > 0 && (
          <Container>
            <Section title="선호하시는 영화 목록입니다.">
              {favoriteMovies.map((movie) => (
                <Poster
                  key={movie._id}
                  id={movie._id}
                  imUrl={movie.poster}
                  star={movie.star}
                  title={movie.title}
                  action={action}
                  btn_text="영화 제거"
                />
              ))}
            </Section>
          </Container>
        )
      )}
    </>
  );
};

export default MovieFavoritePresenter;
