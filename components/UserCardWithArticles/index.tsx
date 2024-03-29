import React from "react";
import moment from "moment";
import { StyledUserCardWithArticles } from "./styles";
import { Card } from "components/Card";
import UserAvater from "components/UserAvater";
import Link from "next/link";

interface Props {
  user: {
    name: string;
    username: string;
    profilePhoto: string;
    articles: {
      data: [
        {
          title: string;
          slug: string;
          url: string;
          createdAt: string;
        }
      ];
    };
  };
}

const UserCardWithArticles: React.FC<Props> = ({ user }: Props) => {
  return (
    <Card>
      <StyledUserCardWithArticles>
        <UserAvater
          name={user?.name}
          username={user?.username}
          profilePhoto={user?.profilePhoto}
          size="xl"
        />
        <h4 className="heading">আমার সাম্প্রতিক ডাইরি সমূহ</h4>
        <div className="articles mb-2">
          {user?.articles?.data?.map((article, key) => (
            <article className="article" key={key}>
              <Link href={`/[username]/[articleSlug]`} as={article.url}>
                <a className="article__title">{article?.title}</a>
              </Link>
              <p className="article__time">
                {moment(+article?.createdAt).format("LLLL")}
              </p>
            </article>
          ))}
        </div>
        <Link href="/[username]" as={`/${user?.username}`}>
          <a className="link">সকল ডাইরি</a>
        </Link>
      </StyledUserCardWithArticles>
    </Card>
  );
};

export default UserCardWithArticles;
