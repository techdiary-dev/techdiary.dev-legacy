import React from "react";
import tw from "twin.macro";
import bnnum from "bnnum";
import { BsHeart as HeartIcon, BsBookmarkPlus } from "react-icons/bs";
import { GoComment } from "react-icons/go";
import styled from "styled-components";

const StyledArticleActions = styled.div`
  ${tw`flex flex-col justify-center`} /* position: absolute;
  left: 0;
  top: 0; */


  @media all and (max-width: 750px) {
    ${tw`flex-row justify-center justify-between w-full bg-secondary`}
    z-index: 99;
    position: fixed;
    bottom: 0;
    left: 0;
  }
`;

const ArticleActions = () => {
  return (
    <StyledArticleActions>
      <div tw="sm:mb-3 mb-0">
        <HeartIcon tw="h-6 w-6" />
        <span>{bnnum(147)}</span>
      </div>

      <div tw="sm:mb-3 mb-0">
        <BsBookmarkPlus tw="h-6 w-6" />
        <span>{bnnum(147)}</span>
      </div>

      <div>
        <GoComment tw="h-6 w-6" />
        <span>{bnnum(147)}</span>
      </div>
    </StyledArticleActions>
  );
};

export default ArticleActions;
