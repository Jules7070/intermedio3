// src/components/Home.test.js
import React from "react";
import { render } from "@testing-library/react";
import Home from "./Home";

test("renders welcome message", () => {
  const { getByText } = render(React.createElement(Home));
  expect(getByText("Welcome to Korean Beauty Products")).toBeInTheDocument();
});
