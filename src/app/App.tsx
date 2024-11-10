import cn from 'classnames';
import { FC } from 'react';

import './styles/index.scss';
import { Link } from 'react-router-dom';
import { useTheme } from '@/shared/hooks/useTheme';
import { Router } from './providers/Router/Router';

export const App: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <section className={cn('app', theme)}>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <button onClick={toggleTheme}>Toggle theme</button>

      <Router />
    </section>
  );
};
