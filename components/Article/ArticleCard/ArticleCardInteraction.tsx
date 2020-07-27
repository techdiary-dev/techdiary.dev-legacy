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
import styled from "styled-components";

const StyledArticleCardInterAction = styled.div``;

const ArticleCardInteraction = ({ articleId }) => {
  /**
   * Autrhorization data
   */

  const me = useMe();
  const myId = me?.data?._id;

  /**
   * Likes
   */
  const [isLiked, toggleLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [toggleLikeMutation] = useMutation(TOGGLE_LIKE, {
    refetchQueries: [
      {
        query: LIKERS,
        variables: { articleId },
      },
    ],
  });
  const { data: likersData, loading: likersLoading } = useQuery(LIKERS, {
    variables: { articleId },
  });

  const amiILiked = (): boolean => {
    const users = likersData?.articleLikers?.data.map((l) => l.user);
    const flag =
      users?.findIndex((user) => user._id === myId) !== -1 && !likersLoading;
    return flag;
  };
  const likersCountFromServer: number =
    likersData?.articleLikers?.resourceCount;

  useEffect(() => {
    setLikeCount(likersCountFromServer);
    if (amiILiked()) toggleLike(true);
    else toggleLike(false);
  }, [likersLoading, me.loading]);

  /**
   * Bookmark
   */
  const [isBookmarked, toggleBookmark] = useState(false);
  const [bookmarkCount, setBookmarkCount] = useState(0);
  const [toggleBookmarkMutation] = useMutation(TOGGLE_BOOKMARK, {
    refetchQueries: [
      {
        query: ARTICLE_BOOKMARKS,
        variables: { articleId },
      },
    ],
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
    if (amIBookmarked()) toggleBookmark(true);
    else toggleBookmark(false);
  }, [bookmarksData, me.loading]);

  const handleLike = async () => {
    // Update like count
    if (!isLiked) setLikeCount(likeCount + 1);
    else setLikeCount(likeCount - 1);

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
    // Update like count
    if (!isBookmarked) setBookmarkCount(bookmarkCount + 1);
    else setBookmarkCount(bookmarkCount - 1);

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
    <StyledArticleCardInterAction>
      <div tw="flex items-center">
        <div tw="flex items-center mr-2">
          <span onClick={handleBookmark} tw="mr-1 cursor-pointer">
            {isBookmarked ? (
              <BsBookmarkFill tw="h-5 w-5 text-green-500" />
            ) : (
              <BsBookmarkPlus tw="h-5 w-5 transition" />
            )}
          </span>
          <span>{bnnum(bookmarkCount || 0)}</span>
        </div>

        <div tw="flex items-center mr-2">
          <span onClick={handleLike} tw="mr-1 cursor-pointer">
            {isLiked ? (
              <BsHeartFill tw="h-4 w-4 text-red-500" />
            ) : (
              <BsHeart tw="h-4 w-4 transition" />
            )}
          </span>
          <span>{bnnum(likeCount || 0)}</span>
        </div>
      </div>
    </StyledArticleCardInterAction>
  );
};

export default ArticleCardInteraction;
