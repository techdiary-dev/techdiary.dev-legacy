import React, { FC, ReactNode, HTMLAttributes } from "react";
import { StyledButton, ButtonSize, ButtonTheme } from "./styles";

type ButtonType = "button" | "submit";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  onClick?: React.FormEventHandler<HTMLButtonElement>;
  children: ReactNode;
  size?: ButtonSize;
  type?: ButtonType;
  color?: ButtonTheme;
}

const Button: FC<Props> = (props: Props): JSX.Element => {
  return (
    <StyledButton
      type={props.type || "button"}
      onClick={props.onClick}
      size={props.size || "normal"}
      color={props.color || "primary"}
      {...props}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
