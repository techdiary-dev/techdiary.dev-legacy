import React from "react";
import MainLayout from "components/Layout/MainLayout";
import ArticleEditor from "components/Article/ArticleEditor";
import PleaseLogin from "components/PleaseLogin";
import HeadTag from "components/HeadTag";

const NewArticlePage = () => {
  return (
    <MainLayout>
      <HeadTag title="নতুন ডায়েরি লিখুন" />
      <PleaseLogin>
        <ArticleEditor />
      </PleaseLogin>
    </MainLayout>
  );
};

export default NewArticlePage;
