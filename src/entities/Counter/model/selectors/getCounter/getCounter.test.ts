import type { DeepPartial } from "@reduxjs/toolkit";
import type { RootState } from "@/app/providers/Redux/reduxConfig";
import { getCounter } from "./getCounter";

describe("getCounter", () => {
  test("Should return counter state", () => {
    const state: DeepPartial<RootState> = {
      counter: { value: 10 },
    };

    expect(getCounter(state as RootState)).toEqual({ value: 10 });
  });
});
