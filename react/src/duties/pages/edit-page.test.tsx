import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DutyEditPage } from "./edit-page";
import { BrowserRouter } from "react-router-dom";

jest.mock("../hooks/use-duties", () => ({
    useDuties: jest.fn(() => ({
        updateDuty: jest.fn(),
    }))
}));

test("rendered", async () => {
    render(
        <BrowserRouter>
            <DutyEditPage/>
        </BrowserRouter>
    );
    expect(await screen.findByLabelText("duty-form")).toBeInTheDocument();
})