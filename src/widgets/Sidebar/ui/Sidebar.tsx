import classNames from "classnames/bind";
import type { FC } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import AboutIcon from "@/shared/assets/icons/clarity_list-outline-badged.svg";
import MainIcon from "@/shared/assets/icons/Vector.svg";
import { RouterPaths } from "@/shared/configs/routerPaths";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { Button } from "@/shared/ui/Button/Button";
import { LangSwitcher } from "@/shared/ui/LangSwitcher/LangSwitcher";
import { ThemeSwitcher } from "@/shared/ui/ThemeSwitcher/ThemeSwitcher";
import s from "./Sidebar.module.scss";

const cn = classNames.bind(s);

interface ISidebarProps {
  className?: string;
}

export const Sidebar: FC<ISidebarProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  const [isCollapsed, setIsCollapsed] = useState(false);

  const onCollapsedToggle = () => setIsCollapsed((prev) => !prev);

  return (
    <div className={cn(s.sidebar, className, { [s.collapsed]: isCollapsed })} data-testid="sidebar">
      <Button
        className={cn(s.collapsedBtn)}
        theme="bgInverted"
        isSquare
        size="l"
        onClick={onCollapsedToggle}
        data-testid="sidebar-toggle"
      >
        {isCollapsed ? ">" : "<"}
      </Button>

      <nav className={cn(s.navList)}>
        <AppLink className={s.navList__link} to={RouterPaths.main} theme="secondary">
          <MainIcon fill="currentColor" />
          <span>{t("mainPageLink")}</span>
        </AppLink>

        <AppLink className={s.navList__link} to={RouterPaths.about} theme="secondary">
          <AboutIcon fill="currentColor" />
          <span>{t("aboutPageLink")}</span>
        </AppLink>
      </nav>

      <div className={cn(s.switchers)}>
        <ThemeSwitcher />
        <LangSwitcher isShort={isCollapsed} />
      </div>
    </div>
  );
};
