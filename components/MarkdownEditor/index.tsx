import React, { useState } from "react";
import dynamic from "next/dynamic";
import { StyledMarkdownEditor } from "./styles";
import fm from "front-matter";
import Button from "components/Form/Button";
import { Row } from "styled-grid-system-component";
import { StyledCol } from "styles/StyledGrid";

import { useMutation } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import * as yup from "yup";
import { CREATE_ARTICLE, ARTICLE_LIST, UPDATE_ARTICLE } from "quries/ARTICLE";
let CodeMirrorEditor = null;
if (process.browser)
  CodeMirrorEditor = dynamic(() =>
    import("./CodeMirror").then((mod) => mod.CodeMirrorEditor)
  );

let validationSchema = yup.object().shape({
  title: yup.mixed().required("ডায়েরির title দেননি"),
  body: yup.mixed().required("Required"),
  tags: yup.mixed().required("Atlease one tag need to provide"),
  isPublished: yup.boolean().required("isPublished ফিল্ড দেননি"),
  thumbnail: yup.string().url("thumbnail এ ভুল লিঙ্ক দিয়েছেন").nullable(),
  seriesName: yup.string().nullable(),
});

const MarkdownEditor = () => {
  let router = useRouter();

  let [createArticle, serverErrors] = useMutation(CREATE_ARTICLE, {
    refetchQueries: [{ query: ARTICLE_LIST }],
  });

  const defaultparams = `---\ntitle: \ntags: \nisPublished: false\nthumbnail:\n---\n\nYour content starts from here....`;
  const [content, setContent] = useState(defaultparams);
  const [errors, setErrors] = useState([]);

  // @ts-ignore
  // console.log(mOptions?.error?.graphQLErrors);

  const handleSave = () => {
    const {
      attributes,
      body,
    }: {
      attributes: {
        title: string;
        tags: string;
        isPublished: boolean;
        thumbnail: string;
        seriesName: string;
      };
      body: string;
    } = fm(content);

    const {
      title,
      tags,
      isPublished = false,
      thumbnail,
      seriesName,
    } = attributes;

    validationSchema
      .validate({
        title,
        tags,
        isPublished,
        thumbnail,
        seriesName,
        body,
      })
      .then(() => {
        setErrors([]);
        createArticle({
          variables: { title, tags, isPublished, seriesName, body },
        })
          .then((res) => {
            router.push(`${res.data.createArticle.url}`);
          })
          .catch(console.error);
      })
      .catch((error) => {
        setErrors(error.errors);
      });
  };

  return (
    <StyledMarkdownEditor>
      <Row>
        <pre>
          {JSON.stringify(
            serverErrors?.error?.networkError?.message,
            undefined,
            4
          )}
        </pre>
        <StyledCol md={9}>
          {errors && errors.map((err, index) => <h2 key={index}>{err}</h2>)}

          {CodeMirrorEditor && (
            <CodeMirrorEditor
              value={content}
              onChanged={(val) => setContent(val)}
            />
          )}
        </StyledCol>
        <StyledCol md={3}>
          <div className="actions">
            <Button type="button" onClick={handleSave}>
              সংরক্ষণ করুন{" "}
            </Button>
            <button>Clear changes</button>
          </div>
        </StyledCol>
      </Row>
    </StyledMarkdownEditor>
  );
};

export default MarkdownEditor;
