import React from "react";
import { render, screen } from "@testing-library/react-native";
import Home from "./Home";

describe("Home", () => {
  it("displays the home page message", () => {
    render(<Home />);
    expect(screen.getByText("Welcome to Numbers API!")).toBeVisible();
  });
});
