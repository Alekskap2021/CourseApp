import { fireEvent, screen } from "@testing-library/react";
import { renderWithTranslations } from "@/shared/lib/renderWithTranslations";
import { Sidebar } from "./Sidebar";

describe("Sidebar.tsx", () => {
  test("Render", () => {
    renderWithTranslations(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("Visibility toggle", () => {
    renderWithTranslations(<Sidebar />);
    const toggleBtn = screen.getByTestId("sidebar-toggle");
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
