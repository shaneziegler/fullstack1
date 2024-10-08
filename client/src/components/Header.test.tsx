import { render, screen } from "@testing-library/react";
import { it, expect } from "vitest";
import Header from "./Header";

it("renders content", () => {
  render(<Header />);

  const element = screen.getByText("Median Prime Numbers");
  expect(element).toBeDefined();
});
