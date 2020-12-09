import React from "react";
import styled, { keyframes } from "styled-components";

const introAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
`;

const Intro = styled.h1`
  font-size: 3rem;
  animation: ${introAnimation} 1.5s ease-in-out;
`;

const HomePresenter = () => {
  return (
    <Container>
      <Intro>당신이 좋아하는 영화는 무엇인가요?</Intro>
    </Container>
  );
};

export default HomePresenter;
