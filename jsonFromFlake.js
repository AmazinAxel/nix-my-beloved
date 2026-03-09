import { readdir, readFile, writeFile } from "fs/promises";

const dir = '/home/alec/Projects/flake/';

const files = await readdir(dir, { recursive: true });
const data = await Promise.all(
  files.filter(file => file.endsWith('.nix')).map(file => readFile((dir +'/' + file), "utf8"))
);

await writeFile("./public/mynixflakecode.json", JSON.stringify(data, null, 2));
