import { TextEditor } from "vscode";

export class EditorContext {
  public textEditor: TextEditor;
  public isMarkMode: boolean = false;

  constructor(t: TextEditor) {
    this.textEditor = t;
  }
}

export type EditorContextCommand = (
  editorContext: EditorContext,
  ...args: any[]
) => any;
