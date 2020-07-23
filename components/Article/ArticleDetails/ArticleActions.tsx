import React from "react";
import tw from "twin.macro";
import bnnum from "bnnum";
import { BsHeart as HeartIcon, BsBookmarkPlus } from "react-icons/bs";
import { GoComment } from "react-icons/go";
import styled from "styled-components";

const StyledArticleActions = styled.div`
  ${tw`flex flex-col justify-center fixed -ml-12`}

  z-index: 999;

  .action {
    ${tw`sm:mb-3 mb-0`}
    ${tw`h-12 w-8 flex flex-col items-center justify-center`}

    &::last-child {
      ${tw`mb-0`}
    }
  }

  @media all and (max-width: 750px) {
    .action {
      ${tw`mr-8 w-16 flex-row`}

      svg {
        ${tw`mr-2`}
      }
    }

    ${tw`flex-row justify-center w-full bg-offWhite w-full ml-0 shadow-xl`}
    z-index: 99;
    position: fixed;
    bottom: 0;
    left: 0;
  }
`;

const ArticleActions = () => {
  return (
    <StyledArticleActions>
      <div className="action">
        <HeartIcon tw="h-6 w-6" />
        <span>{bnnum(147)}</span>
      </div>

      <div className="action">
        <BsBookmarkPlus tw="h-6 w-6" />
        <span>{bnnum(147)}</span>
      </div>

      <div className="action">
        <GoComment tw="h-6 w-6" />
        <span>{bnnum(147)}</span>
      </div>
    </StyledArticleActions>
  );
};

export default ArticleActions;
