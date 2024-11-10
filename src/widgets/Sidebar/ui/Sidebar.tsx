import classNames from 'classnames/bind';
import { FC, useState } from 'react';

import s from './Sidebar.module.scss';
import { ThemeSwitcher } from '@/shared/ui/ThemeSwitcher/ThemeSwitcher';

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
        {/* LangSwitcher */}
      </div>
    </div>
  );
};
