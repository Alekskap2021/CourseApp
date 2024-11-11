import classNames from "classnames/bind";
import type { FC } from "react";
import { Loader } from "@/shared/ui/Loader/Loader";
import s from "./PageLoader.module.scss";

const cn = classNames.bind(s);

interface IPageLoaderProps {
  className?: string;
}

export const PageLoader: FC<IPageLoaderProps> = (props) => {
  const { className } = props;

  return (
    <div className={cn(s.PageLoader, className)}>
      <Loader />
    </div>
  );
};
