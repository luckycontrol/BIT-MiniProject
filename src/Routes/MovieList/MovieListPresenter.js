import styled from "styled-components";
import Helmet from "react-helmet";
import Poster from "../../Components/Poster";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";

const Container = styled.div`
  display: block;
`;

const MovieListPresenter = ({ movies, error, loading, action }) => {
  return (
    <>
      <Helmet>
        <title>NFLIX | 영화리스트</title>
      </Helmet>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          {movies && movies.length > 0 && (
            <Section title="영화 리스트">
              {movies.map((movie) => (
                <Poster
                  key={movie._id}
                  id={movie._id}
                  imUrl={movie.poster}
                  star={movie.star}
                  title={movie.title}
                  action={action}
                  btn_text="영화 추가"
                />
              ))}
            </Section>
          )}
        </Container>
      )}
    </>
  );
};

export default MovieListPresenter;
