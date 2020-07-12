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

export const StyledUserActionMenu = styled.div`
  position: relative;
  .avater {
    height: 40px;
    width: 40px;
    border-radius: 100%;
    margin-right: 1.3rem;
    cursor: pointer;
    outline: none;
  }

  .dropdown-menu {
    border-radius: 0 0 5px 5px;
    margin: 0;
    background-color: ${({ theme }) => theme.secondary};
    position: absolute;
    top: 50px;
    right: 0;
    width: 180px;
    padding: 1.2rem;

    box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.14);

    &__item {
      display: flex;
      align-items: center;
      cursor: pointer;
      &:hover {
        background-color: ${({ theme }) => theme.secondaryDark};
      }
    }
    &__icon {
      margin-right: 5px;
    }

    li {
      list-style: none;
      line-height: 3.5rem;
    }
  }
`;
