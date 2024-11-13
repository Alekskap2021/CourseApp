import type { Configuration } from "webpack";

export type BuildMode = Configuration["mode"];

export interface BuildPaths {
  entry: string;
  output: string;
  html: string;
  src: string;
}

export interface BuildEnv {
  mode: BuildMode;
  analyze: boolean;
  port: number;
}

export interface BuildOptions {
  env: BuildEnv;
  paths: BuildPaths;
}
