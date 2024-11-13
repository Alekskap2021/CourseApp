import type { RuleSetRule } from "webpack";
import { buildCssLoader } from "./loaders/buildCssLoader";
import type { BuildOptions } from "./types/BuildOptions";

export function buildLoaders({ env }: BuildOptions): RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|webp)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  const cssLoader = buildCssLoader(env.mode === "development");

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [fileLoader, svgLoader, typescriptLoader, cssLoader];
}
