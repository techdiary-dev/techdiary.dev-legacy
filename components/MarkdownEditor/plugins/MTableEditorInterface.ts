import { Point, ITextEditor } from "@susisu/mte-kernel";

// See https://doc.esdoc.org/github.com/susisu/mte-kernel/class/lib/text-editor.js~ITextEditor.html
// This helped me a lot https://github.com/susisu/mte-demo/blob/master/src/main.js
export class TextEditorInterface extends ITextEditor {
  editor: CodeMirror.Editor;
  doc: CodeMirror.Doc;
  transaction: boolean;
  onDidFinishTransaction: any;
  constructor(editor: CodeMirror.Editor) {
    super();
    this.editor = editor;
    this.doc = editor.getDoc();
    this.transaction = false;
    this.onDidFinishTransaction = null;
  }

  getCursorPosition() {
    const { line, ch } = this.doc.getCursor();
    return new Point(line, ch);
  }

  setCursorPosition(pos) {
    this.doc.setCursor({ line: pos.row, ch: pos.column });
  }

  setSelectionRange(range) {
    this.doc.setSelection(
      { line: range.start.row, ch: range.start.column },
      { line: range.end.row, ch: range.end.column }
    );
  }

  getLastRow() {
    return this.doc.lineCount() - 1;
  }

  acceptsTableEdit() {
    return true;
  }

  getLine(row) {
    return this.doc.getLine(row);
  }

  insertLine(row, line) {
    const lastRow = this.getLastRow();
    if (row > lastRow) {
      const lastLine = this.getLine(lastRow);
      this.doc.replaceRange(
        "\n" + line,
        { line: lastRow, ch: lastLine.length },
        { line: lastRow, ch: lastLine.length }
      );
    } else {
      this.doc.replaceRange(
        line + "\n",
        { line: row, ch: 0 },
        { line: row, ch: 0 }
      );
    }
  }

  deleteLine(row: number) {
    const lastRow = this.getLastRow();
    if (row >= lastRow) {
      if (lastRow > 0) {
        const preLastLine = this.getLine(lastRow - 1);
        const lastLine = this.getLine(lastRow);
        this.doc.replaceRange(
          "",
          { line: lastRow - 1, ch: preLastLine.length },
          { line: lastRow, ch: lastLine.length }
        );
      } else {
        const lastLine = this.getLine(lastRow);
        this.doc.replaceRange(
          "",
          { line: lastRow, ch: 0 },
          { line: lastRow, ch: lastLine.length }
        );
      }
    } else {
      this.doc.replaceRange("", { line: row, ch: 0 }, { line: row + 1, ch: 0 });
    }
  }

  replaceLines(startRow: number, endRow: number, lines: string[]) {
    const lastRow = this.getLastRow();
    if (endRow > lastRow) {
      const lastLine = this.getLine(lastRow);
      this.doc.replaceRange(
        lines.join("\n"),
        { line: startRow, ch: 0 },
        { line: lastRow, ch: lastLine.length }
      );
    } else {
      this.doc.replaceRange(
        lines.join("\n") + "\n",
        { line: startRow, ch: 0 },
        { line: endRow, ch: 0 }
      );
    }
  }

  transact(func: Function) {
    this.transaction = true;
    func();
    this.transaction = false;
    if (this.onDidFinishTransaction) {
      this.onDidFinishTransaction.call(undefined);
    }
  }
}
