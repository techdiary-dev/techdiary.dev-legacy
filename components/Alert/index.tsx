import React, { useState } from "react";
import {
  StyledDanger,
  StyledWarning,
  StyledMsg,
  StyledDismissButton,
} from "./style";
import { GrFormClose } from "react-icons/gr";

export const Danger = ({ children, dismissable = true }) => {
  const [show, setShow] = useState(true);
  return show ? (
    <StyledDanger>
      {children}
      {dismissable && (
        <StyledDismissButton onClick={() => setShow(false)}>
          <GrFormClose />
        </StyledDismissButton>
      )}
    </StyledDanger>
  ) : null;
};

export const Warning = ({ children, dismissable = true }) => {
  const [show, setShow] = useState(true);
  return show ? (
    <StyledWarning>
      {children}
      {dismissable && (
        <StyledDismissButton onClick={() => setShow(false)}>
          <GrFormClose />
        </StyledDismissButton>
      )}
    </StyledWarning>
  ) : null;
};

export const Message = ({ children, dismissable = true }) => {
  const [show, setShow] = useState(true);
  return show ? (
    <StyledMsg>
      {children}
      {dismissable && (
        <StyledDismissButton onClick={() => setShow(false)}>
          <GrFormClose />
        </StyledDismissButton>
      )}
    </StyledMsg>
  ) : null;
};
