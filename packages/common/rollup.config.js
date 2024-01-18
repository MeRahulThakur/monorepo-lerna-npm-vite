import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import path from "path";

//const packageJson = require("./package.json");
import packageJson from "./package.json" assert { type: "json" };

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: path.resolve(__dirname,"../../build/dist/cjs/index.js"),
        format: "cjs",
        sourcemap: false
      },
      {
        file: path.resolve(__dirname,"../../build/dist/esm/index.js"),
        format: "esm",
        sourcemap: false
      }
    ],
    external: [...Object.keys(packageJson)],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({tsconfig: "./tsconfig.json",declaration:false}),
      postcss({extensions: ['.css']}),
      terser()
    ]
  },
  {
    input: "./src/index.ts",
    output: [{file:"../../build/dist/index.d.ts", format: "es"}],
    plugins: [dts.default()],
    external: [/\.css$/u]
  }
]