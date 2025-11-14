import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "@/test/utils";
import App from "@/App";

describe("App", () => {
  it("renders without crashing", () => {
    renderWithProviders(<App />);

    expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument();
  });
});
