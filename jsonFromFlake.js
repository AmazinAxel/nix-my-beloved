/* how this is gonna work
run this script and pass the folder to the flake
this will open all the .nix files in the flake and put them in a .json file in public/ (so like all the nix expressions will be split into different json elements)
then the randomcodeblocks code will grab a random element from this json and display it in the background scrolling and fading
might want to grab a random section from the expression since sometimes it can be long
*/

import { readdir, readFile, writeFile } from "fs/promises";
import { join } from "path";

let data = [];
let dir = "/home/alec/Projects/flake";

async function walk() {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(fullPath); // recursiveness
    } else if (entry.name.endsWith(".nix")) {
      data.push(await readFile(fullPath, "utf8"));
    }
  }
}

await walk();

// !!!! IMPORTANT UPDATE THIS PATH HERE TO THE FOLDER WITH FLAKE
await writeFile("./public/mynixflakecode.json", JSON.stringify(data, null, 2));