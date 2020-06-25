import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { StyledMarkdownEditor } from "./styles";
import mater from "gray-matter";
import Button from "components/Form/Button";
import { Row } from "styled-grid-system-component";
import { StyledCol } from "styles/StyledGrid";

import { useMutation } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import * as yup from "yup";
import { CREATE_ARTICLE, ARTICLE_LIST, UPDATE_ARTICLE } from "quries/ARTICLE";
import { Danger } from "components/Alert";
import { validateCreateArticleInput } from "lib/Validator";
import codeMirrorPersist from "lib/codeMirrorPersist";

let CodeMirrorEditor = null;

if (typeof window !== "undefined")
  CodeMirrorEditor = dynamic(() =>
    import("./CodeMirror").then((mod) => mod.CodeMirrorEditor)
  );

export function makeProperties({
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
    thumbnail ? `thumbnail: ${thumbnail}\n` : ""
  }${seriesName ? `seriesName: ${seriesName}\n` : ""}---\n\n${body}`;
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

  let [updateArticle] = useMutation(UPDATE_ARTICLE, {
    refetchQueries: [{ query: ARTICLE_LIST }],
  });

  const [content, setContent] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (router.query?._id && !localStorage.getItem(`${router.query?._id}`)) {
      setContent(makeProperties(defaultValues));
    }
  }, [loading, defaultValues]);

  let removeItem;

  if (router.query._id) {
    const { clear } = codeMirrorPersist({
      name: router.query._id,
      value: content,
      setValue: setContent,
    });
    removeItem = clear;
  } else {
    const { clear } = codeMirrorPersist({
      name: "createPost",
      value: content,
      setValue: setContent,
    });
    removeItem = clear;
  }
  const handleReset = () => {
    if (router.query._id) {
      removeItem();
      setContent(makeProperties(defaultValues));
    } else {
      removeItem();
      setContent(makeProperties({}));
    }
  };
  const handleSave = async () => {
    const frontMatter = mater(content);

    try {
      const err: any = await validateCreateArticleInput({
        ...frontMatter.data,
        body: frontMatter.content,
      });

      if (err.length) {
        console.log(err);
        setErrors(err);
        return;
      }

      let validateAttributes: Partial<IAttributes> = { ...frontMatter.data };
      validateAttributes.tags = frontMatter.data.tags.split(",");
      if (router.query._id) {
        const res = await updateArticle({
          variables: {
            ...validateAttributes,
            body: frontMatter.content,
            _id: router.query._id,
          },
        });
        if (res) {
          setContent("");
          removeItem();
          router.push("/");
        }
        return;
      }
      const res = await createArticle({
        variables: {
          ...validateAttributes,
          body: frontMatter.content,
        },
      });
      if (res) {
        setContent("");
        removeItem();
        router.push(res.data.createArticle.url);
      }
    } catch (error) {
      console.error(error);
    }
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
            <Button onClick={handleReset}>Clear changes</Button>
          </div>
        </StyledCol>
      </Row>
    </StyledMarkdownEditor>
  );
};
export default MarkdownEditor;
