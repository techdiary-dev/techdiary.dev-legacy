import React, { useEffect, useState } from "react";
import dp from "dompurify";
import { DevTool } from "react-hook-form-devtools";
import { useForm } from "react-hook-form";
import { Row, Column } from "styled-grid-system-component";
import * as yup from "yup";
import { ArticleEditorStyle } from "./styles";
import { Card } from "components/Card";
import Input from "components/Form/Input";
import Button from "components/Form/Button";
import Checkbox from "components/Form/Checkbox";
import Editor from "components/Form/Editor";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_ARTICLE, ARTICLE_LIST, UPDATE_ARTICLE } from "quries/ARTICLE";
import { useRouter } from "next/dist/client/router";
import { USER_PROFILE } from "quries/AUTH";

interface Props {
  defaultValues?: object;
  _id?: string | string[];
  loading?: boolean;
}

const ArticleEditor = ({
  defaultValues = {},
  _id,
  loading,
}: Props): JSX.Element => {
  let [createArticle, mOptions] = useMutation(CREATE_ARTICLE, {
    refetchQueries: [{ query: ARTICLE_LIST }],
  });

  let [updateArticle, mOptions2] = useMutation(UPDATE_ARTICLE, {
    refetchQueries: [{ query: ARTICLE_LIST }],
  });

  let router = useRouter();

  let validationSchema = yup.object().shape({
    title: yup.string().required("Required"),
    body: yup.string().required("Required"),
    tags: yup.string().required("Required"),
    isPublished: yup.boolean(),
    thumbnail: yup.string().url(),
  });

  const {
    register,
    handleSubmit,
    errors,
    control,
    setValue,
    reset,
    getValues,
  } = useForm({
    validationSchema,
  });

  useEffect(() => {
    console.log(defaultValues);
    reset(defaultValues);
  }, [loading]);

  useEffect(() => {
    register("body");
  }, [register]);

  const onSubmit = (variables) => {
    variables.body = dp.sanitize(variables.body, { FORBID_TAGS: ["style"] });
    variables.tags = variables.tags.split(",");

    if (Object.keys(defaultValues).length) {
      variables._id = _id;
      updateArticle({ variables })
        .then((res) => {
          // TODO: redirect to article details page
          router.push("/dashboard");
        })
        .catch(console.error);
    } else {
      createArticle({ variables })
        .then((res) => {
          // TODO: redirect to article details page
          router.push("/dashboard");
        })
        .catch(console.error);
    }
  };

  return (
    <ArticleEditorStyle>
      {process.env.NODE_ENV !== "production" && <DevTool control={control} />}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Column md={3}>
            <Card>
              <Checkbox
                label="প্রকাশ করবেন?"
                name="isPublished"
                inputRef={register}
              />
              <Input
                label="টাইটেল"
                name="title"
                isRequired
                placeholder="আর্টিক্যাল এর টাইটেল"
                hasError={errors?.title}
                helperText={errors?.title?.message}
                inputRef={register}
              />
              <Input
                label="ট্যাগ সমূহ"
                name="tags"
                isRequired
                placeholder="আর্টিক্যাল ট্যাগ সমূহ"
                hasError={errors?.tags}
                helperText={
                  errors?.tags?.message ?? "ট্যাগ সমূহ কমা(,) দিয়ে লিখুন"
                }
                inputRef={register}
              />
              <Input
                label="কভার ছবি"
                name="thumbnail"
                placeholder="কভার ছবি এর url"
                inputRef={register}
                hasError={errors?.thumbnail}
                helperText={errors?.thumbnail?.message}
              />
              <Button type="submit">সেভ করুন</Button>
            </Card>
          </Column>
          <Column md={9}>
            <Editor
              onChange={(body) => setValue("body", body)}
              style={{ height: 500 }}
              hasError={errors?.body}
              helperText={errors?.body?.message}
              value={getValues("body")}
            />
          </Column>
        </Row>
      </form>
    </ArticleEditorStyle>
  );
};

export default ArticleEditor;
