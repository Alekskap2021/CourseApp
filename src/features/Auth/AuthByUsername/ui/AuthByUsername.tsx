import classNames from "classnames/bind";
import type { ComponentProps, FC } from "react";
import { Modal } from "@/shared/ui/Modal/Modal";
import s from "./AuthByUsername.module.scss";
import { AuthByUsernameForm } from "./AuthByUsernameForm/AuthByUsernameForm";

const cn = classNames.bind(s);

interface AuthByUsernameProps extends Omit<ComponentProps<typeof Modal>, "children"> {
  className?: string;
}

export const AuthByUsername: FC<AuthByUsernameProps> = (props) => {
  const { className, ...modalProps } = props;

  return (
    <Modal className={cn(s.AuthByUsername, className)} lazy {...modalProps}>
      <AuthByUsernameForm />
    </Modal>
  );
};
