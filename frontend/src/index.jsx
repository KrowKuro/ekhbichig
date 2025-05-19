import React from "react";
import ReactDOM from "react-dom/client";
import { 
    createBrowserRouter, 
    RouterProvider 
} from "react-router-dom";
import './index.css';

import Root from "./routes/root";
import Courses from "./routes/courses";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
    },
    {
        path: "courses",
        element: <Courses />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

