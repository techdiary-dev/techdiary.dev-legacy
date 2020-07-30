import React from "react";
import styled from "styled-components";
// import "twin.macro";

export const StyledContainer = styled.div`
  width: 1180px;
  margin: 0 auto;
  max-width: 95%;
`;

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
