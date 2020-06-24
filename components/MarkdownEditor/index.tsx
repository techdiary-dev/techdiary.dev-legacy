import React, { useState, useEffect } from "react";
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
import { Danger } from "components/Alert";
import { validateCreateArticleInput } from "lib/Validator";

let CodeMirrorEditor = null;

if (typeof window === "undefined")
  CodeMirrorEditor = dynamic(() =>
    import("./CodeMirror").then((mod) => mod.CodeMirrorEditor)
  );

function makeProperties({
  title = "",
  tags = "",
  isPublished = false,
  thumbnail = "",
  body = "Your content starts from here....",
  seriesName = "",
}: {
  title?: string;
  tags?: string | string[];
  isPublished?: boolean;
  thumbnail?: string;
  body?: string;
  seriesName?: string;
}) {
  return `---\ntitle: ${title}\ntags: \nisPublished: ${isPublished}\n${
    thumbnail ? `thumbnail: ${thumbnail}` : ""
  }\n${seriesName ? `seriesName: ${seriesName}` : ""}\n---\n\n${body}`;
}

interface IAttributes {
  title: string;
  tags: string;
  isPublished: boolean;
  thumbnail: string;
  seriesName: string;
}

interface Props {
  defaultValues?: {
    title?: string;
    tags?: string;
    isPublished?: boolean;
    thumbnail?: string;
    seriesName?: string;
    body?: string;
  };
  _id?: string | string[];
  loading?: boolean;
}

const MarkdownEditor = ({ defaultValues = {}, _id, loading }: Props) => {
  let router = useRouter();

  let [createArticle] = useMutation(CREATE_ARTICLE, {
    refetchQueries: [{ query: ARTICLE_LIST }],
  });

  const [content, setContent] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    setContent(makeProperties(defaultValues));
  }, [defaultValues]);

  const handleSave = () => {
    const {
      attributes,
      body,
    }: {
      attributes: IAttributes;
      body: string;
    } = fm(content);

    validateCreateArticleInput({ ...attributes, body })
      .then(() => {
        let validateAttributes: any = { ...attributes };
        validateAttributes.tags = attributes.tags.split(",");

        createArticle({ variables: { ...validateAttributes, body } })
          .then((res) => {
            router.push(`${res.data.createArticle.url}`);
          })
          .catch(console.error);
      })
      .catch(setErrors);
  };

  return (
    <StyledMarkdownEditor>
      <Row>
        <StyledCol md={9}>
          {Array.isArray(errors) &&
            errors?.map((err, index) => (
              <Danger dismissable={false} key={index}>
                {err}
              </Danger>
            ))}

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
