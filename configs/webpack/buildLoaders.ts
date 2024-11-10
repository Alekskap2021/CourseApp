import type { RuleSetRule } from 'webpack';
import { loader, loader as miniCssExtractLoader } from 'mini-css-extract-plugin';
import { BuildOptions } from './types/BuildOptions';

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
  const cssLoader = {
    test: /\.s[ac]ss$/i,

    use: [
      isDev ? 'style-loader' : miniCssExtractLoader,
      {
        loader: 'css-loader',
        options: {
          //   esModule: true,
          modules: {
            // namedExport: true,
            auto: (path: string) => path.includes('.module.scss'),
            localIdentName: isDev ? '[local].[hash:base64:8]' : '[hash:base64:8]',
          },
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sassOptions: {
            silenceDeprecations: ['legacy-js-api'],
          },
        },
      },
    ],
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [typescriptLoader, cssLoader];
}
