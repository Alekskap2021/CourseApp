import type { RootStore } from "@/app/providers/Redux/reduxConfig";

export const getCounter = (state: RootStore) => state.counter;
