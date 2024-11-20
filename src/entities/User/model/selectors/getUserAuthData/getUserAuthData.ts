import type { RootStore } from "@/app/providers/Redux/reduxConfig";

export const getUserAuthData = (store: RootStore) => store.user.authData;
