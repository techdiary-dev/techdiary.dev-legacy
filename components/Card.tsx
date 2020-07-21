import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const CardStyle = styled.div`
  ${tw`bg-white shadow p-3 rounded overflow-hidden`}
`;

export const Card = ({ children }) => {
  return <CardStyle>{children}</CardStyle>;
};

export const CardHeader = ({ children }) => {
  return <div>{children}</div>;
};
