import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import LoadingOverlay from "react-loading-overlay";
import { StyledMarkdownEditor } from "./styles";
import matter from "gray-matter";
import Button from "components/Button";
import { Row } from "styled-grid-system-component";
import { StyledCol } from "styles/StyledGrid";
import { useMutation } from "@apollo/react-hooks";
import { useRouter } from "next/router";

import { CREATE_ARTICLE, ARTICLE_LIST, UPDATE_ARTICLE } from "quries/ARTICLE";
import { Danger } from "components/Alert";
import { validateCreateArticleInput } from "lib/Validator";
import codeMirrorPersist from "lib/codeMirrorPersist";
import { CatchServerErrors } from "lib/CatchServerErrors";
import { InfoCard } from "components/InfoCard";
import FileUploader from "components/Form/FileUploader";
import { handleFileUpload } from "lib/fileUpload";
import ReactMarkdown from "react-markdown";
import { Highlighter } from "lib/prismhiglight";
import classNames from "classnames";

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
    const frontMatter = matter(content);

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

  const handleMedia = async (file: File) => {
    const url: string = await handleFileUpload(file);
    return url;
  };
  return (
    <Row>
      <StyledCol md={9}>
        {Array.isArray(errors) &&
          errors?.map((err, index) => (
            <Danger dismissable={false} key={index}>
              {err}
            </Danger>
          ))}
        <div className="flex mb-4">
          <div className="w-1/3"></div>

          <a
            className={classNames(
              "inline-block border  py-4 text-xl px-3 rounded mr-6 cursor-pointer transition ease-in-out duration-300 ",
              {
                "bg-teal-500 text-white": preview,
                "hover:bg-green-300": !preview,
              }
            )}
            onClick={() => togglePreview(true)}
          >
            Preview
          </a>
          <a
            className={classNames(
              "inline-block border py-4 text-xl px-3 rounded mr-6 cursor-pointer transition ease-in-out duration-300 ",
              {
                "bg-teal-500 text-white": !preview,
                "hover:bg-green-300": preview,
              }
            )}
            onClick={() => togglePreview(false)}
          >
            Edit
          </a>

          <div className="w-1/3"></div>
        </div>
        <FileUploader />
        <div style={{ height: "20px" }}></div>
        {!preview && CodeMirrorEditor && (
          <LoadingOverlay active={loading || cLoading || uLoading} spinner>
            <StyledMarkdownEditor>
              <CodeMirrorEditor
                value={content}
                onChanged={setContent}
                handleMedia={handleMedia}
              />

              <div className="editor-ribbon">
                <Button type="button" size="small" onClick={handleSave}>
                  সংরক্ষণ করুন{" "}
                </Button>
                <Button
                  type="button"
                  color="link"
                  size="small"
                  onClick={handleReset}
                >
                  Clear changes
                </Button>
              </div>
            </StyledMarkdownEditor>
          </LoadingOverlay>
        )}

        {preview && (
          <ReactMarkdown
            source={matter(content).content}
            renderers={{
              code: Highlighter,
              inlineCode: ({ value }) => (
                <code className="language-text">{value}</code>
              ),
            }}
            linkTarget="_blank"
            className="markdown"
          />
        )}
      </StyledCol>
      <StyledCol md={3}>
        <InfoCard>
          <p>
            ইডিটর এর লিখা <b>সেভ</b> করার আগ পর্যন্ত ব্রাউজারে সংরক্ষিত অবস্থায়
            থাকবে, কোন কারনে এই ট্যাবটি কেটে গেলে বা পেজ রিলোড হয়ে গেলে ভয়
            পাওয়ার কোন কারন নেই 😊 🎉
          </p>
        </InfoCard>
        <InfoCard title="নির্দেশনা ">
          <p>
            এই এডিটরে{" "}
            <a
              target="_blank"
              className="external-link"
              href="https://guides.github.com/features/mastering-markdown/"
            >
              মার্কডাউনের
            </a>{" "}
            সাথে{" "}
            <code>
              <a
                target="_blank"
                className="external-link"
                href="https://jekyllrb.com/docs/front-matter/"
              >
                Jekyll Frontmatter{" "}
              </a>
            </code>
            ব্যবহার করা হয়েছে যেখানে নিম্নোক্ত প্রোপার্টি ব্যবহার করতে হবে:
          </p>
          <ul className="list-unstyled">
            <li>
              <span className="color-red">title</span>: ডায়েরির টাইটেল
            </li>
            <li>
              <span className="color-red">tags:</span> ডায়েরির ট্যাগসমূহ (একাধিক
              ট্যাগ কমা(,) দিয়ে আলাদা করে দিতে হবে)
            </li>
            <li>
              <span className="color-red">isPublished:</span> ডায়েরি কি প্রকাশিত
              করবেন (true or false)
            </li>
            <li>
              <span className="color-red">thumbnail:</span> ডায়েরির কভার ছবি
              (স্ট্যান্ডার্ড সাইজ ১২০০x৬৩০ পিক্সেল)
            </li>
            <li>
              <span className="color-red">seriesName:</span> সিরিজ আর্টিকেলের
              নাম
            </li>
          </ul>
        </InfoCard>
      </StyledCol>
    </Row>
  );
};
export default MarkdownEditor;
