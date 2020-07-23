import styled from "styled-components";
import { Row, Column } from "styled-grid-system-component";
import ssize from "styles/DEVICES";

export const StyledCol = styled(Column)<{ sidebar: boolean; main: boolean }>`
  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }

  @media all and (max-width: 750px) {
    padding-left: 0;
    padding-right: 0;
    display: none;
  }
`;

const Col = StyledCol;

export { Row, Col };
// display: ${(props) => props.sidebar && "none"};
