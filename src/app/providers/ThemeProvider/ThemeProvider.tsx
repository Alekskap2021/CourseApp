import type { FC } from "react";
import { useState } from "react";
import { LocalStorage } from "@/shared/lib/LocalStorage";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from "@/shared/lib/ThemeContext";
import type { Theme } from "@/shared/types/theme";

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(
    LocalStorage.getItem<Theme>(LOCAL_STORAGE_THEME_KEY) || "light"
  );

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
