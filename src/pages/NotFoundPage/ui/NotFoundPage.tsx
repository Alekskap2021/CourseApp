import classNames from "classnames/bind";
import type { FC } from "react";
import { useTranslation } from "react-i18next";
import s from "./NotFoundPage.module.scss";

const cn = classNames.bind(s);

interface INotFoundPageProps {
  className?: string;
}

export const NotFoundPage: FC<INotFoundPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation("notFound");

  return <div className={cn(s.notFound, className)}>{t("pageNotFound")}</div>;
};

export default NotFoundPage;
