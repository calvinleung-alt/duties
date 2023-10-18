import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { DutyCreatePage } from "./create-page";

jest.mock("../hooks/use-duties", () => ({
    useDuties: jest.fn(() => ({
        updateDuty: jest.fn(),
    }))
}));

test("rendered", async () => {
    render(
        <BrowserRouter>
            <DutyCreatePage/>
        </BrowserRouter>
    );
    expect(await screen.findByLabelText("duty-form")).toBeInTheDocument();
})