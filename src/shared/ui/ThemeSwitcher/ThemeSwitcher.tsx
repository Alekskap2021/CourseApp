import classNames from "classnames/bind";
import type { FC } from "react";
import DarkThemeIcon from "../../assets/icons/theme-dark.svg";
import LightThemeIcon from "../../assets/icons/theme-light.svg";
import { useTheme } from "../../hooks/useTheme";
import { Button } from "../Button/Button";
import s from "./ThemeSwitcher.module.scss";

const cn = classNames.bind(s);

interface IThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<IThemeSwitcherProps> = (props) => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();

  return (
    <Button className={cn(s.themeSwitcher, className)} onClick={toggleTheme} theme="clear">
      {theme === "light" ? <DarkThemeIcon /> : <LightThemeIcon />}
    </Button>
  );
};
