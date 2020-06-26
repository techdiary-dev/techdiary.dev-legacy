import {
  TableEditor,
  options,
  Alignment,
  FormatType,
  HeaderAlignment,
} from "@susisu/mte-kernel/dist/mte-kernel.js";
import { TextEditorInterface } from "./MTableEditorInterface";
import CodeMirror from "codemirror";

export class MTableEditor {
  private readonly cm: CodeMirror.Editor;
  originalTableHelpers: any;
  private readonly tableEditor: any;
  private cursorActivityListener: () => void;
  private readonly editorinf: TextEditorInterface;
  constructor(cm: CodeMirror.Editor) {
    this.cm = cm;
    this.editorinf = new TextEditorInterface(this.cm);
    this.tableEditor = new TableEditor(this.editorinf);

    this.cursorActivityListener = () => this.update();
    this.cm.on("cursorActivity", this.cursorActivityListener);
    this.cm.on("changes", () => {
      if (!this.editorinf.transaction) this.cursorActivityListener();
    });
    this.editorinf.onDidFinishTransaction = () => {
      this.cursorActivityListener();
    };
  }

  update() {
    const keyMap = CodeMirror.normalizeKeyMap({
      Tab: () => {
        this.tableEditor.nextCell(this.getOptions());
      },
      "Shift-Tab": () => {
        this.tableEditor.previousCell(this.getOptions());
      },
      Enter: () => {
        this.tableEditor.nextRow(this.getOptions());
      },
      "Ctrl-Enter": () => {
        this.tableEditor.escape(this.getOptions());
      },
      "Cmd-Enter": () => {
        this.tableEditor.escape(this.getOptions());
      },
      "Shift-Ctrl-Left": () => {
        this.tableEditor.alignColumn(Alignment.LEFT, this.getOptions());
      },
      "Shift-Cmd-Left": () => {
        this.tableEditor.alignColumn(Alignment.LEFT, this.getOptions());
      },
      "Shift-Ctrl-Right": () => {
        this.tableEditor.alignColumn(Alignment.RIGHT, this.getOptions());
      },
      "Shift-Cmd-Right": () => {
        this.tableEditor.alignColumn(Alignment.RIGHT, this.getOptions());
      },
      "Shift-Ctrl-Up": () => {
        this.tableEditor.alignColumn(Alignment.CENTER, this.getOptions());
      },
      "Shift-Cmd-Up": () => {
        this.tableEditor.alignColumn(Alignment.CENTER, this.getOptions());
      },
      "Shift-Ctrl-Down": () => {
        this.tableEditor.alignColumn(Alignment.NONE, this.getOptions());
      },
      "Shift-Cmd-Down": () => {
        this.tableEditor.alignColumn(Alignment.NONE, this.getOptions());
      },
      "Ctrl-Left": () => {
        this.tableEditor.moveFocus(0, -1, this.getOptions());
      },
      "Cmd-Left": () => {
        this.tableEditor.moveFocus(0, -1, this.getOptions());
      },
      "Ctrl-Right": () => {
        this.tableEditor.moveFocus(0, 1, this.getOptions());
      },
      "Cmd-Right": () => {
        this.tableEditor.moveFocus(0, 1, this.getOptions());
      },
      "Ctrl-Up": () => {
        this.tableEditor.moveFocus(-1, 0, this.getOptions());
      },
      "Cmd-Up": () => {
        this.tableEditor.moveFocus(-1, 0, this.getOptions());
      },
      "Ctrl-Down": () => {
        this.tableEditor.moveFocus(1, 0, this.getOptions());
      },
      "Cmd-Down": () => {
        this.tableEditor.moveFocus(1, 0, this.getOptions());
      },
      "Ctrl-K Ctrl-I": () => {
        this.tableEditor.insertRow(this.getOptions());
      },
      "Cmd-K Cmd-I": () => {
        this.tableEditor.insertRow(this.getOptions());
      },
      "Ctrl-L Ctrl-I": () => {
        this.tableEditor.deleteRow(this.getOptions());
      },
      "Cmd-L Cmd-I": () => {
        this.tableEditor.deleteRow(this.getOptions());
      },
      "Ctrl-K Ctrl-J": () => {
        this.tableEditor.insertColumn(this.getOptions());
      },
      "Cmd-K Cmd-J": () => {
        this.tableEditor.insertColumn(this.getOptions());
      },
      "Ctrl-L Ctrl-J": () => {
        this.tableEditor.deleteColumn(this.getOptions());
      },
      "Cmd-L Cmd-J": () => {
        this.tableEditor.deleteColumn(this.getOptions());
      },
      "Alt-Shift-Ctrl-Left": () => {
        this.tableEditor.moveColumn(-1, this.getOptions());
      },
      "Alt-Shift-Cmd-Left": () => {
        this.tableEditor.moveColumn(-1, this.getOptions());
      },
      "Alt-Shift-Ctrl-Right": () => {
        this.tableEditor.moveColumn(1, this.getOptions());
      },
      "Alt-Shift-Cmd-Right": () => {
        this.tableEditor.moveColumn(1, this.getOptions());
      },
      "Alt-Shift-Ctrl-Up": () => {
        this.tableEditor.moveRow(-1, this.getOptions());
      },
      "Alt-Shift-Cmd-Up": () => {
        this.tableEditor.moveRow(-1, this.getOptions());
      },
      "Alt-Shift-Ctrl-Down": () => {
        this.tableEditor.moveRow(1, this.getOptions());
      },
      "Alt-Shift-Cmd-Down": () => {
        this.tableEditor.moveRow(1, this.getOptions());
      },
    });
    const multipleCursor = this.cm.listSelections().length > 1;
    const isInTable = this.tableEditor.cursorIsInTable(this.getOptions());

    if (isInTable && !multipleCursor) {
      this.cm.setOption("extraKeys", keyMap);
    } else {
      this.cm.setOption("extraKeys", this.cm.getOption("extraKeys"));
      this.tableEditor.resetSmartCursor();
    }
  }
  getOptions() {
    return options({
      formatType: FormatType.NORMAL,
      headerAlignment: HeaderAlignment.FOLLOW,
      smartCursor: true,
    });
  }
}
