import { loader as miniCssExtractLoader } from "mini-css-extract-plugin";

export const buildCssLoader = (isDev: boolean) => {
  return {
    test: /\.s[ac]ss$/i,

    use: [
      isDev ? "style-loader" : miniCssExtractLoader,
      {
        loader: "css-loader",
        options: {
          //   esModule: true,
          modules: {
            // namedExport: true,
            auto: (path: string) => path.includes(".module.scss"),
            localIdentName: isDev ? "[local].[hash:base64:8]" : "[hash:base64:8]",
          },
        },
      },
      {
        loader: "sass-loader",
        options: {
          sassOptions: {
            silenceDeprecations: ["legacy-js-api"],
          },
        },
      },
    ],
  };
};
