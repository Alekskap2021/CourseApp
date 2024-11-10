import classNames from "classnames/bind";
import type { FC } from "react";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import s from "./Navbar.module.scss";

const cn = classNames.bind(s);

interface INavbarProps {
  className?: string;
}

export const Navbar: FC<INavbarProps> = (props) => {
  const { className } = props;

  return (
    <header className={cn(s.navbar, className)}>
      <nav className={cn(s.navList)}>
        <AppLink to="/" theme="secondary">
          Главная
        </AppLink>
        <AppLink to="/about" theme="secondary">
          О сайте
        </AppLink>
      </nav>
    </header>
  );
};
