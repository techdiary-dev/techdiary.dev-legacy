import React, { useState, useEffect } from "react";
import "codemirror/addon/runmode/runmode";
import "codemirror/mode/meta";
import "codemirror/mode/jsx/jsx";
import "codemirror/mode/css/css";
import "codemirror/mode/gfm/gfm";
import "codemirror/mode/yaml-frontmatter/yaml-frontmatter";
import "codemirror/mode/python/python";
import "codemirror/mode/nginx/nginx";
import "codemirror/mode/markdown/markdown";
import "codemirror/mode/shell/shell";
import "codemirror/addon/edit/continuelist";
import "codemirror/addon/dialog/dialog";
import "./plugins/indentlist";
import { MTableEditor } from "./plugins/MTableEditor";
import "codemirror/addon/edit/closebrackets";
import "codemirror/lib/codemirror";
import "codemirror/mode/htmlmixed/htmlmixed";
import { Controlled as CodeMirror } from "react-codemirror2";
import { randomBytes } from "crypto";

interface ICodeMirrorEditor {
  value: string;
  handleMedia?: (file: File) => Promise<string>;
  onChanged: (value: string) => void;
}

export const CodeMirrorEditor: React.FC<ICodeMirrorEditor> = (
  props: ICodeMirrorEditor
) => {
  const handleMedia = async (editor: CodeMirror.Editor, file: File) => {
    if (typeof props.handleMedia === "undefined") {
      return;
    }
    const imageUUID = randomBytes(12).toString("hex");
    const str = `[Uploading...](${imageUUID})`;
    const cursor = editor.getCursor();
    const url = await props.handleMedia(file);
    if (!file.type.startsWith("images")) return;
    editor.getDoc().replaceRange(`\n${str}`, cursor);
    props.onChanged(`${editor.getValue()}`);
    if (url.length) {
      props.onChanged(
        `${editor
          .getValue()
          .replace(str, `[${file.name.split(".")[0]}](${url})`)}\n`
      );
    }
  };
  const handleDrop = (editor: CodeMirror.Editor, event: DragEvent) => {
    if (!event.dataTransfer) return;

    const files = event.dataTransfer.files;
    if (files.length) {
      event.preventDefault();
      const file = files[0];
      handleMedia(editor, file);
    }
  };

  const handlePaste = (editor: CodeMirror.Editor, event: ClipboardEvent) => {
    if (event?.clipboardData?.files.length) {
      event.preventDefault();
      const file = event.clipboardData.files[0];
      handleMedia(editor, file);
    }
  };
  return (
    <CodeMirror
      value={props.value}
      options={{
        mode: "yaml-frontmatter",
        theme: "solarized light",
        indentUnit: 2,
        indentWithTabs: false,
        autoCloseBrackets: true,
        extraKeys: {
          Enter: (editor: CodeMirror.Editor) => {
            editor.execCommand("newlineAndIndentContinueMarkdownList");
          },
          Tab: (editor: CodeMirror.Editor) => {
            editor.execCommand("autoIndentMarkdownList");
          },
          "Shift-Tab": (editor: CodeMirror.Editor) => {
            editor.execCommand("autoUnindentMarkdownList");
          },
        },
        lineWrapping: true,
        addModeClass: true,
      }}
      editorDidMount={(editor: CodeMirror.Editor) => {
        new MTableEditor(editor);
      }}
      onBeforeChange={(editor, data, value) => {
        props.onChanged(value);
      }}
      onDrop={handleDrop}
      onPaste={handlePaste}
    />
  );
};
