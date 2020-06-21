import React, { useState, useEffect } from "react";
import "codemirror/addon/runmode/runmode";
import "codemirror/mode/meta";
import "codemirror/mode/jsx/jsx";
import "codemirror/mode/css/css";
import "codemirror/mode/gfm/gfm";
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

interface ICodeMirrorEditor {
  value: string;
  mediaHandle?: Function;
  onChanged: Function;
}

export const CodeMirrorEditor: React.FC<ICodeMirrorEditor> = (
  props: ICodeMirrorEditor
) => {
  const [value, setValue] = useState(props.value);

  useEffect(() => {
    props.onChanged(value);
  }, [value]);

  const handleMedia = (file: File) => {
    props.mediaHandle(file);
  };

  const handleDrop = (editor: CodeMirror.Editor, event: DragEvent) => {
    if (!event.dataTransfer) return;

    const files = event.dataTransfer.files;
    if (files.length) {
      event.preventDefault();
      const file = files[0];
      handleMedia(file);
    }
  };

  const handlePaste = (editor: CodeMirror.Editor, event: ClipboardEvent) => {
    console.log(event);
    if (event?.clipboardData?.files.length) {
      event.preventDefault();
      const file = event.clipboardData.files[0];
      handleMedia(file);
    }
  };
  return (
    <CodeMirror
      value={value}
      options={{
        mode: "gfm",
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
      onBeforeChange={(editor, data, value) => setValue(value)}
      onDrop={handleDrop}
      onPaste={handlePaste}
    />
  );
};
