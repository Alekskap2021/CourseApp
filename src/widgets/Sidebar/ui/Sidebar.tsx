import classNames from "classnames/bind";
import type { FC } from "react";
import { useState } from "react";
import { LangSwitcher } from "@/shared/ui/LangSwitcher/LangSwitcher";
import { ThemeSwitcher } from "@/shared/ui/ThemeSwitcher/ThemeSwitcher";
import s from "./Sidebar.module.scss";

const cn = classNames.bind(s);

interface ISidebarProps {
  className?: string;
}

export const Sidebar: FC<ISidebarProps> = (props) => {
  const { className } = props;
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onCollapsedToggle = () => setIsCollapsed((prev) => !prev);

  return (
    <div className={cn(s.sidebar, className, { [s.collapsed]: isCollapsed })}>
      <button onClick={onCollapsedToggle}>Toggle</button>

      <div className={cn(s.switchers)}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
