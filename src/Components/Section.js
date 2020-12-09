import React from "react";
import styled from "styled-components";

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
