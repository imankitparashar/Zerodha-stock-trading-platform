import React from "react";
import { screen, render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Hero from "./Landing_page/home/Hero";
import "@testing-library/jest-dom";
describe("Menu-testcases", () => {
  test("Menu Component", () => {
    render(<Hero />);
    const para = screen.getByText("Invest in everything");
    expect(para).toBeInTheDocument();
  });
});
