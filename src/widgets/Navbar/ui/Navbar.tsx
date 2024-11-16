import classNames from "classnames/bind";
import { useCallback, useState, type FC } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/shared/ui/Button/Button";
import { Modal } from "@/shared/ui/Modal/Modal";
import s from "./Navbar.module.scss";

const cn = classNames.bind(s);

interface INavbarProps {
  className?: string;
}

export const Navbar: FC<INavbarProps> = (props) => {
  const { className } = props;
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const toggleModal = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <header className={cn(s.navbar, className)}>
      <Button onClick={toggleModal} theme="clearInverted">
        {t("logIn")}
      </Button>
      <Modal isOpen={isOpen} onClose={toggleModal}>
        <span />
      </Modal>
    </header>
  );
};
