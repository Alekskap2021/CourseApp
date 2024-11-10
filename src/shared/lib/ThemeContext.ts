import { createContext } from "react";
import type { ThemeContextProps } from "../types/theme";

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  setTheme: () => "",
});
export const LOCAL_STORAGE_THEME_KEY = "theme";
