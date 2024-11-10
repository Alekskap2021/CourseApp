import type { RuleSetRule } from 'webpack';
import { loader, loader as miniCssExtractLoader } from 'mini-css-extract-plugin';
import { BuildOptions } from './types/BuildOptions';
import { use } from 'i18next';

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|webp)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

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

  return [fileLoader, svgLoader, typescriptLoader, cssLoader];
}
