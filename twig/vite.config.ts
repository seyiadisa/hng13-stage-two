import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  publicDir: "../assets/public/",
  build: {
    rollupOptions: {
      input: {
        main: "./src/index.ts",
      },
      output: {
        entryFileNames: "bundle.js",
        assetFileNames: "bundle.css",
      },
    },
    cssCodeSplit: false,
  },
});
