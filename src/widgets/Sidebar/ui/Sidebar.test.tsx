import { fireEvent, screen } from "@testing-library/react";
import { renderComponent } from "@/shared/lib/tests/renderComponent";
import { Sidebar } from "./Sidebar";

describe("Sidebar.tsx", () => {
  test("Render", () => {
    renderComponent(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("Visibility toggle", () => {
    renderComponent(<Sidebar />);
    const toggleBtn = screen.getByTestId("sidebar-toggle");
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
