import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
`;

const Intro = styled.h1`
  font-size: 3rem;
`;

const HomePresenter = () => {
  return (
    <Container>
      <Intro>당신이 좋아하는 영화는 무엇인가요?</Intro>
    </Container>
  );
};

export default HomePresenter;
