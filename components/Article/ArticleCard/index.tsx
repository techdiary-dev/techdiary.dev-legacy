import React from "react";
import Link from "next/link";
import { GrPin } from "react-icons/gr";
// import bnnum from 'bnnum'
import moment from "moment";
import { ArticleCardStyle } from "./styles";
import { Card } from "components/Card";

import UserAvater from "components/UserAvater";
import styled from "styled-components";

interface Props {
  title: string;
  slug: string;
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
  title,
  excerpt,
  slug,
  thumbnail,
  url,
  isPinned,
  author,
  createdAt,
}: Props) => {
  return (
    <ArticleCardStyle>
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

        <Link href={`/[username]/[articleSlug]`} as={url}>
          <a className="title">{title}</a>
        </Link>
        <p className="time">{moment(+createdAt).format("LLLL")}</p>

        {thumbnail && (
          <div className="thumbnail">
            <Link href={`/[username]/[articleSlug]`} as={url}>
              <img src={thumbnail} alt="article-thumbnail" />
            </Link>
          </div>
        )}

        <div className="excerpt">{excerpt}</div>
      </Card>
    </ArticleCardStyle>
  );
};

export default ArticleCard;
