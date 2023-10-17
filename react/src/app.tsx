import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DutyListPage } from "./duties/pages/list-page";
import { DutyCreatePage } from "./duties/pages/create-page";
import { DutyEditPage } from "./duties/pages/edit-page";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DutyListPage/>
    },
    {
        path: '/new',
        
        element: <DutyCreatePage/>
    },
    {
        path: '/:id/edit',
        element: <DutyEditPage/>
    },
])

export const App = () => {
    return (
        <RouterProvider router={router}/>
    );
}