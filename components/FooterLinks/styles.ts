import styled from "styled-components";

export const StyledFooterLinks = styled.div`
  a {
    font-size: 15px;
    color: ${({ theme }) => theme.darkGrey};

    &:not(::first-child) {
      margin: 0px 8px;
    }
  }

  .seperator {
    font-size: initial;
  }
`;
