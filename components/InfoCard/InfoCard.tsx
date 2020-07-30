import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";

const StyledInfoCard = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  padding: 1.2rem;
  margin-bottom: 2rem;
  ${tw`shadow`}
`;

interface Props {
  title?: string;
  children: ReactNode;
}

const InfoCard = ({ title, children }: Props) => {
  return (
    <StyledInfoCard>
      {title && <h3 tw="text-lg text-semiDark">{title}</h3>}
      <div className="content">{children}</div>
    </StyledInfoCard>
  );
};

export default InfoCard;
