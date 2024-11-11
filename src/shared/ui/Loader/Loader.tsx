import classNames from "classnames/bind";
import type { FC } from "react";
import s from "./Loader.module.scss";

const cn = classNames.bind(s);

interface LoaderProps {
  className?: string;
}

export const Loader: FC<LoaderProps> = (props) => {
  const { className } = props;

  return (
    <div className={cn(s.Loader, className)}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
