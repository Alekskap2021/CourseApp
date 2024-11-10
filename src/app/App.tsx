import cn from 'classnames';
import type { FC } from 'react';

import './styles/index.scss';
import { useTheme } from '@/shared/hooks/useTheme';
import { Router } from './providers/Router/Router';
import { Navbar } from '@/widgets/Navbar';

export const App: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <section className={cn('app', theme)}>
      <Navbar />

      <button onClick={toggleTheme}>Toggle theme</button>

      <Router />
    </section>
  );
};
