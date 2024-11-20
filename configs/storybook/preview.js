import { addDecorator } from "@storybook/react";
import { RouterDecorator } from "@/shared/configs/decorators/RouterDecorator";
import { StyleDecorator } from "@/shared/configs/decorators/StyleDecorator";
import { ThemeDecorator } from "@/shared/configs/decorators/ThemeDecorator";
import { TranslationDecorator } from "@/shared/configs/decorators/TranslationsDecorator";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    default: "light",
    list: [
      { name: "light", class: "light", color: "#00aced" },
      { name: "dark", class: "dark", color: "#3b5998" },
    ],
  },
};

addDecorator(StyleDecorator);
addDecorator(TranslationDecorator);
addDecorator(ThemeDecorator("light"));
addDecorator(RouterDecorator);
