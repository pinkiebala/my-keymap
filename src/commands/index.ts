import { Selection, window, commands } from "vscode";
import type { EditorContextCommand } from "../lib/EditorContext";
export { travelForwardParagraph, travelBackwardParagraph } from "./paragraph";

export const markSet: EditorContextCommand = (editorContext) => {
  editorContext.isMarkMode = true;
  const { textEditor } = editorContext;
  const {
    selection: { active },
  } = textEditor;
  textEditor.selections = [new Selection(active, active)];
  window.setStatusBarMessage("Mark set", 3000);
};

export const cancelMarkSet: EditorContextCommand = (editorContext) => {
  editorContext.isMarkMode = false;
  const {
    selection: { active },
  } = editorContext.textEditor;
  editorContext.textEditor.selections = [new Selection(active, active)];
  window.setStatusBarMessage("Cancel mark set", 3000);
};

export const cursorTop: EditorContextCommand = ({ isMarkMode }) => {
  commands.executeCommand(isMarkMode ? "cursorTopSelect" : "cursorTop");
};

export const cursorBottom: EditorContextCommand = ({ isMarkMode }) => {
  commands.executeCommand(isMarkMode ? "cursorBottomSelect" : "cursorBottom");
};

export const cursorHome: EditorContextCommand = ({ isMarkMode }) => {
  commands.executeCommand(isMarkMode ? "cursorHomeSelect" : "cursorHome");
};

export const cursorEnd: EditorContextCommand = ({ isMarkMode }) => {
  commands.executeCommand(isMarkMode ? "cursorEndSelect" : "cursorEnd");
};

export const cursorUp: EditorContextCommand = ({ isMarkMode }) => {
  commands.executeCommand(isMarkMode ? "cursorUpSelect" : "cursorUp");
};

export const cursorRight: EditorContextCommand = ({ isMarkMode }) => {
  commands.executeCommand(isMarkMode ? "cursorRightSelect" : "cursorRight");
};

export const cursorDown: EditorContextCommand = ({ isMarkMode }) => {
  commands.executeCommand(isMarkMode ? "cursorDownSelect" : "cursorDown");
};

export const cursorLeft: EditorContextCommand = ({ isMarkMode }) => {
  commands.executeCommand(isMarkMode ? "cursorLeftSelect" : "cursorLeft");
};

export const cursorWordEndRight: EditorContextCommand = ({ isMarkMode }) => {
  commands.executeCommand(
    isMarkMode ? "cursorWordEndRightSelect" : "cursorWordEndRight"
  );
};

export const cursorWordLeft: EditorContextCommand = ({ isMarkMode }) => {
  commands.executeCommand(
    isMarkMode ? "cursorWordLeftSelect" : "cursorWordLeft"
  );
};
