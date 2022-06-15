import React from "react";
import styled from "styled-components";

const StyledCardList = styled.div`
  display: grid;
  padding: 50px;
  gap: 93px 30px;
  justify-content: center;
  grid-template-columns: repeat(3, 400px);
`;

const CardList = ({ children }) => {
  return <StyledCardList>{children}</StyledCardList>;
};

export default CardList;
