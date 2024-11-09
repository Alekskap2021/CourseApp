import { ThemeContextProps } from '@/shared/types/theme';
import { createContext } from 'react';

export const ThemeContext = createContext<Partial<ThemeContextProps>>({});
export const LOCAL_STORAGE_THEME_KEY = 'theme';
