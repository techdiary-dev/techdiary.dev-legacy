import PropTypes from "prop-types";
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
import { motion } from "framer-motion";
import { useDebounce } from "use-debounce/lib";

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
interface ArticleActionsProps {
  articleId: string;
  bookmarkCount: number;
  commentCount: number;
  isBookmarked: boolean;
  isLiked: boolean;
  likeCount: number;
}
const ArticleActions = (props: ArticleActionsProps) => {
  /**
   * Cache data
   */
  const me = useMe();
  /**
   * Likes
   */
  const [isLiked, toggleLike] = useState(props.isLiked);
  const [likeExecuted, toggleLikeExecution] = useState(false);
  const [lateLiked] = useDebounce(isLiked, 500);
  const [toggleLikeMutation] = useMutation(TOGGLE_LIKE);
  const [likeCount, setLikeCount] = useState(props.likeCount);

  useEffect(() => {
    async function df() {
      await toggleLikeMutation({
        variables: {
          articleId: props.articleId,
          isLiked: lateLiked,
        },
      });
      toggleLikeExecution(false);
    }
    if (likeExecuted) df();
  }, [lateLiked]);

  const handleLike = async () => {
    if (!me.data)
      return swal({
        title: "ওহ! আপনাকে আগে লগইন করতে হবে!",
        icon: "error",
      });

    // Update like count
    setLikeCount(!isLiked ? likeCount + 1 : likeCount - 1);
    toggleLike(!isLiked);
    toggleLikeExecution(true);
  };

  /**
   * Bookmark
   */
  const [isBookmarked, toggleBookmark] = useState(props.isBookmarked);
  const [bookmarkCount, setBookmarkCount] = useState(props.bookmarkCount);
  const [lateBookMark] = useDebounce(isBookmarked, 500);
  const [bookMarkExecuted, toggleBookmarkExecution] = useState(false);
  const [toggleBookmarkMutation] = useMutation(TOGGLE_BOOKMARK);

  useEffect(() => {
    async function df() {
      await toggleBookmarkMutation({
        variables: {
          articleId: props.articleId,
          isBookmarked: lateBookMark,
        },
      });
      toggleBookmarkExecution(false);
    }
    if (bookMarkExecuted) df();
  }, [lateBookMark]);

  const handleBookmark = async () => {
    if (!me.data)
      return swal({
        title: "ওহ! আপনাকে আগে লগইন করতে হবে!",
        icon: "error",
      });
    setBookmarkCount(!isBookmarked ? bookmarkCount + 1 : bookmarkCount - 1);
    toggleBookmark(!isBookmarked);
    toggleBookmarkExecution(true);
  };
  return (
    <StyledArticleActions>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={ClassNames("action", { isLiked })}
      >
        <span
          className="action__icon"
          tw="hover:bg-red-500"
          onClick={handleLike}
        >
          {isLiked ? <BsHeartFill tw="h-6 w-6" /> : <HeartIcon tw="h-6 w-6" />}
        </span>
        <span>{bnnum(likeCount || 0)}</span>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={ClassNames("action", { isBookmarked })}
      >
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
      </motion.div>

      <div className="action">
        <a className="action__icon" href="#comments">
          <GoComment tw="h-6 w-6" />
        </a>
        <span>{bnnum(props.commentCount || 0)}</span>
      </div>
    </StyledArticleActions>
  );
};

ArticleActions.propTypes = {
  articleId: PropTypes.string,
  bookmarkCount: PropTypes.number,
  commentCount: PropTypes.number,
  isBookmarked: PropTypes.bool,
  isLiked: PropTypes.bool,
  likeCount: PropTypes.number,
};

export default ArticleActions;
