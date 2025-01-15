// src/components/Home.js
import React from "react";

export default function Home() {
  return React.createElement(
    "div",
    { className: "home-page" },
    React.createElement("h1", null, "Welcome to Korean Beauty Products"),
    React.createElement("p", null, "Discover the best Korean beauty products here!")
  );
}
