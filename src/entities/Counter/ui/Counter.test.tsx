import { fireEvent, screen } from "@testing-library/react";
import { renderComponent } from "@/shared/lib/tests/renderComponent";
import { Counter } from "./Counter";

describe("Counter.tsx", () => {
  test("Render", () => {
    renderComponent(<Counter />, { initialState: { counter: { value: 10 } } });
    expect(screen.getByTestId("value-title")).toHaveTextContent("10");
  });

  test("Increment btn", () => {
    renderComponent(<Counter />, { initialState: { counter: { value: 10 } } });
    const toggleBtn = screen.getByTestId("increment-btn");
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("value-title")).toHaveTextContent("11");
  });

  test("Decrement btn", () => {
    renderComponent(<Counter />, { initialState: { counter: { value: 10 } } });
    const toggleBtn = screen.getByTestId("decrement-btn");
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("value-title")).toHaveTextContent("9");
  });
});
