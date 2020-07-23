import styled, { css } from "styled-components";
export type ButtonSize = "normal" | "small" | "large";
import tw from "twin.macro";
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

export const StyledButton = styled.button(
  ({ color, size }: ButtonStyleProps) => [
    tw`p-2 rounded text-semiDark shadow hover:bg-opacity-75 border-transparent transition duration-300 focus:outline-none`,
    // Color themes
    color === "primary" && tw`bg-primary`,
    color === "secondary" && tw`bg-secondaryDark`,
    color === "danger" && tw`bg-red-500 text-white`,
    color === "warning" && tw`bg-yellow-500`,
    color === "link" && tw`p-0 shadow-none text-primary`,
    color === "dark" && tw`bg-dark text-white`,

    // Sizes
    size === "small" && tw`p-1`,
    size === "normal" && tw`p-2`,
    size === "large" && tw`p-3`,
  ]
);
