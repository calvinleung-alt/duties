import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { App } from "./app";

test("rendered", async () => {
    render(<App/>);
})