import type { Configuration } from 'webpack';

import HTMLWebpackPlugin from 'html-webpack-plugin';
import { ProgressPlugin, DefinePlugin } from 'webpack';
import { BuildOptions } from './types/BuildOptions';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildPlugins({ paths, isDev }: BuildOptions): Configuration['plugins'] {
  return [
    new ProgressPlugin(),
    new HTMLWebpackPlugin({ template: paths.html }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
  ];
}
