import React, { useEffect } from "react";
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
import { useRouter } from "next/router";
import useFormPersist from "lib/hook-form-persist";
import useMe from "components/useMe";

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
  const { data: me } = useMe();
  const { query } = useRouter();
  let [createArticle, mOptions] = useMutation(CREATE_ARTICLE, {
    refetchQueries: [{ query: ARTICLE_LIST }],
  });

  let [updateArticle, mOptions2] = useMutation(UPDATE_ARTICLE, {
    refetchQueries: [{ query: ARTICLE_LIST }],
  });

  let router = useRouter();

  let validationSchema = yup.object().shape({
    title: yup.string().required("Required"),
    body: yup
      .string()
      .min(6, "Length must be more than 6 character")
      .required("Required"),
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
    watch,
    getValues,
  } = useForm({
    validationSchema,
  });

  useEffect(() => {
    if (query?._id && !localStorage.getItem(`${query?._id}`))
      reset(defaultValues);
  }, [loading]);

  useEffect(() => {
    register("body");
  }, [register]);

  const onSubmit = (variables) => {
    variables.tags = variables.tags.split(",");

    if (Object.keys(defaultValues).length) {
      variables._id = _id;
      updateArticle({ variables })
        .then((res) => {
          router.push(`/${me.username}/${res.data.updateArticle.slug}`);
        })
        .catch(console.error);
    } else {
      createArticle({ variables })
        .then((res) => {
          router.push(`/${me.username}/${res.data.createArticle.slug}`);
        })
        .catch(console.error);
    }
  };

  return (
    <ArticleEditorStyle>
      {process.env.NODE_ENV !== "production" && <DevTool control={control} />}
      <form onSubmit={handleSubmit(onSubmit)}>
        {mOptions.error?.graphQLErrors.map(({ extensions, message }) => (
          <>
            <pre>{JSON.stringify(extensions.error)}</pre>
          </>
        ))}
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
