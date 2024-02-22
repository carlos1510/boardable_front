import { createBrowserRouter } from "react-router-dom";
import Login, { action as loginAction } from "./routes/Login/Login";
import Signup from "./routes/signup/Signup";
import App, { loader as rootLoader } from "./routes/App/App";

export const router = createBrowserRouter([
    {
        id: "app",
        path: "/",
        element: <App />,
        loader: rootLoader,
    },
    {
        path: "/login",
        element: <Login />,
        action: loginAction,
    },
    {
        path: "/signup",
        element: <Signup />
    }
]);