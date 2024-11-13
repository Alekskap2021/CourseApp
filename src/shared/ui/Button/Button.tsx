import classNames from "classnames/bind";
import type { ButtonHTMLAttributes, FC, ReactNode } from "react";
import s from "./Button.module.scss";

const cn = classNames.bind(s);

export type ButtonTheme = "clear" | "outline";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  theme?: ButtonTheme;
}

export const Button: FC<IButtonProps> = (props) => {
  const { className, children, theme = "clear", ...otherProps } = props;

  return (
    <button className={cn(s.button, s[theme], className)} {...otherProps}>
      {children}
    </button>
  );
};
