import React from "react";
import { render } from "@testing-library/react";
import { Title } from "../src/components/Title.js";

describe("Title component", () => {
  it("renders title", () => {
    const { getByText } = render(<Title title="Test" />);
    expect(getByText("Test")).toBeInTheDocument();
  });
});
