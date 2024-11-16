import classNames from "classnames/bind";
import type { ButtonHTMLAttributes, FC, ReactNode } from "react";
import s from "./Button.module.scss";

const cn = classNames.bind(s);

export type ButtonTheme = "clear" | "clearInverted" | "outline" | "bg" | "bgInverted";
export type ButtonSize = "m" | "l" | "xl";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  theme?: ButtonTheme;
  size?: ButtonSize;
  isSquare?: boolean;
}

export const Button: FC<IButtonProps> = (props) => {
  const {
    className,
    children,
    theme = "clear",
    size = "m",
    isSquare = false,
    ...otherProps
  } = props;

  return (
    <button
      className={cn(s.button, s[theme], s[size], isSquare && s.isSquare, className)}
      {...otherProps}
    >
      {children}
    </button>
  );
};
