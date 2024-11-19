import classNames from "classnames/bind";
import { useState, type FC } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input/Input";
import s from "./AuthByUsernameForm.module.scss";

const cn = classNames.bind(s);

interface IAuthByUsernameFormProps {
  className?: string;
}

export const AuthByUsernameForm: FC<IAuthByUsernameFormProps> = (props) => {
  const { className } = props;

  const { t } = useTranslation("authModal");

  const [username, setUsername] = useState("");
  const [userPassword, setUserPassword] = useState("");

  return (
    <form className={cn(s.AuthByUsernameForm, className)}>
      <Input placeholder={t("username")} value={username} onChange={setUsername} autoFocus />
      <Input placeholder={t("userPassword")} value={userPassword} onChange={setUserPassword} />
      <Button className={s.loginBtn}>{t("signIn")}</Button>
    </form>
  );
};
