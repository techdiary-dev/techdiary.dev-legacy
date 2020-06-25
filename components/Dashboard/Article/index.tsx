import React from "react";
import moment from "moment";
import { DashboardArticle } from "./styles";
import { Card } from "components/Card";
import ReactMarkdown from "react-markdown";
import htmlSanitizer from "sanitize-html";
import { FiEdit2, FiTrash } from "react-icons/fi";
import Link from "next/link";
import { useMutation } from "@apollo/react-hooks";
import { DELETE_ARTICLE, ARTICLE_LIST } from "quries/ARTICLE";
import { ME } from "quries/AUTH";
import { CatchServerErrors } from "lib/CatchServerErrors";

interface Props {
  _id: any;
  createdAt: any;
  excerpt: string;
  isPublished: boolean;
  slug: string;
  title: string;
  username: any;
}

const Article: React.FC<Props> = ({
  _id,
  title,
  excerpt,
  slug,
  createdAt,
  username,
  isPublished,
}: Props) => {
  let [deleteArticle] = useMutation(DELETE_ARTICLE, {
    refetchQueries: [{ query: ARTICLE_LIST }, { query: ME }],
  });

  const handleDelete = () => {
    if (confirm("Sure to delete?")) {
      deleteArticle({ variables: { _id } }).catch((e) => {
        CatchServerErrors(e);
      });
    }
  };

  return (
    <DashboardArticle isPublished={isPublished}>
      <Card>
        <h4 className="title">
          <Link href={`/[username]/[articleSlug]`} as={`/${username}/${slug}`}>
            <a>{title}</a>
          </Link>
        </h4>
        <span className="time">{moment(+createdAt).fromNow()}</span>
        <ReactMarkdown source={excerpt} className="excerpt" />
        <div className="actions">
          <Link href="/edit/[_id]" as={`/edit/${_id}`}>
            <a>
              <FiEdit2 />
            </a>
          </Link>
          <FiTrash onClick={handleDelete} />
        </div>
      </Card>
    </DashboardArticle>
  );
};

export default Article;
