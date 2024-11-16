import { render } from "@testing-library/react";
import type { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import i18nForTests from "./i18nForTest";

export interface componentRenderOptions {
  route?: string;
}

export function renderComponent(component: ReactNode, options: componentRenderOptions = {}) {
  const { route = "/" } = options;

  return render(
    <MemoryRouter
      initialEntries={[route]}
      future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
    >
      <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>,
    </MemoryRouter>
  );
}
