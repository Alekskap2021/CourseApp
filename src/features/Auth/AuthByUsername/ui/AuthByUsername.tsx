import type { ComponentProps, FC } from "react";
import { Modal } from "@/shared/ui/Modal/Modal";
import { AuthByUsernameForm } from "./AuthByUsernameForm/AuthByUsernameForm";

interface AuthByUsernameProps extends Omit<ComponentProps<typeof Modal>, "children"> {
  className?: string;
}

export const AuthByUsername: FC<AuthByUsernameProps> = (props) => {
  const { className, ...modalProps } = props;

  return (
    <Modal className={className} lazy {...modalProps}>
      <AuthByUsernameForm />
    </Modal>
  );
};
