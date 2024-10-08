import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import { it, expect, vi } from "vitest";
import EnterUpperLimit from "./EnterUpperLimit";

it("renders on screen", async () => {
  const setUpperLimit = vi.fn();

  render(<EnterUpperLimit setUpperLimit={setUpperLimit} upperLimit={10} />);

  const element = screen.getByText("Enter upper limit number:");
  expect(element).toBeDefined();
});
