import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import packageJson from './package.json'
import dts from 'vite-plugin-dts'
import {libInjectCss} from 'vite-plugin-lib-inject-css'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "library_ui",
      fileName: (format) => `index.${format}.js`,
      formats: ["cjs","es"]
    },
    rollupOptions: {
      external: [...Object.keys(packageJson)]
    },
    sourcemap: false,
    outDir: "../../build/dist",
    emptyOutDir: true,
    copyPublicDir:true,
    cssMinify: true,
    minify: 'terser'
  },
  plugins: [
    react({jsxRuntime:"automatic"}),
    libInjectCss(),
    dts({rollupTypes: true}),
    peerDepsExternal()
  ],

})
