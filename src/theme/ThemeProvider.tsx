import { FC, useState } from 'react';
import { LocalStorage } from '../lib/LocalStorage';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from './ThemeContext';
import type { Theme } from './ThemeContext';

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(
    LocalStorage.getItem<Theme>(LOCAL_STORAGE_THEME_KEY) || 'light'
  );

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
