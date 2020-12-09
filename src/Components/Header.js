import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-size: 3rem;
  margin: 15px;
  color: #e50a15;
`;

const Anchors = styled.ul`
  display: flex;
  width: auto;
  flex-direction: row-reverse;
  margin: 15px;
`;

const Anchor = styled.li`
  margin-left: 20px;
  width: 120px;
  height: 60px;
  border-bottom: 1.5px solid
    ${(props) => (props.current ? "#ffd369" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;

const StyleLink = styled(Link)`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default withRouter(({ location: { pathname } }) => (
  <Nav>
    <StyleLink to="/">
      <Title>BITFLIX</Title>
    </StyleLink>
    <Anchors>
      <Anchor current={pathname === "/movie/favorite"}>
        <StyleLink to="/movie/favorite">좋아하는 영화</StyleLink>
      </Anchor>
      <Anchor current={pathname === "/movie/list"}>
        <StyleLink to="/movie/list">영화 리스트</StyleLink>
      </Anchor>
    </Anchors>
  </Nav>
));
