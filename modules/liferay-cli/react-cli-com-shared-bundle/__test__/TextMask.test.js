import React from "react";
import { render } from "@testing-library/react";
import { TextMask } from "../src/components/TextMask";

describe("Title component", () => {
  it("renders title", () => {
    const { getByText } = render(
      <TextMask title="Test" mask={"cep"} value={"92320177"} />,
    );
    expect(getByText("92320-177")).toBeInTheDocument();
  });
});
