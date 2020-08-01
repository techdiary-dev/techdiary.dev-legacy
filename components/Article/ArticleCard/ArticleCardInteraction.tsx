import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import useMe from "components/useMe";
import swal from "sweetalert";
import bnnum from "bnnum";
import "twin.macro";
import {
  BsHeart,
  BsHeartFill,
  BsBookmarkPlus,
  BsBookmarkFill,
} from "react-icons/bs";

import {
  TOGGLE_LIKE,
  LIKERS,
  TOGGLE_BOOKMARK,
  ARTICLE_BOOKMARKS,
} from "quries/INTERACTION";
import { useMutation, useQuery } from "@apollo/client";
import { useDebounce } from "use-debounce";
import { GoComment } from "react-icons/go";
import Link from "next/link";

interface ArticleCardInteractionProps {
  articleId: string;
  url: string;
  commentCount: number;
  isLiked: boolean;
  isBookmarked: boolean;
  likeCount: number;
  bookmarkCount: number;
}

const ArticleCardInteraction = (props: ArticleCardInteractionProps) => {
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
    <div tw="flex items-center">
      <div tw="flex items-center mr-2">
        <Link
          href={`/[username]/[articleSlug]`}
          as={`${props.url}#comments`}
          passHref
        >
          <a>
            <GoComment tw="h-5 w-5 text-semiDark" />
          </a>
        </Link>
        <span tw="mr-1"></span>
        <span>{bnnum(props.commentCount || 0)}</span>
      </div>

      <div tw="flex items-center mr-2">
        <span onClick={handleBookmark} tw="mr-1 cursor-pointer">
          {isBookmarked ? (
            <BsBookmarkFill tw="h-5 w-5 text-green-500" />
          ) : (
            <BsBookmarkPlus tw="h-5 w-5" />
          )}
        </span>
        <span>{bnnum(bookmarkCount || 0)}</span>
      </div>

      <div tw="flex items-center mr-2">
        <span onClick={handleLike} tw="mr-1 cursor-pointer">
          {isLiked ? (
            <BsHeartFill tw="h-4 w-4 text-red-500" />
          ) : (
            <BsHeart tw="h-4 w-4" />
          )}
        </span>
        <span>{bnnum(likeCount || 0)}</span>
      </div>
    </div>
  );
};

export default ArticleCardInteraction;
