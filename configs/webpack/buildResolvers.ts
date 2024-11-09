import path, { resolve } from 'path';
import type { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/BuildOptions';

export function buildResolvers(options: BuildOptions): ResolveOptions {
  const { paths } = options;

  return {
    extensions: ['.tsx', '.ts', '.js'],
    alias: { '@': paths.src },
    modules: [paths.src, 'node_modules'],
    preferAbsolute: true,
  };
}
