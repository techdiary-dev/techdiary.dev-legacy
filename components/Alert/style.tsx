import styled from "styled-components";

export const StyledAlertBase = styled.div`
  padding: 15px;
  color: #fff;
  font-size: 1.7rem;
  display: flex;
  justify-content: space-between;
`;

export const StyledDanger = styled(StyledAlertBase)`
  background-color: ${({ theme }) => theme.red};
`;

export const StyledWarning = styled(StyledAlertBase)`
  background-color: ${({ theme }) => theme.yellow};
  color: ${({ theme }) => theme.dark};
`;

export const StyledMsg = styled(StyledAlertBase)`
  background-color: ${({ theme }) => theme.primary};
`;

export const StyledDismissButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    height: 20px;
    width: 20px;
  }
`;
