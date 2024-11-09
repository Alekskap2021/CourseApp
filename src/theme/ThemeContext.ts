import { createContext, Dispatch, SetStateAction } from 'react';

export type Theme = 'dark' | 'light';

export interface ThemeContextProps {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
}

export const ThemeContext = createContext<Partial<ThemeContextProps>>({});
export const LOCAL_STORAGE_THEME_KEY = 'theme';
