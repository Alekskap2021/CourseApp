import type { TypedUseSelectorHook } from "react-redux";
import { useSelector } from "react-redux";
import type { RootStore } from "@/app/providers/Redux/reduxConfig";

export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector;
