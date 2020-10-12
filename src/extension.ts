// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import * as editorCcontextCommands from "./commands";
import { EditorContext } from "./lib/EditorContext";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "my-keymap" is now active!');

  const editorContextMap = new Map();

  const getOrRegisterActiveEditorContext = () => {
    const key = vscode.window.activeTextEditor!.document.fileName;

    if (!editorContextMap.has(key)) {
      editorContextMap.set(
        key,
        new EditorContext(vscode.window.activeTextEditor!)
      );
    }
    return editorContextMap.get(key)!;
  };

  vscode.workspace.onDidCloseTextDocument((document) => {
    const key = document.fileName;
    editorContextMap.delete(key);
  });

  const registerEditorContextCommand = (
    command: string,
    callback: (editorContext: EditorContext, ...args: any[]) => any
  ) => {
    const disposable = vscode.commands.registerCommand(command, (...args) => {
      const editorContext = getOrRegisterActiveEditorContext();
      callback(editorContext, ...args);
    });
    context.subscriptions.push(disposable);
  };

  Object.entries(editorCcontextCommands).forEach(([key, callback]) => {
    registerEditorContextCommand(`my-keymap.${key}`, callback);
  });
}

// this method is called when your extension is deactivated
export function deactivate() {}
