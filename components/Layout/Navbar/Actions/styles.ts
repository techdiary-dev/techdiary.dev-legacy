import styled from "styled-components";
import deviceScreens from "styles/DEVICES";

export const StyledActions = styled.div`
  display: flex;
  align-items: center;

  svg {
    cursor: pointer;
    height: 22px;
    width: 22px;
    color: ${({ theme }) => theme.semiDark};

    margin-right: 12px;
  }

  .login-url {
    display: flex;
    font-size: 1.6rem;
    align-items: center;
  }

  @media all and (max-width: ${deviceScreens.MOBILE_SCREEN}) {
    .label {
      display: none;
    }
  }
`;
