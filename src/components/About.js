// src/components/About.js
import React from "react";

export default function About() {
  return React.createElement(
    "div",
    { className: "about-page" },
    React.createElement("h1", null, "About Us"),
    React.createElement("p", null, "We bring you top Korean beauty products.")
  );
}
