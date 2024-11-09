import cn from 'classnames';
import { FC, Suspense } from 'react';

import './styles/index.scss';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutPageAsync as AboutPage } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync as MainPage } from './pages/MainPage/MainPage.async';
import { useTheme } from './theme/useTheme';

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
