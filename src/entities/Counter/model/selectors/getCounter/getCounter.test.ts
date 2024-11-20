import type { DeepPartial } from "@reduxjs/toolkit";
import type { RootStore } from "@/app/providers/Redux/reduxConfig";
import { getCounter } from "./getCounter";

describe("getCounter", () => {
  test("Should return counter state", () => {
    const state: DeepPartial<RootStore> = {
      counter: { value: 10 },
    };

    expect(getCounter(state as RootStore)).toEqual({ value: 10 });
  });
});
