import React from "react";
import MainLayout from "components/Layout/MainLayout";
import { useRouter } from "next/router";
import { ARTICLE_DETAILS } from "quries/ARTICLE";
import { useQuery } from "@apollo/client";
import PleaseLogin from "components/PleaseLogin";
import HeadTag from "components/HeadTag";
import MarkdownEditor from "components/MarkdownEditor";

const EditArticle = () => {
  let { query } = useRouter();

  let { data, loading } = useQuery(ARTICLE_DETAILS, {
    variables: {
      _id: query._id,
    },
    fetchPolicy: "network-only",
  });

  return (
    <>
      <HeadTag title="ডায়েরি হালনাগাদ করুন" />
      <PleaseLogin>
        <MarkdownEditor
          defaultValues={data?.article}
          _id={query._id}
          loading={loading}
        />
      </PleaseLogin>
    </>
  );
};

export default EditArticle;
