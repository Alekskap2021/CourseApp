import type { DeepPartial } from "@reduxjs/toolkit";
import type { RootState } from "@/app/providers/Redux/reduxConfig";
import { getCounterValue } from "./getCounterValue";

describe("getCounterValue", () => {
  test("Should return counter value", () => {
    const state: DeepPartial<RootState> = {
      counter: { value: 10 },
    };

    expect(getCounterValue(state as RootState)).toEqual(10);
  });
});
