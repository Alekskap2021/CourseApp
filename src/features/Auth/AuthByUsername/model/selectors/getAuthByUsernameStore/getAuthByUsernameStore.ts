import type { RootStore } from "@/app/providers/Redux/reduxConfig";

export const getAuthByUsernameStore = (store: RootStore) => store.authByUsername;
