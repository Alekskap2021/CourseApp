import type { Configuration } from "webpack";
import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import type { BuildOptions } from "./types/BuildOptions";

export function buildWebpackConfig(options: BuildOptions): Configuration {
  const { mode, paths, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),

    output: {
      filename: "[name].[contenthash].bundle.js",

      // chunkFilename: 'chunks/[path].[name].[id].[contenthash].chunk.js',

      asyncChunks: true,
      path: paths.output,
      clean: true,
    },

    plugins: buildPlugins(options),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
