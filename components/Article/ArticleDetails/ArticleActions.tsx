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
  const [likeExecuted, toggleLikeExecution] = useState(false);
  const [lateLiked] = useDebounce(isLiked, 500);
  const [likeCount, setLikeCount] = useState(0);
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
  const likersCountFromServer: number =
    likersData?.articleLikers?.resourceCount;
  useEffect(() => {
    setLikeCount(likersCountFromServer);

    if (amiILiked()) {
      toggleLike(true);
    } else {
      toggleLike(false);
    }
    toggleLikeExecution(false);
  }, [likersLoading, me.loading]);

  useEffect(() => {
    async function df() {
      try {
        await toggleLikeMutation({
          variables: {
            articleId,
            isLiked: lateLiked,
          },
        });
      } catch {
        swal({
          title: "ওহ! আপনাকে আগে লগইন করতে হবে!",
          icon: "error",
        });
      }
    }
    if (likeExecuted) df();
  }, [lateLiked]);
  const handleLike = async () => {
    if (!me.data)
      return swal({
        title: "ওহ! আপনাকে আগে লগইন করতে হবে!",
        icon: "error",
      });

    if (!isLiked) setLikeCount(likeCount + 1);
    else setLikeCount(likeCount - 1);

    toggleLike(!isLiked);
    toggleLikeExecution(true);
  };

  /**
   * Bookmark
   */
  const [isBookmarked, toggleBookmark] = useState(false);
  const [bookMarkExecuted, toggleBookmarkExecution] = useState(false);
  const [lateBookMark] = useDebounce(isBookmarked, 500);
  const [bookmarkCount, setBookmarkCount] = useState(0);
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
  const bookmarkCountFromServer: number =
    bookmarksData?.articleBookMarks?.resourceCount;

  useEffect(() => {
    setBookmarkCount(bookmarkCountFromServer);
    if (amIBookmarked()) {
      toggleBookmark(true);
    } else {
      toggleBookmark(false);
    }
    toggleBookmarkExecution(false);
  }, [bookmarksLoading, me.loading]);

  useEffect(() => {
    async function df() {
      try {
        await toggleBookmarkMutation({
          variables: {
            articleId,
            isBookmarked: lateBookMark,
          },
        });
      } catch {
        swal({
          title: "ওহ! আপনাকে আগে লগইন করতে হবে!",
          icon: "error",
        });
      }
    }
    if (bookMarkExecuted) df();
  }, [lateBookMark]);

  const handleBookmark = async () => {
    if (!me.data)
      return swal({
        title: "ওহ! আপনাকে আগে লগইন করতে হবে!",
        icon: "error",
      });

    if (!isBookmarked)
      // Update like count
      setBookmarkCount(bookmarkCount + 1);
    else setBookmarkCount(bookmarkCount - 1);

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
