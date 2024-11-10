import classNames from "classnames/bind";
import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import s from "./Navbar.module.scss";

const cn = classNames.bind(s);

interface INavbarProps {
  className?: string;
}

export const Navbar: FC<INavbarProps> = (props) => {
  const { className } = props;

  const { t } = useTranslation();

  return (
    <header className={cn(s.navbar, className)}>
      <nav className={cn(s.navList)}>
        <AppLink to="/" theme="secondary">
          {t("mainPageLink")}
        </AppLink>
        <AppLink to="/about" theme="secondary">
          {t("aboutPageLink")}
        </AppLink>
      </nav>
    </header>
  );
};
