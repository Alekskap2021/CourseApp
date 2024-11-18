import type { RootState } from "@/app/providers/Redux/reduxConfig";

export const getCounter = (state: RootState) => state.counter;
