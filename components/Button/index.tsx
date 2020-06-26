import React, { FC, ReactNode } from "react";
import { StyledButton, ButtonSize, ButtonTheme } from "./styles";

type ButtonType = "button" | "submit";

interface Props {
  onClick?: React.FormEventHandler<HTMLButtonElement>;
  children: ReactNode;
  size?: ButtonSize;
  type?: ButtonType;
  color?: ButtonTheme;
}

const Button: FC<Props> = ({
  onClick,
  children,
  type = "button",
  size = "normal",
  color = "primary",
}: Props): JSX.Element => {
  return (
    <StyledButton type={type} onClick={onClick} size={size} color={color}>
      {children}
    </StyledButton>
  );
};

export default Button;
