import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { LOCALSTORAGE_USER_KEY } from "@/shared/const/localStorage";
import { LocalStorage } from "@/shared/lib/LocalStorage";
import type { User, UserSchema } from "../../types/user";

const initialState: UserSchema = {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initAuthData: (state) => {
      const user = LocalStorage.getItem<User>(LOCALSTORAGE_USER_KEY);
      if (user) state.authData = user;
    },
    logout: (state) => {
      state.authData = undefined;
      LocalStorage.removeItem(LOCALSTORAGE_USER_KEY);
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
