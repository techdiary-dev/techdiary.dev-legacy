import React, { FC, ReactChildren, ReactNode } from "react";

import { ButtonStyles } from "./styles";

export type ButtonSize = "round" | "sm" | "lg";

interface Props {
  onClick?: React.FormEventHandler<HTMLButtonElement>;
  children: ReactNode;
  size?: ButtonSize;
  type?: "button" | "submit";
  transparent?: any;
}

const Button: FC<Props> = ({
  onClick,
  children,
  type = "button",
  size,
  transparent,
}: // size = ButtonSize.normal
Props): JSX.Element => {
  return (
    <ButtonStyles
      type={type}
      onClick={onClick}
      size={size}
      transparent={transparent}
    >
      {children}
    </ButtonStyles>
  );
};

export default Button;
