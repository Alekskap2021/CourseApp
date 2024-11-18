import { Suspense } from "react";
// eslint-disable-next-line react/no-deprecated
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "@/app/App";
import { ReduxProvider } from "@/app/providers/Redux/ReduxProvider";
import { AppErrorFallback } from "@/widgets/AppErrorFallback";
import { ThemeProvider } from "@/shared/lib/theme/ThemeProvider";
import { ErrorBoundary } from "@/shared/ui/ErrorBoundary/ErrorBoundary";
import "@/shared/configs/i18n";
import "@/app/styles/index.scss";

render(
  <BrowserRouter>
    <ErrorBoundary
      fallback={
        <Suspense fallback="">
          <AppErrorFallback />
        </Suspense>
      }
    >
      <ReduxProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ReduxProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById("root")
);
