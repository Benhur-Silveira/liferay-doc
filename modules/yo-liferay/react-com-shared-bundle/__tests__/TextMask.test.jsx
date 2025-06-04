import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { TextMask } from "../src/components/TextMask";

describe("TextMask component", () => {
  it("renders text mask", () => {
    render(<TextMask mask={"cep"} value={"12345678"} title={"CEP"} />);
    expect(screen.getByText("CEP")).toBeInTheDocument();
    expect(screen.getByText("12345-678")).toBeInTheDocument();
  });
});
