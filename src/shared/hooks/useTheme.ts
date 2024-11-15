import { useContext } from "react";
import { LocalStorage } from "../lib/LocalStorage";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from "../lib/ThemeContext";
import type { Theme } from "../types/theme";

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export const useTheme = (): UseThemeResult => {
  const { setTheme, theme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    LocalStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme, toggleTheme };
};
