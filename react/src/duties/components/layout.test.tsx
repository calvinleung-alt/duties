import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Layout, LayoutProps } from "./layout";
import { BrowserRouter } from "react-router-dom";

test('rendered', async () => {
    const props: LayoutProps = {
        children: null
    };
    render(
        <BrowserRouter>
            <Layout {...props} />
        </BrowserRouter>
    );
    const title = await screen.findByLabelText("title")
    const homeLink = await screen.findByLabelText("home-link")
    const newLink = await screen.findByLabelText("new-link")

    expect(title).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
    expect(newLink).toBeInTheDocument();
})