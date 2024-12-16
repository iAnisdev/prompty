import { expect, test, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("Home", () => {
  render(<Home />);
  test("renders title", () => {
    const title = screen.getByText("Prompty");
    expect(title).toBeInTheDocument();
  });
  test("renders welcome message", () => {
    const message = screen.getByText(/welcome/i);
    expect(message).toBeInTheDocument();
  });
});
