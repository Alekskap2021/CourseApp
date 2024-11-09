import type { Configuration } from 'webpack';

import HTMLWebpackPlugin from 'html-webpack-plugin';
import { ProgressPlugin } from 'webpack';
import { BuildOptions } from './types/BuildOptions';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildPlugins({ paths }: BuildOptions): Configuration['plugins'] {
  return [
    new ProgressPlugin(),
    new HTMLWebpackPlugin({ template: paths.html }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
  ];
}
