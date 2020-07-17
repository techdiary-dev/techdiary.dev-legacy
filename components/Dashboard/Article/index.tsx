import React from "react";
import moment from "moment";
import { DashboardArticle } from "./styles";
import { Card } from "components/Card";
import ReactMarkdown from "react-markdown";
import swal from "sweetalert";
import { FiEdit2, FiTrash } from "react-icons/fi";
import Link from "next/link";
import { useMutation } from "@apollo/client";
import { DELETE_ARTICLE, ARTICLE_LIST } from "quries/ARTICLE";
import { ME } from "quries/AUTH";
import { CatchServerErrors } from "lib/CatchServerErrors";
import LoadingOverlay from "react-loading-overlay";

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
  let [deleteArticle, { loading: dLoading }] = useMutation(DELETE_ARTICLE, {
    refetchQueries: [{ query: ARTICLE_LIST }, { query: ME }],
  });

  const handleDelete = () => {
    swal({
      title: "আপনি কি এই ডায়েরিটি মুছে ফেলতে চান?",
      icon: "warning",
      buttons: ["না", "হ্যাঁ অবশ্যই"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        deleteArticle({ variables: { _id } })
          .then(() => {
            swal("মুছে ফেলা হয়েছে", {
              icon: "success",
            });
          })
          .catch((e) => {
            CatchServerErrors(e);
          });
      }
    });

    // if (confirm("Sure to delete?")) {

    // }
  };

  return (
    <DashboardArticle isPublished={isPublished}>
      <LoadingOverlay active={dLoading} spinner>
        <Card>
          <h4 className="title">
            <Link
              href={`/[username]/[articleSlug]`}
              as={`/${username}/${slug}`}
            >
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
      </LoadingOverlay>
    </DashboardArticle>
  );
};

export default Article;
