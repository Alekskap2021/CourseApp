import classNames from "classnames/bind";
import type { ReactNode } from "react";
import type { FC } from "react";
import type { LinkProps } from "react-router-dom";
import { Link } from "react-router-dom";
import s from "./AppLink.module.scss";

const cn = classNames.bind(s);

type AppLinkTheme = "primary" | "secondary";

interface IAppLinkProps extends LinkProps {
  className?: string;
  children: ReactNode;
  theme?: AppLinkTheme;
}

export const AppLink: FC<IAppLinkProps> = (props) => {
  const { className, children, theme = "primary", ...otherProps } = props;

  return (
    <Link className={cn(s.appLink, s[theme], className)} {...otherProps}>
      {children}
    </Link>
  );
};
