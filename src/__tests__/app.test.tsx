import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "@/App";

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
    expect(document.querySelector(".min-h-screen")).toBeTruthy();
  });

  it("renders navbar with brand name", () => {
    const { container } = render(<App />);
    expect(container.textContent).toContain("GUARD");
  });

  it("renders hero section content", () => {
    const { container } = render(<App />);
    expect(container.textContent).toContain("Curadoria");
  });

  it("renders footer", () => {
    render(<App />);
    expect(screen.getByText(/direitos reservados/i)).toBeTruthy();
  });
});
