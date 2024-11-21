import type { Story } from "@storybook/react";
import { ThemeProvider } from "../../lib/theme/ThemeProvider";
import type { Theme } from "../../types/theme";

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
  // eslint-disable-next-line no-console
  console.log(document.body.classList);
  return (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <StoryComponent />
      </div>
    </ThemeProvider>
  );
};
