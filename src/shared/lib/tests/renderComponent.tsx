import type { DeepPartial } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import type { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { createReduxStore, type AppStore, type RootState } from "@/app/providers/Redux/reduxConfig";
import i18nForTests from "./i18nForTest";

export interface componentRenderOptions {
  route?: string;
  store?: AppStore;
  initialState?: DeepPartial<RootState>;
}

export function renderComponent(component: ReactNode, options: componentRenderOptions = {}) {
  const { route = "/", initialState = {}, store = createReduxStore(initialState) } = options;

  return render(
    <Provider store={store}>
      <MemoryRouter
        initialEntries={[route]}
        future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
      >
        <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>,
      </MemoryRouter>
    </Provider>
  );
}
