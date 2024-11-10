import classNames from 'classnames/bind';
import { ReactNode } from 'react';
import type { FC } from 'react';

import s from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';

const cn = classNames.bind(s);

type AppLinkTheme = 'primary' | 'secondary';

interface IAppLinkProps extends LinkProps {
  className?: string;
  children: ReactNode;
  theme?: AppLinkTheme;
}

export const AppLink: FC<IAppLinkProps> = (props) => {
  const { className, children, theme = 'primary', ...otherProps } = props;

  return (
    <Link className={cn(s.appLink, s[theme], className)} {...otherProps}>
      {children}
    </Link>
  );
};
