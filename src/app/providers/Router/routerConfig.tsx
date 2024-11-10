import { AboutPage } from '@/pages/AboutPage';
import { MainPage } from '@/pages/MainPage';
import { AppRoutes, RouterPaths } from '@/shared/configs/routerPaths';
import { RouteProps } from 'react-router-dom';

export const routerConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RouterPaths.main,
    element: <MainPage />,
  },

  [AppRoutes.ABOUT]: {
    path: RouterPaths.about,
    element: <AboutPage />,
  },
};
