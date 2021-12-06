# my-keymap

This is my vscode customize keymap.

## Packaging

`npm install -g vsce`
`vsce package`

### For Mac

`TYPE=mac vsce package`

## Install

1. Click VSCode extension icon on sidebar
2. Click right top 3 points option
3. Click `Install from VSIX...`
4. Select the .vsix file from Packaging

Note:

- Linux set `caps-lock` as `ctrl`
- Mac set `caps-lock` as `cmd`, `cmd` as `ctrl`, `global` as `caps-lock`

## Commands

### Mark Commands

| Key          | Action          |
| ------------ | --------------- |
| `ctrl+space` | Mark set        |
| `ctrl+g`     | Cancel mark set |

### Move Commands

| Key           | Action                  |
| ------------- | ----------------------- |
| `alt+shift+,` | cursorTop               |
| `alt+shift+.` | cursorBottom            |
| `ctrl+a`      | cursorHome              |
| `ctrl+e`      | cursorEnd               |
| `ctrl+i`      | cursorUp                |
| `ctrl+l`      | cursorRight             |
| `ctrl+k`      | cursorDown              |
| `ctrl+j`      | cursorLeft              |
| `alt+i`       | travelForwardParagraph  |
| `alt+k`       | travelBackwardParagraph |
| `alt+l`       | cursorWordEndRight      |
| `alt+j`       | cursorWordLeft          |

### Edit Commands

| Key           | Action                            |
| ------------- | --------------------------------- |
| `ctrl+d`      | delete                            |
| `ctrl+h`      | backspace                         |
| `alt+d`       | delete word                       |
| `alt+h`       | backspace word                    |
| `alt+shift+i` | editor.action.moveLinesUpAction   |
| `alt+shift+k` | editor.action.moveLinesDownAction |
