import type { Story } from "@storybook/react";
import { Suspense } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../../configs/i18n";

// eslint-disable-next-line react/display-name
export const TranslationDecorator = (StoryComponent: Story) => {
  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback="">
        <StoryComponent />
      </Suspense>
    </I18nextProvider>
  );
};
