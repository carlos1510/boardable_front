import { createBrowserRouter } from "react-router-dom";
import Login, { action as loginAction } from "./routes/Login";
import Signup from "./routes/signup/Signup";
import App, { action as rootAction,loader as rootLoader } from "./routes/App";
import { action as logoutAction } from "./routes/logout";
import Boards from "./routes/Boards/Boards";
import Account from "./routes/Account";

export const router = createBrowserRouter([
    {
        id: "app",
        path: "/board?",
        element: <App />,
        loader: rootLoader,
        action: rootAction,
        children: [
            {
                index: true,
                element: <Boards />
            },
            {
                path: "account",
                element: <Account />
            }
        ]
    },
    {
        path: "/login",
        element: <Login />,
        action: loginAction,
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/logout",
        action: logoutAction,
    },
]);