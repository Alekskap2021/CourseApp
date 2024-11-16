import type { FC, ReactNode } from "react";
import { createPortal } from "react-dom";

interface IPortalProps {
  children: ReactNode;
  element?: HTMLElement;
}

export const Portal: FC<IPortalProps> = (props) => {
  const { element = document.body, children } = props;

  return createPortal(children, element);
};
