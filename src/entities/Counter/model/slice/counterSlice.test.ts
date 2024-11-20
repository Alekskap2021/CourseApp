import type { CounterSchema } from "../../types/counterSchema";
import { counterActions, counterReducer } from "./counterSlice";

describe("counterSlice", () => {
  test("Decrement", () => {
    const state: CounterSchema = {
      value: 10,
    };

    expect(counterReducer(state as CounterSchema, counterActions.decrement)).toEqual({
      value: 9,
    });
  });

  test("Increment", () => {
    const state: CounterSchema = {
      value: 10,
    };

    expect(counterReducer(state as CounterSchema, counterActions.increment)).toEqual({
      value: 11,
    });
  });

  test("Should work with empty state", () => {
    expect(counterReducer(undefined, counterActions.increment)).toEqual({
      value: 1,
    });
  });
});