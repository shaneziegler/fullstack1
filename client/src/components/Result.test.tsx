import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import { it, expect } from "vitest";
import Result from "./Result";

it("renders on screen", async () => {
  render(<Result upperLimit={18} medianPrimesArray={[7]} />);

  const element = screen.getByText(
    "The median prime number for an upper limit of 18 is 7.",
  );
  expect(element).toBeDefined();
});

it("displays correct for input with no prime numbers", async () => {
  render(<Result upperLimit={1} medianPrimesArray={[]} />);

  const element = screen.getByText(
    "There are no prime numbers for an upper limit of 1!",
  );
  expect(element).toBeDefined();
});

it("displays correct for input with 1 median prime number", async () => {
  render(<Result upperLimit={99} medianPrimesArray={[99]} />);

  const element = screen.getByText(
    "The median prime number for an upper limit of 99 is 99.",
  );
  expect(element).toBeDefined();
});

it("displays correct for input with 2 median prime numbers", async () => {
  render(<Result upperLimit={50} medianPrimesArray={[99, 98]} />);

  const element = screen.getByText(
    "The median prime numbers for an upper limit of 50 are 99 and 98.",
  );
  expect(element).toBeDefined();
});
