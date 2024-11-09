import cn from 'classnames';
import { FC, Suspense } from 'react';

import './styles/index.scss';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutPage } from '@/pages/AboutPage';
import { MainPage } from '@/pages/MainPage';
import { useTheme } from '@/shared/hooks/useTheme';

export const App: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <section className={cn('app', theme)}>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Suspense fallback={'loading'}>
        <Routes>
          <Route path='/about' element={<AboutPage />} />
          <Route path='/' element={<MainPage />} />
        </Routes>
      </Suspense>
    </section>
  );
};
