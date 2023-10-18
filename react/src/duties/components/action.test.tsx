import React from "react";
import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";;
import "@testing-library/jest-dom";
import { Action } from "./action";
import { BrowserRouter } from "react-router-dom";

jest.mock("../hooks/use-duties", () => ({
    useDuties: jest.fn(() => ({
        deleteDuty: jest.fn(),
    }))
}))

jest.mock("../hooks/use-message", () => ({
    useMessage: jest.fn(() => [
        { open: jest.fn() },
        null
    ])
}))

test('rendered', async () => {
    const props = {
        duty: { id: 1, name: "foo" }, 
        onDelete: jest.fn()
    };
    render(
        <BrowserRouter>
            <Action {...props} />
        </BrowserRouter>
    );

    const editLink = await screen.findByLabelText("edit-link");
    const deleteLink = await screen.findByLabelText("delete-link");

    fireEvent.click(editLink);
    fireEvent.click(deleteLink);

    expect(editLink).toHaveAttribute("href", expect.stringContaining(`/${props.duty.id}/edit`));
})