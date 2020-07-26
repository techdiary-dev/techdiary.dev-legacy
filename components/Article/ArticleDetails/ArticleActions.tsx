import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import bnnum from "bnnum";
import {
  BsHeart as HeartIcon,
  BsHeartFill,
  BsBookmarkPlus,
  BsBookmarkFill,
} from "react-icons/bs";
import { GoComment } from "react-icons/go";
import styled from "styled-components";
import Link from "next/link";
import ClassNames from "classnames";
import { useMutation, useQuery } from "@apollo/client";
import useMe from "components/useMe";
import {
  TOGGLE_LIKE,
  LIKERS,
  TOGGLE_BOOKMARK,
  ARTICLE_BOOKMARKS,
} from "quries/INTERACTION";
import swal from "sweetalert";

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

    &.isBookmarked {
      .action__icon {
        ${tw`text-green-500`}
      }
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

const ArticleActions = ({ articleId }) => {
  /**
   * Autrhorization data
   */

  const me = useMe();
  const myId = me?.data?._id;

  /**
   * Likes
   */
  const [isLiked, toggleLike] = useState(false);
  const [toggleLikeMutation] = useMutation(TOGGLE_LIKE, {
    refetchQueries: [{ query: LIKERS, variables: { articleId } }],
  });
  const { data: likersData, loading: likersLoading } = useQuery(LIKERS, {
    variables: { articleId },
  });

  const amiILiked = (): boolean => {
    const users = likersData?.articleLikers?.data.map((l) => l.user);
    return (
      users?.findIndex((user) => user._id === myId) !== -1 && !likersLoading
    );
  };
  const likersCount: number = likersData?.articleLikers?.resourceCount;

  /**
   * Bookmark
   */
  const [isBookmarked, toggleBookmark] = useState(false);
  const [toggleBookmarkMutation] = useMutation(TOGGLE_BOOKMARK, {
    refetchQueries: [{ query: ARTICLE_BOOKMARKS, variables: { articleId } }],
  });
  const { data: bookmarksData, loading: bookmarksLoading } = useQuery(
    ARTICLE_BOOKMARKS,
    {
      variables: { articleId },
    }
  );

  const amIBookmarked = (): boolean => {
    const users = bookmarksData?.articleBookMarks?.data.map((l) => l.user);
    return (
      users?.findIndex((user) => user._id === myId) !== -1 && !bookmarksLoading
    );
  };
  const bookmarkCount: number = bookmarksData?.articleBookMarks?.resourceCount;

  useEffect(() => {
    if (amiILiked()) {
      toggleLike(true);
    } else {
      toggleLike(false);
    }
  }, [likersLoading, me.loading]);

  useEffect(() => {
    if (amIBookmarked()) {
      toggleBookmark(true);
    } else {
      toggleBookmark(false);
    }
  }, [bookmarksData, me.loading]);

  const handleLike = async () => {
    toggleLike(!isLiked);
    try {
      await toggleLikeMutation({
        variables: {
          articleId,
          isLiked: !isLiked,
        },
      });
    } catch (error) {
      toggleLike(false);
      swal({
        title: "ওহ! আপনাকে আগে লগইন করতে হবে!",
        icon: "error",
      });
    }
  };

  const handleBookmark = async () => {
    toggleBookmark(!isBookmarked);
    await toggleBookmarkMutation({
      variables: {
        articleId,
        isBookmarked: !isBookmarked,
      },
    }).catch(() => {
      toggleBookmark(false);
      swal({
        title: "ওহ! আপনাকে আগে লগইন করতে হবে!",
        icon: "error",
      });
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
        <span>{bnnum(likersCount || 0)}</span>
      </div>

      <div className={ClassNames("action", { isBookmarked })}>
        <span
          className="action__icon"
          tw="hover:bg-green-500"
          onClick={handleBookmark}
        >
          {isBookmarked ? (
            <BsBookmarkFill tw="h-6 w-6" />
          ) : (
            <BsBookmarkPlus tw="h-6 w-6" />
          )}
        </span>
        <span>{bnnum(bookmarkCount || 0)}</span>
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
