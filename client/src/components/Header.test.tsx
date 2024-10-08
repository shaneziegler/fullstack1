import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("renders content", () => {
  render(<Header />);

  const element = screen.getByText("Median Prime Numbers");
  expect(element).toBeDefined();
});
