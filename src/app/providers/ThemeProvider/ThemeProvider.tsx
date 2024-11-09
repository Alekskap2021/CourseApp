import { LocalStorage } from '@/shared/lib/LocalStorage';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from '@/shared/lib/ThemeContext';
import { Theme } from '@/shared/types/theme';
import { FC, useState } from 'react';

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(
    LocalStorage.getItem<Theme>(LOCAL_STORAGE_THEME_KEY) || 'light'
  );

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
