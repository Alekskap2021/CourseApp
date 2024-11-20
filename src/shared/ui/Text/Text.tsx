import classNames from "classnames/bind";
import s from "./Text.module.scss";

const cn = classNames.bind(s);

type TextTheme = "primary" | "error";

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export const Text = (props: TextProps) => {
  const { className, text, title, theme = "primary" } = props;

  return (
    <div className={cn({ [s[theme]]: true }, [className])}>
      {title && <p className={s.title}>{title}</p>}
      {text && <p className={s.text}>{text}</p>}
    </div>
  );
};
