import React, { useState, useEffect } from "react";
import { Card } from "components/Card";
import "twin.macro";
import moment from "moment";
import Button from "components/Button";
import {
  CREATE_COMMENT,
  GET_ARTICLE_COMMENTS,
  DELETE_COMMENT,
} from "quries/COMMENT";
import { useMutation, useQuery } from "@apollo/client";
import Link from "next/link";
import swal from "sweetalert";
import useMe from "components/useMe";
import { FaGithub, FaUserLock, FaTimes } from "react-icons/fa";

const CommentBox = ({ articleId, parent = null }) => {
  const [createComment] = useMutation(CREATE_COMMENT, {
    refetchQueries: [{ query: GET_ARTICLE_COMMENTS, variables: { articleId } }],
  });

  const [comment, setComment] = useState("");

  const handleCreateComment = async () => {
    await createComment({
      variables: {
        articleId,
        body: comment,
        parent,
      },
    });

    setComment("");
  };

  return (
    <div>
      <textarea
        tw="w-full border p-2 focus:outline-none rounded"
        placeholder="আপনার মন্তব্য লিখুন"
        rows={2}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <button
        tw="px-3 bg-gray-400 rounded-sm text-sm focus:outline-none text-semiDark"
        onClick={handleCreateComment}
      >
        মন্তব্য করুন
      </button>
    </div>
  );
};

const Replay = ({ author, body, createdAt, _id, articleId }) => {
  const me = useMe();

  const [deleteComment] = useMutation(DELETE_COMMENT, {
    refetchQueries: [{ query: GET_ARTICLE_COMMENTS, variables: { articleId } }],
  });

  const handleDeleteComment = () => {
    swal({
      title: "মন্তব্য মুছে ফেলতে চান?",
      icon: "warning",
      buttons: ["না", "হ্যাঁ চাই"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        deleteComment({
          variables: { _id },
        }).then(() => {
          swal("মন্তব্য মুছে ফেলা হয়েছে", {
            icon: "success",
          });
        });
      }
    });
  };

  return (
    <div tw="mb-4">
      <h2 tw="text-base">
        <Link href="/[username]" as={`/${author?.username}`} passHref>
          <a tw="text-black">@{author.username}</a>
        </Link>{" "}
        <span tw="text-gray-600">{moment(+createdAt).format("LLLL")}</span>
      </h2>
      <p tw="text-gray-700">{body}</p>
      <div tw="mt-2 flex">
        {author._id === me?.data?._id && (
          <>
            <button tw="text-sm p-0 font-bold text-gray-700">সংস্কার</button>
            <span className="seperator" tw="w-3 flex justify-center">
              {" "}
              ·{" "}
            </span>
            <button
              tw="text-sm p-0 font-bold text-red-500"
              onClick={handleDeleteComment}
            >
              মুছুন
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const Comment = ({ body, createdAt, author, _id, articleId, comments }) => {
  const [isReplyOpen, openReply] = useState(false);
  const me = useMe();

  const [deleteComment] = useMutation(DELETE_COMMENT, {
    refetchQueries: [{ query: GET_ARTICLE_COMMENTS, variables: { articleId } }],
  });

  const handleDeleteComment = () => {
    swal({
      title: "মন্তব্য মুছে ফেলতে চান?",
      icon: "warning",
      buttons: ["না", "হ্যাঁ চাই"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        deleteComment({
          variables: { _id },
        }).then(() => {
          swal("মন্তব্য মুছে ফেলা হয়েছে", {
            icon: "success",
          });
        });
      }
    });
  };

  return (
    <div tw="mb-5 border p-2 rounded last:border-b-0">
      <h2 tw="text-base">
        <Link href="/[username]" as={`/${author.username}`} passHref>
          <a tw="text-black">{author.username}</a>
        </Link>
        ,<span tw="text-gray-600">{moment(+createdAt).format("LLLL")}</span>
      </h2>

      <p tw="text-gray-700">{body}</p>

      <div tw="mt-2 flex">
        {!isReplyOpen && me.data && (
          <>
            <button
              tw="text-sm p-0 font-bold text-gray-700"
              onClick={() => openReply(true)}
            >
              উত্তর দিন
            </button>
          </>
        )}
        {isReplyOpen && (
          <button
            onClick={() => openReply(false)}
            tw="focus:outline-none text-red-600"
          >
            <FaTimes />
          </button>
        )}

        {author._id === me?.data?._id && (
          <>
            <span className="seperator" tw="w-3 flex justify-center">
              {" "}
              ·{" "}
            </span>
            <button
              tw="text-sm p-0 font-bold text-gray-700"
              onClick={() => openReply(true)}
            >
              সংস্কার
            </button>
            <span className="seperator" tw="w-3 flex justify-center">
              {" "}
              ·{" "}
            </span>
            <button
              tw="text-sm p-0 font-bold text-red-500"
              onClick={handleDeleteComment}
            >
              মুছুন
            </button>
          </>
        )}
      </div>

      {isReplyOpen && (
        <>
          <CommentBox parent={_id} articleId={articleId} />
        </>
      )}

      <div tw="ml-12">
        {comments?.map((comment) => (
          <Replay key={comment._id} {...comment} articleId={articleId} />
        ))}
      </div>
    </div>
  );
};

const Comments = ({ articleId }) => {
  const { data, fetchMore } = useQuery(GET_ARTICLE_COMMENTS, {
    fetchPolicy: "network-only",
    variables: {
      articleId,
    },
  });
  const me = useMe();

  const handleFetch = () => {
    fetchMore({
      variables: {
        page: data?.getCommentsByArticle?.currentPage + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        // @ts-ignore
        return {
          getCommentsByArticle: {
            // @ts-ignore
            ...fetchMoreResult.getCommentsByArticle,
            data: [
              // @ts-ignore
              ...prev.getCommentsByArticle.data,
              // @ts-ignore
              ...fetchMoreResult.getCommentsByArticle.data,
            ],
          },
        };
      },
    });
  };

  return (
    <div id="comments">
      {me.data ? (
        <Card tw="mb-3">
          <CommentBox articleId={articleId} />
        </Card>
      ) : (
        <div tw="bg-gray-300 p-4 flex flex-col items-center rounded">
          <FaUserLock tw="h-16 w-16 text-gray-500" />
          <h3 tw="my-4 text-gray-600">মন্তব্য করতে লগইন করুন</h3>
          <a
            tw="flex items-center bg-gray-400 px-2 py-1 rounded hover:shadow-sm transition duration-300"
            href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_GITHUB_OAUTH_REDIRECT_URI}`}
          >
            <FaGithub /> <span tw="ml-2">লগইন করুন</span>
          </a>
        </div>
      )}

      <Card>
        {data?.getCommentsByArticle?.data.map((comment) => (
          <Comment key={comment._id} {...comment} articleId={articleId} />
        ))}
      </Card>

      <div tw="text-center my-4">
        <button tw="bg-gray-300 px-2 py-1 rounded" onClick={handleFetch}>
          আরও মন্তব্য দেখুন
        </button>
      </div>
    </div>
  );
};

export default Comments;
