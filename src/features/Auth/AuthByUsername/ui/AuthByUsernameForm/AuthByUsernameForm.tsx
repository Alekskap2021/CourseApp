import classNames from "classnames/bind";
import { type FC } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { Button } from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input/Input";
import { Text } from "@/shared/ui/Text/Text";
import { getAuthByUsernameStore } from "../../model/selectors/getAuthByUsernameStore/getAuthByUsernameStore";
import { authByUsername } from "../../model/services/authByUsername";
import { authByUsernameActions } from "../../model/slice/authByUsernameSlice";
import s from "./AuthByUsernameForm.module.scss";

const cn = classNames.bind(s);

interface IAuthByUsernameFormProps {
  className?: string;
}

export const AuthByUsernameForm: FC<IAuthByUsernameFormProps> = (props) => {
  const { className } = props;

  const dispatch = useAppDispatch();
  const { password, username, isLoading, error } = useAppSelector(getAuthByUsernameStore);

  const { t } = useTranslation("authModal");

  const onUsernameChange = (username: string) =>
    dispatch(authByUsernameActions.setUsername(username));

  const onPasswordChange = (password: string) =>
    dispatch(authByUsernameActions.setPassword(password));

  const authHandler = () => {
    dispatch(authByUsername({ password, username }));
  };

  return (
    <form className={cn(s.AuthByUsernameForm, className)} onSubmit={(e) => e.preventDefault()}>
      <Text title={t("authForm")} />
      {error ? <Text text={error} theme="error" /> : null}
      <Input placeholder={t("username")} value={username} onChange={onUsernameChange} autoFocus />
      <Input placeholder={t("userPassword")} value={password} onChange={onPasswordChange} />
      <Button className={s.loginBtn} theme="outline" onClick={authHandler} disabled={isLoading}>
        {t("signIn")}
      </Button>
    </form>
  );
};
