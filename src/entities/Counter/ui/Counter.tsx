/* eslint-disable i18next/no-literal-string */
import type { FC } from "react";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { Button } from "@/shared/ui/Button/Button";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
import { counterActions } from "../model/slice/counterSlice";

export const Counter: FC = () => {
  const dispatch = useAppDispatch();
  const value = useAppSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="value-title">{value}</h1>
      <Button onClick={increment} data-testid="increment-btn">
        Increment
      </Button>
      <Button onClick={decrement} data-testid="decrement-btn">
        Decrement
      </Button>
    </div>
  );
};
