import type { TypedUseSelectorHook } from "react-redux";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/providers/Redux/reduxConfig";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
