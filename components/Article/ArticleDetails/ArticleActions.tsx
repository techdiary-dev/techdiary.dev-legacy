import React from "react";
import tw from "twin.macro";
import bnnum from "bnnum";
import { BsHeart as HeartIcon, BsBookmarkPlus } from "react-icons/bs";
import { GoComment } from "react-icons/go";
import styled from "styled-components";
import Link from "next/link";

const StyledArticleActions = styled.div`
  ${tw`flex flex-col justify-center fixed -ml-12`}
  z-index: 999;

  .action {
    ${tw`sm:mb-8 mb-0`}
    ${tw`h-12 w-8 flex flex-col items-center justify-center`}

    &::last-child {
      ${tw`mb-0`}
    }

    &__icon {
      ${tw`rounded-full p-2 hover:bg-opacity-50 transition duration-300 cursor-pointer`}
    }
  }

  @media all and (max-width: 750px) {
    .action {
      ${tw`mr-8 w-16 flex-row`}

      &__icon {
        ${tw``}
      }

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
        <span className="action__icon" tw="hover:bg-red-500">
          <HeartIcon tw="h-6 w-6" />
        </span>
        <span>{bnnum(147)}</span>
      </div>

      <div className="action">
        <span className="action__icon" tw="hover:bg-green-500">
          <BsBookmarkPlus tw="h-6 w-6" />
        </span>
        <span>{bnnum(147)}</span>
      </div>

      <div className="action">
        <Link href="#comments" passHref>
          <span className="action__icon">
            <GoComment tw="h-6 w-6" />
          </span>
        </Link>
        <span>{bnnum(147)}</span>
      </div>
    </StyledArticleActions>
  );
};

export default ArticleActions;
