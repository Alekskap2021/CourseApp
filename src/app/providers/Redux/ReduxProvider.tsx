import type { DeepPartial } from "@reduxjs/toolkit";
import type { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import type { RootState } from "./reduxConfig";
import { createReduxStore } from "./reduxConfig";

interface IReduxProviderProps {
  children: ReactNode;
  initialState?: DeepPartial<RootState>;
}

export const ReduxProvider: FC<IReduxProviderProps> = (props) => {
  const { children, initialState } = props;

  const store = createReduxStore(initialState);

  return <Provider store={store}>{children}</Provider>;
};
