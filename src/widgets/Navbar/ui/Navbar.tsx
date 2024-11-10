import classNames from 'classnames/bind';
import { FC } from 'react';

import s from './Navbar.module.scss';
import { Router } from '@/app/providers/Router/Router';
import { Link } from 'react-router-dom';
import { AppLink } from '@/shared/ui/AppLink/AppLink';

const cn = classNames.bind(s);

interface INavbarProps {
  className?: string;
}

export const Navbar: FC<INavbarProps> = (props) => {
  const { className } = props;

  return (
    <div className={cn(s.navbar, className)}>
      <nav className={cn(s.navList)}>
        <AppLink to={'/'} theme='secondary'>
          Главная
        </AppLink>
        <AppLink to={'/about'} theme='secondary'>
          О сайте
        </AppLink>
      </nav>
    </div>
  );
};
