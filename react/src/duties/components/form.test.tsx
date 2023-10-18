import React from "react";
import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";;
import "@testing-library/jest-dom";
import { DutyForm, DutyFormProps } from "./form";

test('rendered', async () => {
    const props: DutyFormProps = {
        btnText: "Confirm",
        onFinish: jest.fn()
    };
    render(<DutyForm {...props} />);
    const nameInput = await screen.findByLabelText("name-input")
    const submitButton =  await screen.findByLabelText("submit-button");

    fireEvent.change(nameInput, { target: { value: "" } })
    fireEvent.click(submitButton)

    expect(await screen.findByText(/Name is required/i)).toBeInTheDocument();
})