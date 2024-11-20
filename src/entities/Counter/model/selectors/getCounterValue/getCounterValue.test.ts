import type { DeepPartial } from "@reduxjs/toolkit";
import type { RootStore } from "@/app/providers/Redux/reduxConfig";
import { getCounterValue } from "./getCounterValue";

describe("getCounterValue", () => {
  test("Should return counter value", () => {
    const state: DeepPartial<RootStore> = {
      counter: { value: 10 },
    };

    expect(getCounterValue(state as RootStore)).toEqual(10);
  });
});
