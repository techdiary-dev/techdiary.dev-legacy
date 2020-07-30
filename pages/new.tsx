import React from "react";
import MainLayout from "components/Layout/MainLayout";
import PleaseLogin from "components/PleaseLogin";
import HeadTag from "components/HeadTag";
import MarkdownEditor from "components/MarkdownEditor";
import Container from "components/Container";

const NewArticlePage = () => {
  return (
    <>
      <HeadTag title="নতুন ডায়েরি লিখুন" />
      <PleaseLogin>
        <MarkdownEditor />
      </PleaseLogin>
    </>
  );
};

export default NewArticlePage;
