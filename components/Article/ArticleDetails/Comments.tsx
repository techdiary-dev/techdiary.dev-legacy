import React, { useState } from "react";
import { Card } from "components/Card";
import "twin.macro";
import moment from "moment";
import Button from "components/Button";
import { CREATE_COMMENT, GET_ARTICLE_COMMENTS } from "quries/COMMENT";
import { useMutation, useQuery } from "@apollo/client";
import Link from "next/link";

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
      <div>
        <Button
          color="dark"
          size="small"
          tw="px-3 float-right"
          onClick={handleCreateComment}
        >
          মন্তব্য করুন
        </Button>
      </div>
    </div>
  );
};

const Replay = ({ author, body, createdAt }) => {
  return (
    <div tw="mb-4">
      <h2 tw="text-base">
        <Link href="/[username]" as={`/${author?.username}`} passHref>
          <a tw="text-black">@{author.username}</a>
        </Link>
        , <span tw="text-gray-600">{moment(+createdAt).format("LLLL")}</span>
      </h2>

      <p tw="text-gray-700">{body}</p>
    </div>
  );
};

const Comment = ({ body, createdAt, author, _id, articleId, comments }) => {
  const [isReplyOpen, openReply] = useState(false);

  return (
    <div tw="mb-5 border p-2 rounded last:border-b-0">
      <h2 tw="text-base">
        <Link href="/[username]" as={`/${author.username}`} passHref>
          <a tw="text-black">{author.username}</a>
        </Link>
        ,<span tw="text-gray-600">{moment(+createdAt).format("LLLL")}</span>
      </h2>

      <p tw="text-gray-700">{body}</p>

      <div>
        {!isReplyOpen && (
          <Button
            tw="text-sm p-0 text-green-500 font-bold"
            color="link"
            onClick={() => openReply(true)}
          >
            উত্তর দিন
          </Button>
        )}

        {isReplyOpen && (
          <>
            <CommentBox parent={_id} articleId={articleId} />
          </>
        )}
      </div>

      <div tw="ml-12">
        {comments?.map((comment) => (
          <Replay key={comment._id} {...comment} />
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
      <Card tw="mb-3">
        <CommentBox articleId={articleId} />
      </Card>

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
