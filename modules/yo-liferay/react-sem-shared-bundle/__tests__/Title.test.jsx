import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Title } from "../src/components/Title";

describe("Title component", () => {
  it("renders title", () => {
    render(<Title title="Test" />);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
