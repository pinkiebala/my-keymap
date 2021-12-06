import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

interface KeybindingInput {
  key?: string;
  keys?: string[];
}

interface KeybindingOutput {
  key?: string;
}

console.log("Export type:", process.env.TYPE);
const isMac = process.env.TYPE === "mac";
const PACKAGE_PATH = resolve(__dirname, "..", "..", "package.json");
const KEYBINDINGS_PATH = resolve(
  __dirname,
  "..",
  "..",
  isMac ? `keybindings.mac.json` : `keybindings.json`
);

const pkg = JSON.parse(readFileSync(PACKAGE_PATH).toString());

const keybindings: KeybindingInput[] = JSON.parse(
  readFileSync(KEYBINDINGS_PATH).toString()
);

pkg.contributes.keybindings = keybindings.reduce<KeybindingOutput[]>(
  (sum, keybinding) => {
    const { keys, ...remain } = keybinding;
    if (keys) {
      return [...sum, ...keys.map((key) => ({ ...remain, key }))];
    }
    return [...sum, remain];
  },
  []
);

writeFileSync(PACKAGE_PATH, JSON.stringify(pkg, null, 2));
