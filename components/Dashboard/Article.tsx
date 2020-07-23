import React from "react";
import moment from "moment";
import "twin.macro";

import ReactMarkdown from "react-markdown";
import swal from "sweetalert";
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
  url: string;
  title: string;
  username: any;
}

const Article: React.FC<Props> = ({
  _id,
  title,
  excerpt,
  createdAt,
  url,
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
  };

  return (
    <div tw="mb-8">
      <LoadingOverlay active={dLoading} spinner>
        <div
          tw={"p-3 rounded shadow bg-white"}
          className={!isPublished ? "bg-gray-300" : undefined}
        >
          <Link href={`/[username]/[articleSlug]`} as={url} passHref>
            <a tw="text-xl cursor-pointer block">{title}</a>
          </Link>

          <span tw="text-sm text-semiDark">{moment(+createdAt).fromNow()}</span>

          <ReactMarkdown source={excerpt} tw="my-2 text-semiDark" />

          <div tw="my-2">
            <Link href="/edit/[_id]" as={`/edit/${_id}`}>
              <a tw="mr-3 text-green-500 cursor-pointer hover:text-green-400">
                সংস্কার
              </a>
            </Link>

            <button tw="text-red-500" onClick={handleDelete}>
              মুছে ফেলুন
            </button>
          </div>
        </div>
      </LoadingOverlay>
    </div>
  );
};

export default Article;
