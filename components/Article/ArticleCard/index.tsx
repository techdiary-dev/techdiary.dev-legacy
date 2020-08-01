import React, { useEffect } from "react";
import Link from "next/link";
import { GrPin } from "react-icons/gr";
import moment from "moment";
import { ArticleCardStyle } from "./styles";
import { Card } from "components/Card";
import "twin.macro";
import bnnum from "bnnum";

import UserAvater from "components/UserAvater";
import styled from "styled-components";

import { BsHeart, BsClock as ClockIcon } from "react-icons/bs";
import { FaRegCommentAlt as CommentIcon } from "react-icons/fa";
import ArticleCardInteraction from "./ArticleCardInteraction";
import {
  addOrUpdateInterActionCache,
  interactionsVars,
  getInterAction,
} from "cache/interaction";

interface Props {
  _id: string;
  title: string;
  slug: string;
  timeToRead: number;
  thumbnail: string;
  url: string;
  excerpt: string;
  tags: string[];
  isPublished: boolean;
  isPinned: boolean;
  createdAt: string;
  updatedAt: string;
  commentCount: number;
  isLiked: boolean;
  isBookmarked: boolean;
  likeCount: number;
  bookmarkCount: number;
  author: {
    name: string;
    username: string;
    profilePhoto: string;
  };
}

const StyledUserCard = styled.div`
  margin-bottom: 8px;
`;

const ArticleCard: React.FC<Props> = (props: Props) => {
  return (
    <ArticleCardStyle tw="mb-4">
      <Card>
        {props.isPinned ? (
          <div className="floatingActions">
            <GrPin className="pinned" />
          </div>
        ) : null}

        <StyledUserCard>
          <UserAvater
            name={props.author?.name}
            username={props.author?.username}
            profilePhoto={props.author?.profilePhoto}
          />
        </StyledUserCard>

        <Link href={`/[username]/[articleSlug]`} as={props.url} passHref>
          <a tw="text-xl">{props.title}</a>
        </Link>

        {/* Time */}
        <p tw="text-base text-semiDark">
          {moment(+props.createdAt).format("LLLL")}
        </p>

        {props.thumbnail && (
          <div tw="-ml-4 -mr-4 my-3 cursor-pointer">
            <Link href={`/[username]/[articleSlug]`} as={props.url}>
              <img tw="w-full" src={props.thumbnail} alt="article-thumbnail" />
            </Link>
          </div>
        )}

        <p>
          <Link href={`/[username]/[articleSlug]`} as={props.url} passHref>
            <a tw="text-base text-lightDark hover:text-lightDark">
              {props.excerpt}
            </a>
          </Link>
        </p>

        <div tw="my-4">
          {props.tags?.map((t, key) => (
            <Link href="/t/[tagName]" as={`/t/${t.trim()}`} key={key} passHref>
              <a tw="mr-2">#{t.trim()}</a>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div tw="flex justify-between mt-2">
          <div tw="flex items-center">
            <ClockIcon tw="mr-1" />
            {bnnum(props.timeToRead ?? 0)} মিনিট
          </div>

          <ArticleCardInteraction
            articleId={props._id}
            commentCount={props.commentCount}
            url={props.url}
            likeCount={props.likeCount}
            isBookmarked={props.isBookmarked}
            isLiked={props.isLiked}
            bookmarkCount={props.bookmarkCount}
          />
        </div>
      </Card>
    </ArticleCardStyle>
  );
};

export default ArticleCard;
