import classNames from "classnames/bind";
import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../Button/Button";
import s from "./LangSwitcher.module.scss";

const cn = classNames.bind(s);

interface ILangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<ILangSwitcherProps> = (props) => {
  const { className } = props;
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button onClick={toggleLanguage} className={cn(className)} theme="clear">
      {t("language")}
    </Button>
  );
};
