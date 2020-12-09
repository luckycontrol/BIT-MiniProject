import React from "react";
import styled from "styled-components";

const Image = styled.div`
  position: relative;
  background-image: url(${(props) => `${props.imUrl}`});
  background-size: cover;
  background-position: center center;
  height: 370px;
  border-radius: 4px;
  box-shadow: 4px 4px 4px black;
  transition: opacity 0.1s linear;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 1rem;
  font-weight: 400px;
  margin-bottom: 30px;
`;

const Rating = styled.h1`
  position: absolute;
  margin: 15px;
  color: white;
  align-self: flex-end;
  opacity: 0;
`;

const RegisterBtn = styled.button`
  width: 50%;
  height: 2.25rem;
  border: none;
  border-radius: 4px;
  color: black;
  background-color: #fdb827;
  box-shadow: 2px 2px 2px black;
  margin-bottom: 50%;
  opacity: 0;
  cursor: pointer;

  font-size: 15px;
`;

const ImageContainer = styled.div`
  position: relative;
  &:hover {
    ${Image} {
      position: absolute;
      width: 220px;
      height: 390px;
      opacity: 0.8;
      transition: 0.5s ease-in-out;
    }

    ${Title} {
      opacity: 0;
      transition: 0.5s ease-in-out;
    }

    ${Rating} {
      opacity: 1;
      transition: 0.5s ease-in-out;
    }

    ${RegisterBtn} {
      opacity: 1;
      transition: 0.5s ease-in-out;
    }
  }
`;

const Poster = ({
  id,
  actors,
  director,
  imUrl,
  star,
  title,
  action,
  btn_text,
}) => {
  return (
    <>
      <ImageContainer>
        <Image imUrl={imUrl}>
          <Rating>{star} / 10 점</Rating>
          <Title>
            {title.length > 10 ? `${title.substring(0, 10)}...` : title}
          </Title>
          <RegisterBtn name={id} onClick={action}>
            {btn_text}
          </RegisterBtn>
        </Image>
      </ImageContainer>
    </>
  );
};

export default Poster;
