import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { userActions, type User } from "@/entities/User";
import i18n from "@/shared/configs/i18n";
import { LOCALSTORAGE_USER_KEY } from "@/shared/const/localStorage";
import { LocalStorage } from "@/shared/lib/LocalStorage";
import type { LoginSchema } from "../../types/loginSchema";

export const authByUsername = createAsyncThunk<
  User,
  Pick<LoginSchema, "password" | "username">,
  { rejectValue: string }
>("login/authByUsername", async (data, thunkApi) => {
  try {
    const response = await axios.post<User>("http://localhost:8000/login", data);
    if (!response.data) throw new Error();

    thunkApi.dispatch(userActions.setAuthData(response.data));
    LocalStorage.setItem(LOCALSTORAGE_USER_KEY, response.data);

    return response.data;
  } catch (e) {
    console.error("🚀 Catch block:", e);
    return thunkApi.rejectWithValue(i18n.t("authError", { ns: "authModal" }));
  }
});
