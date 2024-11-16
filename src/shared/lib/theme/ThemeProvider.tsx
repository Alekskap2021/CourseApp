import type { FC, ReactNode } from "react";
import { useEffect, useState } from "react";
import type { Theme } from "../../types/theme";
import { LocalStorage } from "../LocalStorage";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from "./ThemeContext";

interface ThemeProviderProps {
  initialTheme?: Theme;
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const {
    children,
    initialTheme = LocalStorage.getItem<Theme>(LOCAL_STORAGE_THEME_KEY) || "light",
  } = props;

  const [theme, setTheme] = useState<Theme>(initialTheme);

  useEffect(() => {
    document.body.classList.add(`app`, theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
