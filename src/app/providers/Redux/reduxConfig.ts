import type { DeepPartial } from "@reduxjs/toolkit";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authByUsernameReducer } from "@/features/Auth/AuthByUsername";
import { counterReducer } from "@/entities/Counter";
import { userReducer } from "@/entities/User";

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
  authByUsername: authByUsernameReducer,
});

export function createReduxStore(initialState?: DeepPartial<RootStore>) {
  return configureStore({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState as RootStore,
  });
}

export type RootStore = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof createReduxStore>;
export type AppDispatch = AppStore["dispatch"];
