import { AboutPage } from '@/pages/AboutPage';
import { MainPage } from '@/pages/MainPage';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from './routerConfig';

export const Router = () => {
  return (
    <Suspense fallback={'loading'}>
      <Routes>
        {Object.values(routerConfig).map(({ path, ...otherProps }) => (
          <Route key={path} path={path} {...otherProps} />
        ))}
      </Routes>
    </Suspense>
  );
};
