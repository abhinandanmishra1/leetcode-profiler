import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";
import tailwindcss from "tailwindcss";
import { libInjectCss } from 'vite-plugin-lib-inject-css'

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "leetcode-profiler",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', "tailwindcss"],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    cssCodeSplit: true,
  },
  plugins: [react(), tsconfigPaths(), dts(), libInjectCss()],
  // css: {
  //   postcss: {
  //     plugins: [tailwindcss],
  //   },
  // }
});