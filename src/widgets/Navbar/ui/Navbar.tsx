import classNames from "classnames/bind";
import type { FC } from "react";
import s from "./Navbar.module.scss";

const cn = classNames.bind(s);

interface INavbarProps {
  className?: string;
}

export const Navbar: FC<INavbarProps> = (props) => {
  const { className } = props;

  return <header className={cn(s.navbar, className)}>/</header>;
};
