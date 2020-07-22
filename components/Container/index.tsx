import React from "react";
import "twin.macro";
import { StyledContainer } from "./styles";

const Container: React.FC = ({ children }) => {
  return <StyledContainer tw="container">{children}</StyledContainer>;
};

export default Container;
