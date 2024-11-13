import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button.tsx", () => {
  test("Render", () => {
    render(<Button>Test</Button>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  test("Render with clear theme", () => {
    render(<Button theme="clear">Test</Button>);
    expect(screen.getByText("Test")).toHaveClass("clear");
  });
});
