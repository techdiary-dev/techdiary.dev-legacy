import React from "react";
import { InputGroupStyle, InputLabel } from "./styles";

interface Props {
  label: string;
  inputRef?: any;
  name?: any;
}

const Checkbox: React.FC<Props> = ({ label, inputRef, name }: Props) => {
  return (
    <InputGroupStyle>
      <InputLabel>
        <input type="checkbox" ref={inputRef} name={name} />
        {label}
      </InputLabel>
    </InputGroupStyle>
  );
};

export default Checkbox;
