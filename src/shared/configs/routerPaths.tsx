export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  NOT_FOUND = "not_found",
}

export const RouterPaths: Record<AppRoutes, string> = {
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.MAIN]: "/",
  [AppRoutes.NOT_FOUND]: "*",
};
