import { Editor } from "codemirror";

declare module "codemirror" {
  interface CommandActions {
    autoUnindentMarkdownList(cm: Editor): void;
    autoIndentMarkdownList(cm: Editor): void;
  }
}
