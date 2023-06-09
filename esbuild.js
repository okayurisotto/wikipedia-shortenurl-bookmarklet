const esbuild = require("esbuild");
const path = require("path");
const fs = require("fs");

esbuild.buildSync({
  bundle: true,
  entryPoints: [path.resolve(__dirname, "./src/main.ts")],
  minify: true,
  outfile: path.resolve(__dirname, "./out/main.js"),
  platform: "browser",
});

fs.writeFileSync(
  path.resolve(__dirname, "./out/bookmarklet.txt"),
  `javascript:${encodeURIComponent(
    `void((()=>{${fs.readFileSync(path.resolve(__dirname, "./out/main.js"), {
      encoding: "utf8",
    })}})());`,
  )}`,
);
