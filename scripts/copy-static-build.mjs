import { cpSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const projectRoot = path.resolve(import.meta.dirname, "..");
const distDirectory = path.join(projectRoot, "dist");

cpSync(path.join(distDirectory, "assets"), path.join(projectRoot, "assets"), {
  recursive: true,
});
const builtHtmlPath = path.join(distDirectory, "index.html");
const builtHtml = readFileSync(builtHtmlPath, "utf8").replace(/\r\n?/g, "\n");
writeFileSync(builtHtmlPath, builtHtml);
writeFileSync(path.join(projectRoot, "index.html"), builtHtml);
