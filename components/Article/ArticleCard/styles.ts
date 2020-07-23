import styled from "styled-components";
// import tw from "twin.macro";

export const ArticleCardStyle = styled.div`
  position: relative;
  padding: 2px;
  .floatingActions {
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    flex-direction: column;

    .pinned {
      height: 20px;
      width: 20px;
      path {
        stroke: ${({ theme }) => theme.primaryDark} !important;
      }
    }
  }
`;
