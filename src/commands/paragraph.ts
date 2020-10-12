import { Selection } from "vscode";
import type { EditorContextCommand } from "../lib/EditorContext";
import { travelForward, travelBackward } from "./helpers/paragraph";

export const travelForwardParagraph: EditorContextCommand = ({
  isMarkMode,
  textEditor,
}) => {
  textEditor.selections = textEditor.selections.map((selection) => {
    const newActive = travelForward(textEditor.document, selection.active);
    return new Selection(isMarkMode ? selection.anchor : newActive, newActive);
  });
  textEditor.revealRange(textEditor.selection);
};

export const travelBackwardParagraph: EditorContextCommand = ({
  isMarkMode,
  textEditor,
}) => {
  textEditor.selections = textEditor.selections.map((selection) => {
    const newActive = travelBackward(textEditor.document, selection.active);
    return new Selection(isMarkMode ? selection.anchor : newActive, newActive);
  });
  textEditor.revealRange(textEditor.selection);
};
