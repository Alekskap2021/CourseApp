import classNames from "classnames/bind";
import { useEffect, useState, type FC, type ReactNode } from "react";
import { Portal } from "../Portal/Portal";
import s from "./Modal.module.scss";

const cn = classNames.bind(s);

interface IModalProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Modal: FC<IModalProps> = (props) => {
  const { className, children, isOpen = false, onClose, lazy = true } = props;

  const [isMounted, setIsMounted] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      setTimeout(() => setIsAnimating(true), 0);
    } else {
      setIsAnimating(false);
      setTimeout(() => setIsMounted(false), 300);
    }
  }, [isOpen]);

  useEffect(() => {
    function keyDownHandler(e: KeyboardEvent) {
      if (e.key === "Escape") onClose?.();
    }

    if (isOpen) {
      window.addEventListener("keydown", keyDownHandler);
    } else {
      window.removeEventListener("keydown", keyDownHandler);
    }

    return () => {
      window.removeEventListener("keydown", keyDownHandler);
    };
  }, [isOpen, onClose]);

  if (lazy && !isMounted) return null;

  return (
    <Portal>
      <div className={cn(s.Modal, { [s.opened]: isAnimating }, className)}>
        <div className={s.overlay} onClick={onClose}>
          <div className={s.content} onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
