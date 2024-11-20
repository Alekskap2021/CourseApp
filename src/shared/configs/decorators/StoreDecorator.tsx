import type { DeepPartial } from "@reduxjs/toolkit";
import type { Story } from "@storybook/react";
// import { Provider } from "react-redux";
import type { RootStore } from "@/app/providers/Redux/reduxConfig";
// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { ReduxProvider } from "@/app/providers/Redux/ReduxProvider";

// eslint-disable-next-line react/display-name
export const StoreDecorator = (store: DeepPartial<RootStore>) => (StoryComponent: Story) => {
  return (
    <ReduxProvider initialState={store}>
      <StoryComponent />
    </ReduxProvider>
  );
};
