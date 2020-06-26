import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
const StyledInfoCard = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  padding: 1.2rem;
  box-shadow: 0 0 5px rgba(47, 52, 50, 0.2);
  margin-bottom: 2rem;

  .title {
    font-size: 1.8rem;
    font-weight: bold;
    color: #484e4e;
  }
`;

interface Props {
  title?: string;
  children: ReactNode;
}

const InfoCard = ({ title, children }: Props) => {
  return (
    <StyledInfoCard>
      {title && <h3 className="title">{title}</h3>}
      <div className="content">{children}</div>
    </StyledInfoCard>
  );
};

export default InfoCard;
