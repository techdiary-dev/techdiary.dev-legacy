import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import LoadingOverlay from "react-loading-overlay";
import { StyledMarkdownEditor } from "./styles";
import mater from "gray-matter";
import Button from "components/Form/Button";
import { Row } from "styled-grid-system-component";
import { StyledCol } from "styles/StyledGrid";

import { useMutation } from "@apollo/react-hooks";
import { useRouter } from "next/router";

import { CREATE_ARTICLE, ARTICLE_LIST, UPDATE_ARTICLE } from "quries/ARTICLE";
import { Danger } from "components/Alert";
import { validateCreateArticleInput } from "lib/Validator";
import codeMirrorPersist from "lib/codeMirrorPersist";
import { CatchServerErrors } from "lib/CatchServerErrors";

let CodeMirrorEditor = null;

if (typeof window !== "undefined")
  CodeMirrorEditor = dynamic(() =>
    import("./CodeMirror").then((mod) => mod.CodeMirrorEditor)
  );

export function makeProperties({
  title = "",
  tags = [],
  isPublished = false,
  thumbnail = "",
  body = "Your content starts from here....",
  seriesName = "",
}: {
  title?: string;
  tags?: string[];
  isPublished?: boolean;
  thumbnail?: string;
  body?: string;
  seriesName?: string;
}) {
  return `---\ntitle: ${title}\ntags: ${tags.join(
    ", "
  )} \nisPublished: ${isPublished}\n${
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
    tags?: string[];
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

  let [createArticle, { loading: cLoading }] = useMutation(CREATE_ARTICLE, {
    refetchQueries: [{ query: ARTICLE_LIST }],
  });

  let [updateArticle, { loading: uLoading }] = useMutation(UPDATE_ARTICLE, {
    refetchQueries: [{ query: ARTICLE_LIST }],
  });

  const [content, setContent] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (
      Object.keys(defaultValues).length &&
      !localStorage.getItem(`${router.query?._id}`)
    ) {
      setContent(makeProperties(defaultValues));
      console.log(defaultValues);
    }
  }, [defaultValues]);

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
          router.push(res.data.updateArticle.url);
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
      setErrors(CatchServerErrors(error));
    }
  };

  return (
    <LoadingOverlay active={loading || cLoading || uLoading} spinner>
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
                mediaHandle={(file: File) => console.log(file)}
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
    </LoadingOverlay>
  );
};
export default MarkdownEditor;
