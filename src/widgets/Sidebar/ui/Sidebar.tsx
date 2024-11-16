import classNames from "classnames/bind";
import type { FC } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
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
      <button onClick={onCollapsedToggle} data-testid="sidebar-toggle">
        {t("toggleTheme")}
      </button>

      <div className={cn(s.switchers)}>
        {/* <ThemeSwitcher /> */}
        <LangSwitcher />
      </div>
    </div>
  );
};
