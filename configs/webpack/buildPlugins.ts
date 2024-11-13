import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import type { Configuration } from "webpack";
import { ProgressPlugin, DefinePlugin } from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import type { BuildOptions } from "./types/BuildOptions";

export function buildPlugins({ paths, env }: BuildOptions): Configuration["plugins"] {
  return [
    new ProgressPlugin(),
    new HTMLWebpackPlugin({ template: paths.html }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(env.mode === "development"),
    }),
    env.analyze && new BundleAnalyzerPlugin({ openAnalyzer: true }),
  ].filter(Boolean);
}
