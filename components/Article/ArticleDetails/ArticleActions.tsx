import React, { useState } from "react";
import tw from "twin.macro";
import bnnum from "bnnum";
import {
  BsHeart as HeartIcon,
  BsHeartFill,
  BsBookmarkPlus,
} from "react-icons/bs";
import { GoComment } from "react-icons/go";
import styled from "styled-components";
import Link from "next/link";
import ClassNames from "classnames";
import gql from "graphql-tag";
import { useMutation, useQuery } from "@apollo/client";

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

    &.isLiked {
      .action__icon {
        ${tw`text-red-500`}
      }
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

const ArticleActions = ({ articleId }) => {
  const [isLiked, toggleLike] = useState(false);

  const [
    toggleLikeMutation,
    { loading, data: toggleLikeData, error },
  ] = useMutation(TOGGLE_LIKE);

  const { data: likersData } = useQuery(LIKERS);

  const handleLike = async () => {
    // const backupLike = isLiked;
    toggleLike(!isLiked);

    const liked = await toggleLikeMutation({
      variables: {
        articleId,
        isLiked: true,
      },
    });
  };

  return (
    <StyledArticleActions>
      <div className={ClassNames("action", { isLiked })}>
        <span
          className="action__icon"
          tw="hover:bg-red-500"
          onClick={handleLike}
        >
          {isLiked ? <BsHeartFill tw="h-6 w-6" /> : <HeartIcon tw="h-6 w-6" />}
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

export const TOGGLE_LIKE = gql`
  mutation TOGGLE_LIKE($articleId: ID!, $isLiked: Boolean!) {
    toggleLike(data: { articleId: $articleId, isLiked: $isLiked })
  }
`;

export const LIKERS = gql`
  query LIKERS($articleId: ID!) {
    articleLikers(articleId: $articleId) {
      data {
        user {
          _id
          username
          profilePhoto
        }
      }
    }
  }
`;
