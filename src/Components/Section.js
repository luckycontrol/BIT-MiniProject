import React from "react";
import styled, { keyframes } from "styled-components";

const gridAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Container = styled.div`
  margin-bottom: 50px;
`;

const Title = styled.span`
  font-size: 25px;
  font-weight: 600px;
  margin: 15px;
`;

const Grid = styled.div`
  width: 100%;
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 210px);
  gap: 70px 30px;

  animation: ${gridAnimation} 1.5s ease;
`;

const Section = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Grid>{children}</Grid>
    </Container>
  );
};

export default Section;
