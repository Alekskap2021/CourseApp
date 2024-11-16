import classNames from "classnames/bind";
import { useEffect, type FC, type ReactNode } from "react";
import { Portal } from "../Portal/Portal";
import s from "./Modal.module.scss";

const cn = classNames.bind(s);

interface IModalProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Modal: FC<IModalProps> = (props) => {
  const { className, children, isOpen, onClose } = props;

  useEffect(() => {
    function keyDownHandler(e: KeyboardEvent) {
      if (e.key === "Escape") onClose?.();
    }

    if (isOpen) {
      window.addEventListener("keydown", keyDownHandler);
    }

    if (!isOpen) {
      window.removeEventListener("keydown", keyDownHandler);
    }

    return () => {
      window.removeEventListener("keydown", keyDownHandler);
    };
  }, [isOpen, onClose]);

  return (
    <Portal>
      <div className={cn(s.Modal, { [s.opened]: isOpen }, className)}>
        <div className={s.overlay} onClick={onClose}>
          <div className={s.content} onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
