import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import LoadingOverlay from "react-loading-overlay";
import { StyledMarkdownEditor } from "./styles";
import matter from "gray-matter";

import { Col, Row } from "styles/StyledGrid";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import "twin.macro";
import { CREATE_ARTICLE, ARTICLE_LIST, UPDATE_ARTICLE } from "quries/ARTICLE";

import { validateCreateArticleInput } from "lib/Validator";
import codeMirrorPersist from "lib/codeMirrorPersist";
import { CatchServerErrors } from "lib/CatchServerErrors";
import swal from "sweetalert";

import { handleFileUpload } from "lib/fileUpload";

import EditorSidebar from "./EditorSidebar";
import EditorBottomRibbon from "./EditorBottomRibbon";
import Preview from "./Preview";
import Errors from "./Errors";
import EditorTopRibbon from "./EditorTopRibbon";

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
    ","
  )} \nisPublished: ${isPublished}\n${
    thumbnail ? `thumbnail: ${thumbnail}\n` : ""
  }${seriesName ? `seriesName: ${seriesName}\n` : ""}---\n${body}`;
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
  const [preview, togglePreview] = useState(false);
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
    swal({
      title: "আগে যা সেভ করা ছিল সেই অবস্থায় ফিরে যেতে চান?",
      icon: "warning",
      buttons: ["না", "হ্যাঁ চাই"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        if (router.query._id) {
          removeItem();
          setContent(makeProperties(defaultValues));
        } else {
          removeItem();
          setContent(makeProperties({}));
        }
      }
    });
  };
  const handleSave = async () => {
    const fonst = matter.test(content);
    const frontMatter = matter(content);

    try {
      const err: any = await validateCreateArticleInput({
        ...frontMatter.data,
        body: frontMatter.content,
      });

      if (err.length) {
        window.scrollTo(0, 0);
        setErrors(err);
        return;
      }

      let validateAttributes: Partial<IAttributes> = { ...frontMatter.data };
      validateAttributes.tags = frontMatter.data.tags
        .split(",")
        .map((t) => t.trim());
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

  const handleMedia = async (file: File) => {
    const url: string = await handleFileUpload(file);
    return url;
  };

  return (
    <Row>
      <Col md={8}>
        <StyledMarkdownEditor>
          <EditorTopRibbon />
          <LoadingOverlay active={loading || cLoading || uLoading} spinner>
            <Errors errors={errors} setErrors={setErrors} />
            {!preview && CodeMirrorEditor && (
              <CodeMirrorEditor
                value={content}
                onChanged={setContent}
                handleMedia={handleMedia}
              />
            )}
            {preview && <Preview content={content} />}
          </LoadingOverlay>
          <EditorBottomRibbon
            loading={loading || cLoading || uLoading}
            handleSave={handleSave}
            handleReset={handleReset}
            togglePreview={togglePreview}
            preview={preview}
          />
        </StyledMarkdownEditor>
      </Col>
      <Col md={3} tw="sm:block hidden">
        <EditorSidebar />
      </Col>
    </Row>
  );
};
export default MarkdownEditor;
