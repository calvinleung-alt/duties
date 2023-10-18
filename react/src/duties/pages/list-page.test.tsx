import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DutyListPage } from "./list-page";
import { BrowserRouter } from "react-router-dom";

jest.mock("../hooks/use-duties", () => ({
    useDuties: jest.fn(() => ({
        duties: [
            { id: 1, name: "foo" },
            { id: 2, name: "bar" },
        ],
        fetchDuties: jest.fn(),
    }))
}));

test("rendered", async () => {
    render(
        <BrowserRouter>
            <DutyListPage/>
        </BrowserRouter>
    );

    const table = await screen.findByLabelText("table");
    expect(table).toHaveTextContent("foo");
    expect(table).toHaveTextContent("bar");
})