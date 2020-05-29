import React, { FC } from "react";
import FileUploader from "components/Form/FileUploader";
import dynamic from "next/dynamic";

import {
  // StyledEditorContainer,
  // StyledEditor,
  // StyledPreview,
  FormHelperTextStyles,
} from "./styles";
import { Markdown } from "lib/prismhiglight";
const MdEditor = dynamic(() => import("react-markdown-editor-lite"), {
  ssr: false,
});

export interface Props {
  value?: string;
  hasError?: boolean;
  helperText?: string;
  onChange: Function;
  style?: any;
}

const Editor: FC<Props> = ({
  onChange,
  value,
  style,
  hasError,
  helperText,
}: Props) => {
  const handleImageUpload = (file: File): Promise<string> => {
    return new Promise(async (resolve) => {
      const fd = new FormData();
      fd.append("file", file);
      fd.append("upload_preset", "techdiary-article-assets");

      const res = await (
        await fetch(
          "https://api.cloudinary.com/v1_1/techdiary-dev/image/upload",
          {
            method: "POST",
            body: fd,
          }
        )
      ).json();
      resolve(res.secure_url);
      // const reader = new FileReader()
      // reader.onload = (data) => {
      // 	// @ts-ignore
      // 	resolve(data.target.result)
      // }
      // reader.readAsDataURL(file)
    });
  };

  return (
    <>
      <FormHelperTextStyles hasError={hasError}>
        {helperText}
      </FormHelperTextStyles>
      <MdEditor
        value={value}
        style={style}
        config={{ view: { html: false, menu: true, md: true } }}
        onImageUpload={handleImageUpload}
        renderHTML={(markdownCodes) => {
          onChange(markdownCodes ?? "");
          return <Markdown source={markdownCodes} />;
        }}
      />

      <FileUploader />
    </>
  );
};

export default Editor;
