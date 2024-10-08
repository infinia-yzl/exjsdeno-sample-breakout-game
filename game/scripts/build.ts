import * as esbuild from "npm:esbuild";
import { denoPlugins } from "jsr:@luca/esbuild-deno-loader";

const result = await esbuild.build({
  plugins: [...denoPlugins()],
  entryPoints: ["./game/main.ts"],
  outfile: "./game/build/game.bundle.js",
  bundle: true,
  format: "esm",
  tsconfig: "./game/tsconfig.json"
});

console.log("✅ Build complete:", result);

esbuild.stop();
