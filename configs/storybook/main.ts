import path from "path";
import type { Configuration, RuleSetRule } from "webpack";
import { buildCssLoader } from "../webpack/loaders/buildCssLoader";

module.exports = {
  stories: ["../../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-themes",
  ],

  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },

  webpackFinal: (config: Configuration): Configuration => {
    if (!config.resolve) {
      config.resolve = {};
    }
    if (!config.module) {
      config.module = {};
    }
    if (!config.module.rules) {
      config.module.rules = [];
    }

    if (!config.resolve.alias) {
      config.resolve.alias = {};
    }

    if (!config.resolve.extensions) {
      config.resolve.extensions = [];
    }

    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, "../../src"),
    ];

    config.resolve.alias = { "@": path.resolve(__dirname, "../../src") };

    config.resolve.extensions.push(".ts", ".tsx");

    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }

      return rule;
    });

    config.module.rules.push(
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      buildCssLoader(true)
    );

    return config;
  },
};
