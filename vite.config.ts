import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

const projectRoot = import.meta.dirname;

export default defineConfig(() => ({
  root: path.resolve(projectRoot, "src"),
  base: "./",
  plugins: [react(), tailwindcss()],
  build: {
    outDir: path.resolve(projectRoot, "dist"),
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(projectRoot, "."),
    },
  },
  server: {
    hmr: process.env.DISABLE_HMR !== "true",
  },
}));
