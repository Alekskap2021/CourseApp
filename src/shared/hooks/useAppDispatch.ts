import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/app/providers/Redux/reduxConfig";

export const useAppDispatch: () => AppDispatch = useDispatch;
