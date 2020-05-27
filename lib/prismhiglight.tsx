import Highlight from "react-syntax-highlighter";
import style from "react-syntax-highlighter/dist/cjs/styles/hljs/shades-of-purple";
import ReactMarkdown from "react-markdown";

export const Highlighter = ({
	value,
	language = 'jsx'
}: {
	value: string
	language: string
}) => {
  const [lang, title] = (language || "").split(":");
  return (
    <>
      <div className="code-title"> {title} </div>
      <Highlight
        className="highlight-pre-tag"
        style={style}
        language={lang ? lang : "jsx"}
        showLineNumbers={true}
      >
        {value ?? ""}
      </Highlight>
    </>
  );
};

export const Markdown = ({ source }: { source: string }) => {
  return (
    <ReactMarkdown
      source={source}
      renderers={{
        code: Highlighter,
        inlineCode: ({ value }) => (
          <code className="language-text">{value}</code>
        ),
      }}
      linkTarget="_blank"
      className="markdown"
    />
  );
};
