import type { DeepPartial } from "@reduxjs/toolkit";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "@/entities/Counter";
import { userReducer } from "@/entities/User";

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

export function createReduxStore(initialState?: DeepPartial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState as RootState,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof createReduxStore>;
export type AppDispatch = AppStore["dispatch"];