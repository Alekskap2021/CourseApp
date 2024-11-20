import classNames from "classnames/bind";
import { useCallback, useState, type FC } from "react";
import { useTranslation } from "react-i18next";
import { AuthByUsername } from "@/features/Auth/AuthByUsername";
import { getUserAuthData, userActions } from "@/entities/User";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { Button } from "@/shared/ui/Button/Button";
import s from "./Navbar.module.scss";

const cn = classNames.bind(s);

interface INavbarProps {
  className?: string;
}

export const Navbar: FC<INavbarProps> = (props) => {
  const { className } = props;

  const authData = useAppSelector(getUserAuthData);
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const closeModal = useCallback(() => setIsOpen(false), []);
  const showModal = useCallback(() => setIsOpen(true), []);
  const logout = () => {
    dispatch(userActions.logout());
  };

  if (authData) {
    return (
      <header className={cn(s.navbar, className)}>
        <Button onClick={logout} theme="clearInverted">
          {t("logout")}
        </Button>
      </header>
    );
  }

  return (
    <header className={cn(s.navbar, className)}>
      <Button onClick={showModal} theme="clearInverted">
        {t("logIn")}
      </Button>

      <AuthByUsername isOpen={isOpen} onClose={closeModal} />
    </header>
  );
};
