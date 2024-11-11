import type { RouteProps } from "react-router-dom";
import { AboutPage } from "@/pages/AboutPage";
import { MainPage } from "@/pages/MainPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { AppRoutes, RouterPaths } from "@/shared/configs/routerPaths";

export const routerConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RouterPaths.main,
    element: <MainPage />,
  },

  [AppRoutes.ABOUT]: {
    path: RouterPaths.about,
    element: <AboutPage />,
  },

  [AppRoutes.NOT_FOUND]: {
    path: RouterPaths.not_found,
    element: <NotFoundPage />,
  },
};
