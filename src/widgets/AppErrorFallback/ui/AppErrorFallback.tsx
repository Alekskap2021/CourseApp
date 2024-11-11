import classNames from "classnames/bind";
import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/shared/ui/Button/Button";
import s from "./AppErrorFallback.module.scss";

const cn = classNames.bind(s);

interface AppErrorFallbackProps {
  className?: string;
}

export const AppErrorFallback: FC<AppErrorFallbackProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  const reloadPage = () => location.reload();

  return (
    <div className={cn(s.AppErrorFallback, className)}>
      <p>{t("wentWrong")}</p>
      <Button onClick={reloadPage}>{t("tryAgan")}</Button>
    </div>
  );
};
