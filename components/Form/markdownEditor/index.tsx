import React, { useState, useEffect } from "react";
import Editor from "react-simple-code-editor";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/shadesOfPurple";
import { Card } from "components/Card";
import ReactMarkdown from "react-markdown";
import Prism from "prismjs";

//@ts-ignore
const styles: React.CSSProperties = {
  boxSizing: "border-box",
  fontFamily: '"Space Mono", "Fira Code", monospace',
  minHeight: "40rem",
  fontSize: 18,
  ...theme.plain,
};

const highlight = (code) => (
  <Highlight {...defaultProps} theme={theme} code={code} language="markdown">
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </>
    )}
  </Highlight>
);
export const MarkdownEditor = ({ preview = false }: { preview: boolean }) => {
  const [value, setValue] = useState("```js\n const sdf = 'dfd' \n```\n");

  useEffect(() => {
    Prism.highlightAll();
  });
  return (
    <>
      {!preview ? (
        <Editor
          value={value}
          highlight={highlight}
          onValueChange={(newValue) => setValue(newValue)}
          style={styles}
          padding={10}
        />
      ) : (
        <Card>
          <div style={{ fontSize: "18px" }}>
            <ReactMarkdown source={value} />
          </div>
        </Card>
      )}
    </>
  );
};
