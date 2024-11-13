import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import type { BuildOptions } from "./types/BuildOptions";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.env.port,
    open: true,
    historyApiFallback: true,
  };
}
