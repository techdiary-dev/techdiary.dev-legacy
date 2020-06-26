import styled, { css } from "styled-components";
export type ButtonSize = "normal" | "small" | "large";
export type ButtonTheme =
  | "primary"
  | "secondary"
  | "danger"
  | "warning"
  | "dark"
  | "link";

interface ButtonStyleProps {
  color?: ButtonTheme;
  size?: ButtonSize;
}

export const StyledButton = styled.button<ButtonStyleProps>`
  display: inline-block;
  border-color: transparent;
  
  border-radius: ${(props) => props.theme.radius_1};
  color: #FFF;


  ${({ color }) =>
    color === "primary" &&
    css`
      background-color: ${({ theme }) => theme.primary};
    `}

  ${({ color }) =>
    color === "secondary" &&
    css`
      background-color: ${({ theme }) => theme.secondary};
      border: 1px solid ${({ theme }) => theme.dark};
      color: ${({ theme }) => theme.dark};
    `}


  ${({ color }) =>
    color === "danger" &&
    css`
      background-color: ${({ theme }) => theme.red};
      color: #fff;
    `}

    ${({ color }) =>
      color === "warning" &&
      css`
        background-color: ${({ theme }) => theme.yellow};
        color: ${({ theme }) => theme.dark};
      `}
    
    ${({ color }) =>
      color === "dark" &&
      css`
        background-color: ${({ theme }) => theme.dark};
      `}


    ${({ color }) =>
      color === "link" &&
      css`
        background-color: transparent;
        color: ${({ theme }) => theme.primary};
        padding: 0;
        &:hover {
          text-decoration: underline;
        }
        &:focus {
          outline: none;
        }
      `}

    padding: 0.8rem;
    ${({ size }) =>
      size === "large" &&
      css`
        padding: 1.2rem;
      `}

    ${({ size }) =>
      size === "small" &&
      css`
        padding: 0.6rem;
      `}

    transition: 300ms;
    &:hover{
      opacity: .8;
    }
`;
