import React, { useState } from "react";
import dynamic from "next/dynamic";
import { StyledMarkdownEditor } from "./styles";

const CodeMirrorEditor = dynamic(() =>
  import("./CodeMirror").then((mod) => mod.CodeMirrorEditor)
);

const MarkdownEditor = () => {
  const [value, setValue] = useState("");
  return (
    <StyledMarkdownEditor>
      <CodeMirrorEditor value="" onChanged={(value) => setValue(value)} />
    </StyledMarkdownEditor>
  );
};

export default MarkdownEditor;
