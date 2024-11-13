import path from "path";
import type { Configuration } from "webpack";
import { buildWebpackConfig } from "./configs/webpack/buildWebpackConfig";
import type { BuildEnv, BuildMode, BuildPaths } from "./configs/webpack/types/BuildOptions";

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    src: path.resolve(__dirname, "src"),
    output: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
  };

  const config: Configuration = buildWebpackConfig({
    env: { mode: env.mode || "development", port: env.port || 3000, analyze: Boolean(env.analyze) },
    paths,
  });

  return config;
};
