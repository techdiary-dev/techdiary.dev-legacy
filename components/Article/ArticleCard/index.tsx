import React from "react";
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
  author: {
    name: string;
    username: string;
    profilePhoto: string;
  };
}

const StyledUserCard = styled.div`
  margin-bottom: 8px;
`;

const ArticleCard: React.FC<Props> = ({
  _id,
  title,
  excerpt,
  timeToRead,
  thumbnail,
  url,
  isPinned,
  author,
  createdAt,
  tags,
}: Props) => {
  return (
    <ArticleCardStyle tw="mb-4">
      <Card>
        {isPinned ? (
          <div className="floatingActions">
            <GrPin className="pinned" />
          </div>
        ) : null}

        <StyledUserCard>
          <UserAvater
            name={author?.name}
            username={author?.username}
            profilePhoto={author?.profilePhoto}
          />
        </StyledUserCard>

        <Link href={`/[username]/[articleSlug]`} as={url} passHref>
          <a tw="text-xl">{title}</a>
        </Link>

        {/* Time */}
        <p tw="text-base text-semiDark">{moment(+createdAt).format("LLLL")}</p>

        {thumbnail && (
          <div tw="-ml-4 -mr-4 my-3 cursor-pointer">
            <Link href={`/[username]/[articleSlug]`} as={url}>
              <img tw="w-full" src={thumbnail} alt="article-thumbnail" />
            </Link>
          </div>
        )}

        <p tw="text-base text-lightDark">{excerpt}</p>

        <div tw="my-4">
          {tags?.map((t, key) => (
            <Link href="/t/[tagName]" as={`/t/${t.trim()}`} key={key} passHref>
              <a tw="mr-2">#{t.trim()}</a>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div tw="flex justify-between mt-2">
          <div tw="flex items-center">
            <ClockIcon tw="mr-1" />
            {bnnum(timeToRead)} মিনিট
          </div>
          <ArticleCardInteraction articleId={_id} />
        </div>
      </Card>
    </ArticleCardStyle>
  );
};

export default ArticleCard;
