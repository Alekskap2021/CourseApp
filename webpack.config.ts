import path from 'path';
import { buildWebpackConfig } from './configs/webpack/buildWebpackConfig';
import { BuildEnv, BuildMode, BuildPaths } from './configs/webpack/types/BuildOptions';
import type { Configuration } from 'webpack';

export default (env: BuildEnv) => {
  const mode: BuildMode = env.mode || 'development';
  const PORT = env.port || 3000;

  const isDev = mode === 'development';

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    src: path.resolve(__dirname, 'src'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  };

  const config: Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  });

  return config;
};
